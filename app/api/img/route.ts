// IMPORTS -
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const ai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!prompt) return new NextResponse("Prompt is required", { status: 400 });

    if (!amount) return new NextResponse("Amount is required", { status: 400 });

    if (!resolution)
      return new NextResponse("Resolution is required", { status: 400 });

    const response = await ai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("IMAGE_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
