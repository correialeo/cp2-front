"use client";

import { TipoConteudo } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function About({params}:{params:{id:number}}) {
  
  const[page, setPage] = useState<TipoConteudo>({
    id: 0,
    title: "",
    text: "",
    date: ""  
  });
  
  const[image, setImage] = useState<string>("")
  const[imageTitle, setImageTitle] = useState<string>("")

useEffect(() => {
  const consumoApi = async() => {
  const response = await fetch(`http://localhost:3000/api/base-conteudo/${params.id}`);
  const data = await response.json();
  setPage(data);
  };
  consumoApi();
}, [params.id]);


useEffect(() => {
    const consumoApi = async() => {
        const response = await fetch(`http://localhost:3000/api/base-nasa/${page.date}`)
        const data = await response.json();   
        setImage(data.url)
        setImageTitle(data.title)
    };
    consumoApi();
}, [page.date])
  
return (
  <div>
    <h1>{page.title}</h1>
        <Image 
          src={image}
          alt={imageTitle} 
          width={400} 
          height={300}
          style={{ width: '25%', height: 'auto' }} 
        />
    <p>{imageTitle}</p>
    <p>{page.text}</p>
    <button><Link href="/"></Link>Próxima página</button>
  </div>
);
}