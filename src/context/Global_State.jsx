import {createContext, useReducer,useEffect} from 'react';
import AppReducer from './AppReducer'


//initial state
const initialState={
    watchlist:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')): [],
    watched:localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): []
};

//create context

export const globalContext=createContext(initialState);


//provider


export const GlobalProvider=(props)=>{
    const [state, dispatch]=useReducer(AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    },[state])

    //actions

    const addMovieToWatchlist=(movie)=>{
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload:movie})
    }
    
    const removeMovieFromWatchlist=(id)=>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload:id})
    }

    const addMovieToWatched=((movie)=>{
        dispatch({type:"ADD_MOVIE_TO_WATCHED", payload:movie})
    })

    //move to watchlist
    const moveToWatchlist=((movie)=>{
        dispatch({type:"MOVE_TO_WATCHLIST", payload:movie})
    })

    //removed from watched
    const removeFromWatched=(id)=>{
        dispatch({type:"REMOVE_FROM_WATCHED", payload:id})
    }

    return (
        <globalContext.Provider value={{watchlist:state.watchlist, watched:state.watched, addMovieToWatchlist, removeMovieFromWatchlist,addMovieToWatched,moveToWatchlist,removeFromWatched}}>
            {props.children}
        </globalContext.Provider>
    )

}