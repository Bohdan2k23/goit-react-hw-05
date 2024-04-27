import { fetch } from "../../movies-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieData } from "../../lib/types";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [castItem, setCastItem] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const data = await fetch.cast(movieId as string);
        setCastItem(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      {error && <p>Sorry, we are working on providing this information</p>}
      {loading && <p>Loading cast list...</p>}
      <ul>
        {castItem.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className={css.img}
            />
            <h1>{actor.name}</h1>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
