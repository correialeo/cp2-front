"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-48px)] flex flex-col items-center justify-center bg-homeBackground bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full flex flex-col text-center items-center justify-start gap-5">
        <motion.h2
          className="text-6xl font-Orbitron font-bold bg-gradient-to-b from-white via-neutral-200 to-neutral-900 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: [0, 1, 0.5, 1, 0.7, 1], y: 0 }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
            delay: 1,
          }}
        >
          CP2 - Worlds in Colision
        </motion.h2>
        <p className="font-Poppins font-extralight">
          Este projeto apresenta o CheckPoint 2 de Frontend Design Engineering
        </p>
      </div>
      <div>
        <ul>
          <li>André Marcolongo - RM 555285</li>
          <li>Davi Gonzaga Ferreira - RM 554890</li>
          <li>Leandro Correia - RM 556203</li>
        </ul>
      </div>
    </main>
  );
}
