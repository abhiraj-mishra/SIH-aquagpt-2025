import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAlpyshsn3iCLrvqj9LfKqeZec7zKdaNao" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "who is srk , give answer in few words without any special character and in 30 words",
  });
  console.log(response.text);
}

main();
