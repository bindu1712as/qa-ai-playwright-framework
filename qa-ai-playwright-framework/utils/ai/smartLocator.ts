import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export async function generateLocator(desc: string, dom: string) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{
      role: "user",
      content: `Generate Playwright locator for: ${desc}\nDOM:${dom}`
    }]
  });

  return res.choices[0].message.content;
}