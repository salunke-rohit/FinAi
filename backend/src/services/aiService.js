import axios from "axios";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export const askGroq = async (prompt) => {
  try {
    const response = await axios.post(
      GROQ_URL,
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "You are FinAI, an expert financial advisor. Always return ONLY valid JSON.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.log("========== GROQ ERROR ==========");
    console.log(error.response?.data || error.message);
    console.log("================================");

    throw new Error("Failed to generate AI response");
  }
};