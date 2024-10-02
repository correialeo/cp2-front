import Image from "next/image"

export default function Home(){

  return(
    <div>
      <div>
        <h1>CP2 - Worlds in Colision</h1>
        <p>Este projeto apresenta o CheckPoint 2 de Frontend Design Engineering</p>
        <Image src="/img/worlds_in_colision.jpg" alt="capa livro" width={50} height={50} 
      priority={true}/>
      </div>
      <div>
        <ul>
          <li>André Marcolongo - RM 555285</li>
          <li>Davi Gonzaga Ferreira - RM 554890</li>
          <li>Leandro Correia - RM 556203</li>
        </ul>
      </div>
    </div>
  )
}