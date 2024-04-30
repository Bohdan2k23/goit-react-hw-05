import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ trendMovies }) {
  const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {trendMovies.map((trendMovie) => (
          <li key={trendMovie.id}>
            
              <Link
                to={`/movies/${trendMovie.id}`}
                state={location}
                className="btn"
              >
                {trendMovie.title}
              </Link>
           
          </li>
        ))}
      </ul>
    </div>
  );
}
