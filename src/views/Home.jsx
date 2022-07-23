import { useState, useEffect } from "react";
import { MovieService } from "../api/MovieService";
import Movie from "../components/Movie";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
        <div className="row gy-5">
            {movies.map((movie) => (
                <div key={movie.id} className="col-12">
                  <Movie movieParams={movie}/>
                </div>
            ))}
        </div>
    </div>
  );
};
