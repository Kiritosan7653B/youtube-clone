import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma"; // Adjust path as needed

export default async function GET() {
  const videos = await prisma.videos.findMany();
  if (!videos) {
    return NextResponse.json({ message: "Failed to fetch videos" });
  }
  console.log(videos)

  videos.map(video =>{
    return NextResponse.json(video)
  })
}
