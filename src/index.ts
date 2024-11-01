import "openai/shims/node";

import OpenAI, { toFile } from "openai";
import fs from "fs";
import path from "path";
import audioPlayer from "play-sound";
import os from "os";
import { withTempFile } from "./utils";

const AudioPlayer = audioPlayer({
  player: "mplayer",
});

// gets API Key from environment variable OPENAI_API_KEY
const openai = new OpenAI();

const speechFile = path.resolve(__dirname, "./speech.mp3");

async function main() {
  await streamingDemoNode();
}
main();

async function streamingDemoNode() {
  withTempFile(async (speechFile: string) => {
    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: "the quick brown chicken jumped over the lazy dogs",
    });

    const stream = response.body;
    for await (const chunk of stream) {
      console.debug(`Received ${chunk.length} bytes`);
    }

    console.log(`Streaming response to temp file: ${speechFile}`);
    await streamToFile(stream, speechFile);

    AudioPlayer.play("speech.mp3", function (err: unknown) {
      if (err) throw err;
    });
    console.log("Finished streaming");
  });
}

async function streamToFile(stream: NodeJS.ReadableStream, path: fs.PathLike) {
  return new Promise((resolve, reject) => {
    const writeStream = fs
      .createWriteStream(path)
      .on("error", reject)
      .on("finish", resolve);

    // If you don't see a `stream.pipe` method and you're using Node you might need to add `import 'openai/shims/node'` at the top of your entrypoint file.
    stream
      .pipe(writeStream)
      .on("drain", () => {
        console.debug("[stream-ready]");
      })
      .on("open", () => {
        console.debug("[stream-open]");
      })
      .on("close", () => {
        console.debug("[stream-close]");
      })
      .on("error", (error) => {
        writeStream.close();
        reject(error);
      });
  });
}
