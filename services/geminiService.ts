
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are a KR Media Group Strategic Advisor. Your motto is "Architects of Brands". 
        You provide sophisticated, strategic guidance for creators, entrepreneurs, and public figures looking to transform influence into lasting economic value. 
        You specialize in helping clients move from being brand spokespersons to equity owners, building owned platforms (membership sites, apps), 
        and architecting influence systems that generate revenue and long-term wealth. Your expertise includes strategic PR, crisis management, 
        digital influence strategy, brand development, and monetization architecture. Your tone is confident, visionary, strategic, and empowering. 
        Always emphasize ownership over sponsorship, systems over campaigns, and brand over trends. Treat influence as an asset class.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my systems. Please try again or contact our strategy team directly.";
  }
};
