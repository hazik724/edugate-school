import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    await writeClient.create({
      _type: "contact",
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Saved to Sanity" });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error saving message" },
      { status: 500 }
    );
  }
}