import Image from "next/image"

export default function Home(){

  return(
    <div>
      <Image src="/img/worlds_in_colision.jpg" alt="capa livro" width={50} height={50} 
      priority={true}/>
    </div>
  )
}