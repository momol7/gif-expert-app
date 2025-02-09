import { useState } from "react";

export const AgregarCategoria = () => {
  const [input, setInput] = useState("");

  return(
    <form>
      <input 
        type="text"
        placeholder="Ingresa una categoría"
        value={input}
        onChange={ e => setInput(e.target.value)}
      />
    </form>
  )
}
