import React, {useContext} from 'react';
import {globalContext} from '../context/Global_State'

function Watchlist() {
  const {watchlist}=useContext(globalContext)
  return (
       <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">My Watchlist</h1>
          </div>
          
        </div>
       </div>
  )
}

export default Watchlist