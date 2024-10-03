"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function About() {
  
const[image, setImage] = useState<string>("")
const[title, setTItle] = useState<string>("")

useEffect(() => {
    const consumoApi = async() => {
        const response = await fetch(`http://localhost:3000/api/images-api-nasa/venus`)
        const data = await response.json();   
        setImage(data.imagesData[42].imageUrl)
        setTItle(data.imagesData[42].title)
    };
    consumoApi();
}, [])
  
return (
  <div>
  <h1>Sobre o livro</h1>
      <Image 
        src={image} 
        alt={title} 
        width={400} 
        height={300}
        style={{ width: '25%', height: 'auto' }} 
      />
  <p>{title}</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, assumenda quae blanditiis pariatur iure delectus, illo accusantium ullam explicabo recusandae quis nihil dolore cupiditate beatae illum ex et, nostrum deleniti.</p>
  <button>Próxima página</button>
  </div>
);
}