// IMPORTS -
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";
import { CreateChatCompletionRequestMessage } from "openai/resources/index.mjs";

const ai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

const instructionMessage: CreateChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations",
};

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {return new NextResponse("Unauthorized", { status: 401 });}

    if (!messages)
      {return new NextResponse("Messages are required", { status: 400 });}

    const response = await ai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("CODE_ERROR:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
