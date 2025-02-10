export const GifItem = ({ title, images, id }) => {
  return(
    <div className="card">
      <img src={images} alt={title}/>
      <p>{title}</p>
    </div>
  )
}
