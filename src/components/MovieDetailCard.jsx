import React from 'react'

export const MovieDetailComp = ({movie}) => {
  return (
    <div className="movie-item">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie-excerpt">
          <h3>{movie.title}</h3>
          <ul>
              <li>Budget: {movie.budget}</li>
              <li>Original language: {movie.original_language}</li>
              <li>Popularity: {movie.popularity}</li>
              <li>Overview: {movie.overview}</li>
            </ul>
        </div>
      </div>
  )
}
