export default function ImageCarousel({images=[]}){
  return (
    <div className="space-y-4">
      {images.map((s,i)=> <img key={i} src={s} alt={s} className="w-full rounded" /> )}
    </div>
  )
}