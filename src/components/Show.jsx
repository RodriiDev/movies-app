import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchData } from "../assets/getData";

export default function Show() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            try{
                const edges = await fetchData();

                console.log("Data");
                console.log(edges);
                const moviesData = edges.map(edge => {
                    const entity = edge.node.entity 
                    return {
                        title: entity.nameText.text,
                        imageUrl: entity.primaryImage?.url,
                        year: entity.releaseDate?.year,
                        imdbLink: `https://wwww.imdb.com/title/${entity.id}`,
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
      <h1>Movies</h1>
      {
        movies.map((movie,index) => (
            <Card 
                key={index}
                title={movie.title}
                imageUrl={movie.imageUrl}
                year={movie.year}
                imbdLink={movie.year}
            />
        ))
      }
    </div>
  )
}
