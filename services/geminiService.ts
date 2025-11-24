
import { GoogleGenAI } from "@google/genai";
import { LanguageCode, translations } from "../translations";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLuxuryQuote = async (context: 'start' | 'finish', lang: LanguageCode = 'en'): Promise<string> => {
  // Override for Indonesian to show specific message requested
  if (lang === 'id') {
    return "Saat ini proses promosi sedang dijalankan, tunggu sebentar.";
  }

  const ai = getClient();
  const langName = translations[lang]?.name || "English";
  
  if (!ai) return "Simplicity is the ultimate sophistication.";

  try {
    const prompt = context === 'start' 
      ? `Generate a short, sophisticated, high-fashion style motivational quote about focus, work, and craftsmanship in ${langName} language. Max 15 words. Tone: Gucci, Vogue, Italian luxury. Do not include translation, only the text in ${langName}.`
      : `Generate a short, elegant phrase about resting, recharging, and celebrating a moment of completion in ${langName} language. Max 15 words. Tone: Gucci, Vogue, Italian luxury. Do not include translation, only the text in ${langName}.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text?.trim() || "Simplicity is the ultimate sophistication.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Quality is remembered long after the price is forgotten.";
  }
};