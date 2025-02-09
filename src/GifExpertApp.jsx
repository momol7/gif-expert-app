import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";

export function GifExpertApp(){
  const [ categorias, setCategorias ] = useState(["One Punch","Dragon ball"])

  return(
    <>
      <h1>GifExpertApp</h1>
      <AgregarCategoria setCategorias={setCategorias} />
      <ol>
        { categorias.map( c => ( <li key={c}>{ c }</li> ) )}
      </ol>
    </>
  )
}
