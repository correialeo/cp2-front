"use client";

import { TipoConteudo } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About({ params }: { params: { id: number } }) {
  const [page, setPage] = useState<TipoConteudo>({
    id: 0,
    title: "",
    text: "",
    date: "",
  });

  const [image, setImage] = useState<string>("");
  const [imageTitle, setImageTitle] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const consumoApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/base-conteudo/${params.id}`
      );
      const data = await response.json();
      setPage(data);
    };
    consumoApi();
  }, [params.id]);

  useEffect(() => {
    const consumoApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/base-nasa/${page.date}`
      );
      const data = await response.json();
      setImage(data.url);
      setImageTitle(data.title);
    };
    consumoApi();
  }, [page.date]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="w-full h-[calc(100vh-48px)] flex flex-col items-center justify-center bg-black "
    >
      <motion.h1
        className="font-Orbitron font-bold bg-gradient-to-b from-white via-neutral-200 to-neutral-900 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.75,
        }}
      >
        {page.title}
      </motion.h1>
      <Image src={image} alt={imageTitle} width={400} height={300} />
      <p>{imageTitle}</p>
      <p>{page.text}</p>
    </motion.main>
  );
}
