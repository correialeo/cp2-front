//import { promises as fs } from "fs"
import { NextResponse } from "next/server"

export async function GET(request:Request, {params}:{params:{query:string}}) {
   
    const link = `https://images-api.nasa.gov/search?q=${params.query}`
    //const link = `https://api.nasa.gov/planetary/apod?api_key=OZC1gPX2zkeq7fvMKkKPNWOEbfQ6oCeRkhuEnVkk&date=${params.type}`
    const response = await fetch(link)
    
    const data = await response.json()
    const imagesData = data.collection.items
        .filter((item: { links: { href: string }[] }) => item.links && item.links.length > 0)
        .map((item: { links: { href: string }[]; data: { title: string; }[] }) => ({
            imageUrl: item.links[0].href,
            title: item.data[0].title,      
    })); 
    return NextResponse.json({imagesData})
}


