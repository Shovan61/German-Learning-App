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

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as FieldType;

    const response = await client.verb.create({
      data: {
        englishVerb: data.verb,
        englishSentence: data.sentence,
        present: {
          create: {
            germanVerb: data.germanPresentVerb,
            germanSentence: data.germanPresentSentence,
            audio: data.audioUrlForPresent,
          },
        },
        presentPerfect: {
          create: {
            germanVerb: data.germanPresentPerfectVerb,
            germanSentence: data.germanPresentPerfectSentence,
            audio: data.audioUrlForPresentPerfect,
          },
        },
        past: {
          create: {
            germanVerb: data.germanPastVerb,
            germanSentence: data.germanPastSentence,
            audio: data.audioUrlForPast,
          },
        },
        pastPerfect: {
          create: {
            germanVerb: data.germanPastPerfectVerb,
            germanSentence: data.germanPastPerfectSentence,
            audio: data.audioUrlForPastPerfect,
          },
        },
        future: {
          create: {
            germanVerb: data.germanFutureVerb,
            germanSentence: data.germanFutureSentence,
            audio: data.audioUrlForFuture,
          },
        },
        futurePerfect: {
          create: {
            germanVerb: data.germanFuturePerfectVerb,
            germanSentence: data.germanFuturePerfectSentence,
            audio: data.audioUrlForFuturePerfect,
          },
        },
      },
    });

    if (response) {
      return NextResponse.json({ status: 200, data: response }, origin);
    }
    return NextResponse.json({ status: 404, data: undefined }, origin);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
