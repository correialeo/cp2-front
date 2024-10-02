import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
) {
  const link = `https://api.nasa.gov/planetary/${params.type}?api_key=OZC1gPX2zkeq7fvMKkKPNWOEbfQ6oCeRkhuEnVkk`;
  const response = await fetch(link);
  const data = await response.json();
  return NextResponse.json(data);
}
