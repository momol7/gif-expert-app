import { useState } from "react";

export const AgregarCategoria = ({ onNuevaCategoria }) => {
  const [input, setInput] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length <= 1 ) return;
    onNuevaCategoria(input.toLowerCase());
  }


  return(
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        placeholder="Ingresa una categoría"
        value={input}
        onChange={ e => setInput(e.target.value)}
      />
    </form>
  )
}
