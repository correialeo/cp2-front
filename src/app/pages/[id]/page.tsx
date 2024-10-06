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
      transition={{ ease: "easeInOut", duration: 0.25 }}
      className="w-full h-[calc(100vh-48px)] flex items-center justify-around bg-black first:text-center first:justify-center first:block pb-[48px]"
    >
      <motion.h1
        className="font-Orbitron font-bold text-4xl bg-gradient-to-b from-white via-neutral-200 to-neutral-900 bg-clip-text text-transparent"
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

      <div className="w-full h-full flex text-center items-center">
        <div className="w-full h-96 flex text-left px-4 justify-center items-center overflow-scroll">
          <motion.p
            className="font-Poppins font-thin text-xl w-2/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{
              duration: 1,
              ease: [0.4, 0, 0.2, 1],
              delay: 1.5,
            }}
          >
            {page.text}
          </motion.p>
        </div>
        <motion.div
          className="w-full h-auto flex flex-col gap-2 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
            delay: 2,
          }}
        >
          <p className="font-Orbitron">{imageTitle}</p>
          <Image src={image} alt={imageTitle} width={500} height={500} />
        </motion.div>
      </div>
    </motion.main>
  );
}
