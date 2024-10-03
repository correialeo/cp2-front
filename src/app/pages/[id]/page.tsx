"use client";

import { ConteudoTipo } from "@/types"
import Image from "next/image";
//import Image from "next/image";
import { useEffect, useState } from "react"

export default function Page({params}:{params:{type:string}}) {
  
  const[page, setConteudo] = useState<ConteudoTipo>({
    id:0,
    titulo:"",
    texto:"",
    image:""
  })
  
  useEffect(() => {
    const consumoApi = async() => {
    const response = await fetch(`http://localhost:3000/api/base-nasa/${params.type}`);
    const data = await response.json();
    
    setConteudo({
      id:0,
      titulo:"",
      texto:"",
      image: data.hdurl
    });
    };
       
    consumoApi();

}, [params.type]);


  return (
    <div>
      <h2>Conteudo</h2>
    <div>
        <p>Titulo:{page.titulo}</p>
        <p>{page.texto}</p>
        <Image src={page.image} alt=""/>
    </div>
</div>

  )
}
