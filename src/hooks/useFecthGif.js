import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFecthGif = categoria => {
  const [image, setImage] = useState([]);

  const getImage = async () => {
    const newImage = await getGifs(categoria);
    setImage(newImage)
  }

  useEffect(() =>  {
    getImage()
  }, []);

  return {
    image
  }
}
