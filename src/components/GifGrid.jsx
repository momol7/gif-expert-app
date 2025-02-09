import { getGifs } from "../helpers/getGif";

export const GifGrid =({ categoria }) => {
  console.log(getGifs());
  return <h3>{categoria}</h3>
}
