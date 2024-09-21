import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchData } from "../assets/getData";

export default function Show() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        const getMovies = async () => {
            try{
                const dataResult = await fetchData();

                console.log("Data");
                console.log(dataResult);

                const moviesData = dataResult.movies.map((movie) => {
                    return {
                        title: movie?.title || "Untitled",
                        imageUrl: movie?.poster_path,
                        year: movie?.release_date,
                        genres: movie?.genres,
                    };
                });

                setMovies(moviesData)
            } catch (error) {
                console.log('Error fetching data: ', error)
            }
        };
        getMovies();
    }, [])

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase()) || 
        ( movie.year && movie.year.toString().includes(search) )
    )

  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Movies</h1>
      <div class="text-center mt-3">
        <input class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="Search Movies..." value={search} onChange={handleSearchChange} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        { filteredMovies.length > 0 ? (
      
            filteredMovies.map((movie,index) => (
                <Card 
                    key={index}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    year={movie.year}
                    genres={movie.genres}
                />
            ))

            ) : (
                <p>No movies found</p>
            )
        }
      </div>
    </div>
  )
}
