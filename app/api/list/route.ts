import { client } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const origin = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};

export async function GET(request: Request) {
  try {
  
    return NextResponse.json(
      { status: 200, data: [{ data: "Apple" }] },
      origin
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error while fetching user information request for List");
  }
}
