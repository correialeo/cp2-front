import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-5 gap-4">
      <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
        <h2 className="font-bold text-2xl">CP2 - Worlds in Colision</h2>
        <p>
          Este projeto apresenta o CheckPoint 2 de Frontend Design Engineering
        </p>
        <Image
          src="/img/worlds_in_colision.jpg"
          alt="Capa do livro Worlds in Collision"
          width={300}
          height={50}
          priority={true}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <ul>
          <h3 className="text-center font-bold">Integrantes</h3>
          <li>André Marcolongo - RM 555285</li>
          <li>Davi Gonzaga Ferreira - RM 554890</li>
          <li>Leandro Correia - RM 556203</li>
        </ul>
      </div>
    </main>
  );
}
