import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-48px)] flex items-center justify-around bg-black">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-5xl font-Orbitron">Erro 404</h2>
        <p className="text-xl font-thin font-Gruppo">Página não encontrada.</p>
      </div>
      <Image
        src="/img/error404.jpg"
        alt="Erro 404 - Página não encontrada"
        width={600}
        height={200}
      />
    </div>
  );
}
