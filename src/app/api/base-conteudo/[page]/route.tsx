import { TipoConteudo } from "@/types";
import { promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:{params:{page:string}}) {
  
    const file = await fs.readFile(process.cwd()+"/src/data/base.json", "utf-8")
    const data:TipoConteudo[] = JSON.parse(file);
    const album = data.find( p => p.page == params.page);
    return NextResponse.json(album);
}