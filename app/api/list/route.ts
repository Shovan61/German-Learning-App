import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

const origin = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};

export async function GET() {
  try {
    const response = await client.verb.findMany({
      include: {
        present: true,
        presentPerfect: true,
        past: true,
        pastPerfect: true,
        future: true,
        futurePerfect: true,
      },
    });
    if (response) {
      return NextResponse.json({ status: 200, data: response }, origin);
    } else {
      return NextResponse.json({ status: 404, data: undefined }, origin);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error while fetching user information request for List");
  }
}
