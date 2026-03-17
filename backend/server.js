import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Configurar OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Ruta principal de chat
app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ reply: "Falta el prompt" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // rápido y económico
      messages: [
        {
          role: "system",
          content:
            "Eres un tutor de programación amigable, explicas fácil y claro. También puedes corregir inglés si el usuario lo intenta.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;

    res.json({ reply });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ reply: "Error al conectar con la IA" });
  }
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Puerto
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
