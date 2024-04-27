import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetch } from "../../movies-api";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [params, setParams] = useSearchParams();

  const onSearch = async (newQuery: string) => {
    setQuery(newQuery);

    try {
      setLoading(true);
      const data = await fetch.search(newQuery);
      setMovies(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (newQuery: string) => {
    params.set("newSearchQuery", newQuery);
    setParams(params);
  };
  return (
    <div>
      <SearchBar
        onSearch={onSearch}
        onChange={onChange}
        value={params.get("newSearchQuery") ?? ""}
      />
      {loading && <p>Loading movies list...</p>}
      {error && <p>No movies found</p>}
      {movies.length > 0 && <MovieList trendMovies={movies} />}
    </div>
  );
}
