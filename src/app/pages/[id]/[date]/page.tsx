"use client";

import { ConteudoTipo } from "@/types"
import Image from "next/image";
//import Image from "next/image";
import { useEffect, useState } from "react"

export default function Page({params}:{params:{date:string}}) {
  
  const[page, setConteudo] = useState<ConteudoTipo>({
    id:0,
    titulo:"",
    texto:"",
    image:""
  })
  
  useEffect(() => {
    const consumoApi = async() => {
    const response = await fetch(`http://localhost:3000/api/base-nasa/${params.date}`);
    const data = await response.json();
    
    console.log(data.hdurl)

    setConteudo({
      id:0,
      titulo:"",
      texto:"",
      image: data.hdurl
    });
    };

       
    consumoApi();

}, [params.date]);


  return (
    <div>
      <h2>Conteudo</h2>
    <div>
        <p>Titulo:{page.titulo}</p>
        <p>{page.texto}</p>
        <Image src={page.image} alt="imagem nasa" width={350} height={350} property="true"/>
    </div>
</div>

  )
}
