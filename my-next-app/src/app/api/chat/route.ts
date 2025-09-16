import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function POST(req: Request) {
  try {
    if (!apiKey || !genAI) {
      return NextResponse.json(
        { error: "Server misconfiguration: GEMINI_API_KEY is missing." },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    const message = body?.message;

    if (typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Invalid request: 'message' must be a non-empty string." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // The SDK accepts a string or an array of parts. Use string directly.
    const result = await model.generateContent(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    const message =
      typeof error?.message === "string"
        ? error.message
        : "Unexpected server error while generating content.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Simple diagnostics endpoint: visit /api/chat in the browser to verify server env
export async function GET() {
  const hasKey = Boolean(apiKey) && typeof apiKey === "string" && apiKey.length > 0;
  return NextResponse.json({ hasKey, env: process.env.NODE_ENV || "development" });
}
