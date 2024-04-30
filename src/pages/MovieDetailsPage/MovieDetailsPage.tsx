import css from "./MovieDetailsPage.module.css";

import { fetch } from "../../movies-api";
import { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { MovieData } from "../../lib/types";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkURLRef = useRef(
    location.state ?? "/movies"
  );

  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieData | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await fetch.byId(movieId as string);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {error && <p>please visit our Home page</p>}
      {loading && <p>Loading movie...</p>}
      {/* <button className={css.btn}> */}
      <Link to={backLinkURLRef.current} className="btn">
        Go back
      </Link>
      {/* </button> */}

      {movie && (
        <div className={css.details}>
          <div className={css.wrap}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.original_title}
              className={css.img}
            />
            <div className={css.movie}>
              <div className={css.titleWrap}>
                <h1>{movie.original_title}</h1>
                <h2>({movie.release_date.slice(0, 4)})</h2>
              </div>
              <p>
                User Score:{" "}
                {Math.round(movie.vote_average * 10)}%
              </p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>

              <h2>Genres</h2>
              <ul className={css.genresList}>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3>Additional information</h3>
          <ul className={css.list}>
            <li>
              <Link className="btn" to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link className="btn" to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense
            fallback={<b>Loading nested route...</b>}
          >
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
