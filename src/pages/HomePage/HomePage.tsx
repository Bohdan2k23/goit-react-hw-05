import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetch } from "../../movies-api";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const data = await fetch.trend();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getTrendingMovies();
  }, []);

  return (
    <div>
      {error && <p>please visit our Movies page</p>}
      {loading && <p>Loading movies...</p>}
      {movies.length > 0 && (
        <div>
          <p className={css.text}>Trending today</p>
          <MovieList trendMovies={movies} />
        </div>
      )}
    </div>
  );
}
