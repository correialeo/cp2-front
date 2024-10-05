import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 flex items-center justify-between px-5 bg-zinc-700 text-white">
      <h1 className="w-full font-bold text-2xl ">Worlds in Collision</h1>
      <nav>
        <ul className="w-full h-full flex items-center justify-end">
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/"}>Page 1</Link>
          </li>
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/"}>Page 2</Link>
          </li>
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/"}>Page 3</Link>
          </li>
          <li className="hover:underline hover:text-sky-400 transition-all">
            <Link href={"/"}>Page 4</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}
