import { useNavigate, useParams } from "react-router-dom";
import IMovie from "../../interfaces/IMovie";
import "./DetailMovie.css";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";



interface PropsMovieList {
    moviesList: IMovie[]
}



const DetailMovie: React.FC<PropsMovieList> = (props) => {
    const [singleMovie, setSingleMovie] = useState<IMovie | null>(null);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        if (props.moviesList && props.moviesList.length > 0 && id) {
            const findItemById = props.moviesList.find(
                (singleMovie) => Number(singleMovie.id) === Number(id)
            );
            console.log(findItemById);
            setSingleMovie(findItemById || null);
        }
    }, [id, props.moviesList]);

    if (!singleMovie) return <Loader />;

    return (
        <section className="wrapper detail__movie">
            
            <section className="movie__container">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
                    alt={singleMovie.title || "Movie Poster"}
                />
                <div className="movie__content">
                    <h1>{singleMovie.title}</h1>
                    <p>{singleMovie.overview}</p>
                    <h2>Release Date: {singleMovie.release_date}</h2>
                    <hr />
                    <p>Rating: {singleMovie.vote_average}/10 ⭐</p>
                    <button className="btn" onClick={() => navigate(-1)}>← Back</button>
                </div>
            </section>
        </section>
    );
};

export default DetailMovie;