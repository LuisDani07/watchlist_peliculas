import React, {useContext} from 'react';
import {globalContext} from '../context/Global_State'
import MovieCard from './MovieCard';


function Watchlist() {
  const {watchlist}=useContext(globalContext)
  return (
       <div className="movie-page">
          <div className="container">
            <div className="header">
               <h1 className='heading'>My watchlist</h1>
            </div>
             {watchlist.length>0 ?(
                      <div className='movie-grid'>
                      {watchlist.map((movie)=>(
                         <MovieCard movie={movie} type="watchlist"/>
                      ))}
                    </div>
             ):
             (
              <h2 className='no-movies'>no movies in your list, add some</h2>
             )}
          
          </div>
       </div>
  )
}

export default Watchlist