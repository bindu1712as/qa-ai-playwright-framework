import OpenAI from "openai";
import fs from "fs";

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export async function validateGraph(path: string) {
  const img = fs.readFileSync(path, "base64");

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{
      role: "user",
      content: [
        { type: "text", text: "Validate CRM graph" },
        { type: "image_url", image_url: { url: `data:image/png;base64,${img}` } }
      ]
    }]
  });
