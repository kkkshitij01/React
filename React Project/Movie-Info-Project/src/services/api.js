const API_KEY = "e0aecf624f26bc14787da0ea92ca50d6"

const Base_url = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch(`${Base_url}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results
}
export const searchMovies = async (query) => {
    const response = await fetch(`${Base_url}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    const data = await response.json();
    return data.results
}