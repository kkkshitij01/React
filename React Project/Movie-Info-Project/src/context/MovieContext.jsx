import { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorite] = useState([]);
    useEffect(() => {
        const storeFavs = localStorage.getItem("favorites");
        if (storeFavs) setFavorite(JSON.parse(storeFavs));

    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);


    const addToFavorites = (movie) => {
        setFavorite(prev => [...prev, movie]);
    }
    const removeFavorite = (movieId) => {
        setFavorite(prev => prev.filter((movie) => movie.id !== movieId));

    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFavorite,
        isFavorite
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )

}
