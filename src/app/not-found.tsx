import Image from "next/image";

export default function NotFound(){
    return(
        <div>
            <p>Error 404 - Page Not Found</p>         
            <Image src="/img/andromeda-galaxy.jpg" 
            alt="Galáxia de Andromeda" 
            width={600} height={200}
            style={{ width: '40%', height:'auto' }}/>
        </div>
    )
}