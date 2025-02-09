export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=K4zVlPCHkd4v5uIZkQpAouIDqdTl4ACj&q=${categoria}&limit=20`;

  const resp = await fetch(url)
  const { data } = await resp.json();
  const gifs = data.map(( { id, title, images } ) => {
     return {
      a:1,
      id,
      images: images.downsized_medium.url,
      title
     }
   })
  return gifs
}
