import "../css/MovieCard.css"
import {useMovieContext} from "../contexts/MovieContext"

function MovieCard({movie}) {
    const {isFavorite, addToFavorite, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    //e = event handler
    //e.target → elemen yang diklik
    //e.preventDefault() → mencegah perilaku default (misalnya mencegah submit form)
    //e.stopPropagation() → menghentikan event bubbling (agar event nggak diteruskan ke parent)
    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
            else addToFavorite(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>👍</button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard
