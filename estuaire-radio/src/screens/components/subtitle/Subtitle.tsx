
interface SubtitleProps  {
  title : string;
}

export default function Subtitle({title} : SubtitleProps  ){
  return(
    <div className="flex flex-row w-full bg-whiteColor p-4">
      <span className="text-xl font-semibold text-gray-500 animate__animated animate__bounce">Accueil / {title}</span>
    </div>
  )
}