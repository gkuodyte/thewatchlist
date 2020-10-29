import React, {useState, useEffect} from "react";
import MovieCard from "./movieCard.js";
import {searchFavorites, tmdbSearchMovies, addToFavorites} from "./Api";
 
function initialState() {
    return {query: '', searchMovies: [], favoriteMovies: null, showFavorites: false, favoritesMap: {}};
}

export default function SearchMovie() {

    const [state, setState] = useState(initialState());

    useEffect(async () => {        
        if(state.favoriteMovies == null) {
            let favoriteMovies = await searchFavorites();
            let favoritesMap = {};

            for(const favorite of favoriteMovies) favoritesMap[favorite.id] = favorite;

            setState({...state, favoriteMovies, favoritesMap})
        }
    })

    async function updateMovieList(e) {
        e.preventDefault();
        setState({...state, searchMovies: await tmdbSearchMovies(state.query), showFavorites: false})
    }

    function checkFavorite(movie_id) {
        return state.favoritesMap[movie_id] !== undefined;
    }

    async function toggleFavorite(movie_id) {
        await addToFavorites(movie_id, checkFavorite(movie_id));
        let favoriteMovies = await searchFavorites();
        let favoritesMap = {};

        for(const favorite of favoriteMovies) favoritesMap[favorite.id] = favorite;

        setState({...state, favoriteMovies, favoritesMap})
    }

    const movies = state.showFavorites ? state.favoriteMovies : state.searchMovies;
    return (
        <>
        <form className="form" onSubmit={(updateMovieList)}>
            <label className="label" htmlFor="query"> Movie name </label>
            <input className="input" type="text" name="query"
            placeholder="i.e. Jurassic Park"
            value={state.query} onChange={(e) => setState({...state, query: e.target.value})}
            ></input>
            <button className="button" type="submit">Search</button>
        </form>
        <div className="form">
            <button className="button" onClick={() => setState({...state, showFavorites: !state.showFavorites})}>Favorites</button>
        </div>
        <div className="card-list">
            {movies.filter(movie => movie.status !== "REMOVED").map(movie => (
                <MovieCard movie={movie} key={movie.id} isFavorite={checkFavorite(movie.id)} toggleFavorite={() => toggleFavorite(movie.id)} />
            ))}
        </div>
        </>
    )
}