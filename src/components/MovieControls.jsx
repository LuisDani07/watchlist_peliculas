import React,{useContext} from 'react';
import {globalContext} from '../context/Global_State';

function MovieControls({movie, type}) {
    const {removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched }=useContext(globalContext);
  return (
    <div className="inner-card-controls">
        {type==='watchlist' &&(
            <>
                <button className='ctrl-button' onClick={()=>addMovieToWatched(movie)}>
                    <i className='fa-fw far fa-eye'></i>
                </button>
                
                <button className='ctrl-button' onClick={()=>removeMovieFromWatchlist(movie.id)}>
                    <i className='fa-fw fa fa-times'></i>
                </button>
            </>
        )}
        {type==='watched' &&(
            <>
                  <button className="ctrl-btn" onClick={()=>moveToWatchlist(movie)}>
                    <i className="fa-fw far fa-eye-slash"></i>
                  </button>
                  <button className="ctrl-btn" onClick={()=>removeFromWatched(movie.id)}>
                    <i className="fa-fw fa fa-times"></i>
                  </button>

            </>
        )}
    </div>
  )
}

export default MovieControls