// IMPORTS -
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const rep = new Replicate({
  auth: process.env.REPLICATE_AI!,
});

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {return new NextResponse("Unauthorized", { status: 401 });}

    if (!prompt) {return new NextResponse("Prompt is required", { status: 400 });}

    const response = await rep.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt,
        },
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    console.log("VIDEO_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
