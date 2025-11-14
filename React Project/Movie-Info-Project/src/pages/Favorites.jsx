import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard";


export default function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div>
                <h2>Your Favorites</h2>
                < div className="movies-grid" >
                    {favorites.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
                </div >
            </div>
        )
    } else {

        return (
            <div className="favorites-empty">
                <h2>No favourite movies yet</h2>
                <p>Start adding Movies to your favorites</p>
            </div>
        )
    }
}
