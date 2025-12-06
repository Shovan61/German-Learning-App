import { FieldType } from "@/components/main";
import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

const origin = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};

export async function POST(id: string, body: Request) {
  try {
    const data = (await body.json()) as FieldType;

    // if (response) {
    //   return NextResponse.json({ status: 200, data: response }, origin);
    // }
    return NextResponse.json({ status: 404, data: undefined }, origin);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Error While submitting" },
      { status: 500 }
    );
  }
}
