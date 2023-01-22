import React from 'react'

function MovieCard({movie, type}) {
  return (
    <div movie-card>
        <div className="overlay"></div>
        {movie.poster_path ? (
               <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} /> 
            ):(
                <div className="filler-poster"></div>
            )}
    </div>
  )
}

export default MovieCard