import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";

export function GifExpertApp(){
  const [ categorias, setCategorias ] = useState(["One Punch","Dragon ball"])

  const onAgregarCategoria = () => setCategorias([...categorias, "Valorant"]);
  return(
    <>
      <h1>GifExpertApp</h1>
      <AgregarCategoria />
      <button onClick={ onAgregarCategoria } >Agregar</button>
      <ol>
        { categorias.map( c => ( <li key={c}>{ c }</li> ) )}
      </ol>
    </>
  )
}
