import { ConteudoTipo } from "@/types";
export default function PaginaLivro(props: ConteudoTipo) {
  return (
    <>
      <h1>Página - {props.id} </h1>
      <div>{props.texto}</div>
    </>
  );
}
