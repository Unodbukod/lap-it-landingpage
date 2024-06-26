import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    if (id) {
      const featureContent = await db.featuresContent.findFirst({
        where: { id: Number(id) },
      });
      if (!featureContent) {
        return NextResponse.json({ message: "Content not found" });
      }
      return NextResponse.json({ featureContent }, { status: 200 });
    } else {
      const featuresContent = await db.featuresContent.findMany();
      return NextResponse.json({ featuresContent }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PUT = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");

  try {
    const body = await req.json();
    const { contentName, content } = body;
    const updatedFeaturecontent = await db.featuresContent.update({
      where: { id: Number(id) },
      data: { contentName, content },
    });

    if (updatedFeaturecontent) {
      console.log("Updated Content:", updatedFeaturecontent);
      return NextResponse.json({ message: "Content updated successfully" });
    } else {
      return NextResponse.json(
        { message: "Content not found or not updated" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { message: "Error updating content" },
      { status: 500 }
    );
  }
};
