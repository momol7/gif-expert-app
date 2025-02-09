import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const GifGrid =({ categoria }) => {
  const [image, setImage] = useState([]);

  const getImage = async () => {
    const newImage = await getGifs();
    setImage(newImage)
  }

  useEffect(() =>  {
    getImage()
  }, []);
  return (
    <>
     <h3>{categoria}</h3>
     <ol>
       {image.map(i => (
         <li key={i.id}>{i.title}</li>
       ))}
     </ol>
    </>
  )
}
