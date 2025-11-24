
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
  const ai = getClient();
  const langName = translations[lang]?.name || "English";
  
  if (!ai) return lang === 'id' ? "Keanggunan adalah sebuah sikap." : "Elegance is an attitude."; // Fallback

  try {
    const prompt = context === 'start' 
      ? `Generate a short, sophisticated, high-fashion style motivational quote about focus, work, and craftsmanship in ${langName} language. Max 15 words. Tone: Gucci, Vogue, Italian luxury. Do not include translation, only the text in ${langName}.`
      : `Generate a short, elegant phrase about resting, recharging, and celebrating a moment of completion in ${langName} language. Max 15 words. Tone: Gucci, Vogue, Italian luxury. Do not include translation, only the text in ${langName}.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text?.trim() || (lang === 'id' ? "Kesederhanaan adalah kecanggihan tertinggi." : "Simplicity is the ultimate sophistication.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'id' ? "Kualitas diingat lama setelah harga dilupakan." : "Quality is remembered long after the price is forgotten.";
  }
};
