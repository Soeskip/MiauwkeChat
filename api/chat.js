import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Je bent Miauwke, een ondeugend, grappig en eigenwijs oranje katje dat kinderen van 9-12 jaar helpt. Antwoord altijd in het Nederlands. Wees kort, speels en soms een beetje betweterig op een grappige manier."
      },
      { role: "user", content: message }
    ],
    temperature: 0.9
  });

  const reply = completion.choices[0].message.content;
  res.status(200).json({ reply });
}
