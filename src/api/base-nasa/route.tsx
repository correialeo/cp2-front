import { promises as fs } from "fs"
import { NextResponse } from "next/server"

export async function route() {
    const link = "https://api.nasa.gov/planetary/apod?api_key=OZC1gPX2zkeq7fvMKkKPNWOEbfQ6oCeRkhuEnVkk"
    const file = await fs.readFile(link, "utf-8")
    const data = JSON.parse(file)
    return NextResponse.json(data)
}
