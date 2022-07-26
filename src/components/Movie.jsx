import { Link } from "react-router-dom";

const Movie = ({ movieParams }) => {
  return (
    <div className="movie-item">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${movieParams.poster_path}`}
          alt=""
        />
      </div>
      <div className="movie-excerpt">
        <h3>{movieParams.title}</h3>
        <Link to={`/movie/${movieParams.id}`} className="btn btn-primary">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};

export default Movie;
