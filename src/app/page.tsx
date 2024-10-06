"use client";
import { motion } from "framer-motion";
export default function Home() {
  const text =
    "Este projeto apresenta o CheckPoint 2 de Frontend Design Engineering";
  const letters = Array.from(text);
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
        <motion.p className="font-Poppins font-extralight">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.07 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </main>
  );
}
