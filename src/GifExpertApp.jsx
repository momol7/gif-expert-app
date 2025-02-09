import { useState } from "react";

export function GifExpertApp(){
  const [ categorias, setCategorias ] = useState(["One Punch","Dragon ball"])

  const onAgregarCategoria = () => setCategorias([...categorias, "Valorant"]);
  return(
    <>
      <h1>GifExpertApp</h1>
      <button onClick={ onAgregarCategoria } >Agregar</button>
      <ol>
        { categorias.map( c => ( <li key={c}>{ c }</li> ) )}
      </ol>
    </>
  )
}
