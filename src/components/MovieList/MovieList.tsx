import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ trendMovies }) {
  const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {trendMovies.map((trendMovie) => (
          <li key={trendMovie.id}>
            <p>
              <Link
                to={`/movies/${trendMovie.id}`}
                state={location}
                className={css.link}
              >
                {trendMovie.title}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
