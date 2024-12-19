import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import IMovie from "../../interfaces/IMovie";
import "./Home.css"

interface PropsMovies {
    moviesList: IMovie[],
    setMoviesList: React.Dispatch<React.SetStateAction<IMovie[]>>,

}

const Home: React.FC<PropsMovies> = (props) => {

    if(!props.moviesList) return <Loader />

    return ( 
        <section className="wrapper grid__movies">
        {props.moviesList.length > 0 ? (
          props.moviesList.map((movie) => (
            <Link to={"movie/" + movie.id } key={movie.id} className="card movie__card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                }
                alt={movie.original_title || "No Title"}
                className="movie__poster"
              />
      
              <h2 className="movie__title">{movie.original_title || "No Title"}</h2>
              <p className="movie__desc">{movie.release_date || "Unknown Date"}</p>
              <p className="movie__average"> 
                { movie.vote_average !== undefined ? movie.vote_average : "N/A"}
              </p>
            </Link>
          ))
        ) : (
          <p>Movies Not Found</p>
        )}
      </section>
     );
}
 
export default Home;