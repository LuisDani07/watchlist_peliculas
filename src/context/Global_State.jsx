import {createContext, useReducer,useEffect} from 'react';
import AppReducer from './AppReducer'


//initial state
const initialState={
    watchlist:[],
    watched:[],
};

//create context

export const globalContext=createContext(initialState);


//provider

const addMovieToWatchlist=(movie)=>{
    dispatch({type:"ADD_MOVIE_TO_WATCHLIST", payload:movie})
}

export const GlobalProvider=(props)=>{
    const [state, dispatch]=useReducer(AppReducer, initialState);

    //actions


    return (
        <globalContext.Provider value={{watchlist:state.watchlist, watched:state.watched, addMovieToWatchlist}}>
            {props.children}
        </globalContext.Provider>
    )

}