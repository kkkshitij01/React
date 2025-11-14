import "../css/Home.css"
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"
import { searchMovies, getPopularMovies } from "../services/api.js"

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                console.log(popularMovies)
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("failed to load Movies...");
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return
        setLoading(true);
        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult);
            console.log(searchResult);
            setError(null);
        } catch (err) {
            setError("failed to Search Movies...");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="Home">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text"
                    placeholder="Search for movies..."
                    className="search-inp"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-btn">Submit</button>
            </form>

            {loading ? <div style={{ textAlign: "center" }}>Loading...</div> : <div className="movies-grid">
                {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>}

        </div>
    )
}
