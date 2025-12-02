/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploaded = await cloudinary.uploader.upload_stream(
      {
        resource_type: "video", // for audio upload you must use video
        folder: "audio_uploads",
      },
      (error, result) => {
        if (error) throw error;
      }
    );

    // Need to return a Promise because upload_stream works with callback
    const result: any = await new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          resource_type: "video",
          folder: "audio_uploads",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      upload.end(buffer);
    });

    return NextResponse.json({ audioUrl: result.secure_url }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
