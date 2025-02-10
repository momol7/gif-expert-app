import { GifItem } from "./GifItem";
import { useFecthGif } from "../hooks/useFecthGif";

export const GifGrid =({ categoria }) => {
  const { image } = useFecthGif(categoria);
  

  return (
    <>
     <h3>{categoria}</h3>
     <div className="card-grid">
       {image.map(i => (
         <GifItem key={i.id} {...i} />
       ))}
     </div>
    </>
  )
}
