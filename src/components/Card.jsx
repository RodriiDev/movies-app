export default function Card({key, imageUrl, title, year, genres}) {
  return (
    <div className="group relative" id={key}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-90">

        <img src={imageUrl} alt={title}  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        
        <div className="mt-3 flex justify-between">
                <div>
                  <h3 className="font-semibold text-md text-gray-900">
                    <a href="">
                      {title} ({year.substring(0,4)})
                    </a>
                  </h3>
                  {genres.map((genre, index) => (
                    <label className="mt-1 text-sm text-gray-600">{genre} </label>
                  ))}
                </div>
        </div>
    
      </div>
    </div>
  )
}

