import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp(){
  const [ categorias, setCategorias ] = useState(["One Punch","Dragon ball"])

  const onNuevaCategoria = categoria => {
    if (categorias.includes(categoria)) return;
    setCategorias([categoria, ...categorias]);
  }
  return(
    <>
      <h1>GifExpertApp</h1>
      <AgregarCategoria onNuevaCategoria={onNuevaCategoria} />
      <ol>
        { categorias.map( c => ( <GifGrid key={c} categoria={c} /> ) )}
      </ol>
    </>
  )
}
