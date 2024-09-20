import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchData } from "../assets/getData";

export default function Show() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            try{
                const dataResult = await fetchData();

                console.log("Data");
                console.log(dataResult);

                const moviesData = dataResult.movies.map((movie) => {
                    return {
                        title: movie.title,
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

  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Movies</h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
        movies.map((movie,index) => (
            <Card 
                key={index}
                title={movie.title}
                imageUrl={movie.imageUrl}
                year={movie.year}
                genres={movie.genres}
            />
        ))
      }
      </div>
    </div>
  )
}
