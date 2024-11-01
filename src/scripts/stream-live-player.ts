import "openai/shims/node";

import OpenAI from "openai";
import fs from "fs";
import audioPlayer from "play-sound";

const AudioPlayer = audioPlayer({
  // the audio player changes depending on your system.
  // on macOS, you can typically use `afplay`
  player: "afplay",
});

const openai = new OpenAI();

async function main() {
  await streamingDemoNode();
}
main();

async function streamingDemoNode() {
  const mp3Path = "speech.mp3";
  console.debug("📡 Sending request to OpenAI");
  const response = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "to be or not to be, that is the question",
  });

  const stream = response.body;

  // can show off how to read through chunks manually here
  // for await (const chunk of stream) {
  //   console.debug(`Received ${chunk.length} bytes`);
  // }

  console.debug(`🌊 Streaming response to temp file: ${mp3Path}`);
  await streamToFile(stream, mp3Path);
  console.debug("✅ Finished streaming");

  console.debug(`🔊 Playing ${mp3Path}`);
  AudioPlayer.play(mp3Path, function (err: unknown) {
    if (err) throw err;
  });
  console.debug("👋 We're done!");
}

async function streamToFile(stream: NodeJS.ReadableStream, path: fs.PathLike) {
  return new Promise((resolve, reject) => {
    const writeStream = fs
      .createWriteStream(path)
      .on("error", reject)
      .on("finish", resolve);

    stream
      .pipe(writeStream)
      .on("ready", () => {
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
