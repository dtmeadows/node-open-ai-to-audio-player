import "openai/shims/node";

import express from "express";
import OpenAI from "openai";

const openai = new OpenAI();

const app = express();

app.get("/audio", async (req: express.Request, res: express.Response) => {
  const response = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "to be or not to be, that is the question",
  });

  const stream = response.body;

  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
  });

  stream.pipe(res);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
