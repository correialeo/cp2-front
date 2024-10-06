import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-12 flex items-center justify-between bg-[#000000] px-5 py-2">
      <Link href={"/"}>
        <h1 className="w-full text-2xl font-Gruppo">Worlds in Collision</h1>
      </Link>
      <nav>
        <ul className="w-full h-full flex items-center justify-end font-Gruppo text-xl font-medium gap-4">
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/pages/1"}>Página 1</Link>
          </li>
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/pages/2"}>Página 2</Link>
          </li>
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/pages/3"}>Página 3</Link>
          </li>
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/pages/4"}>Página 4</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
