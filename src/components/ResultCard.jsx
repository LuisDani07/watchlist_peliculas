import React,{useContext} from 'react';
import {globalContext} from '../context/Global_State';

function ResultCard({movie}) {

  const { addMovieToWatchlist}=useContext(globalContext);

  return (
    <div className='result-card'>
        <div className="poster-wrapper">
            {movie.poster_path ? (
               <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} /> 
            ):(
                <div className="filler-poster"></div>
            )}
        </div>
        <div className="info">
            <div className="header">
                <h3 className="title">{movie.title}</h3>
                <h4 className='release-date'>
                 {movie.release_date?  movie.release_date.substring(0,4): "-"}
                </h4>
            </div>
              <div className="controls">
                   <button className="btn" onClick={()=>addMovieToWatchlist(movie)}>
                    Add to watchlist
                   </button>
              </div>
        </div>
    </div>
  )
}

export default ResultCard