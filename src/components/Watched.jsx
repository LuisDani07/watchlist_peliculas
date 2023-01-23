import React,{useContext} from 'react';
import {globalContext} from '../context/Global_State';
import MovieCard from './MovieCard'

function Watched() {
  const {watched}=useContext(globalContext);

  return (
    <div className="movie-page">
          <div className="container">
            <div className="header">
               <h1 className='heading'>watched movies</h1>
            </div>
             {watched.length>0 ?(
                      <div className='movie-grid'>
                      {watched.map((movie)=>(
                         <MovieCard movie={movie} type="watched"/>
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

export default Watched