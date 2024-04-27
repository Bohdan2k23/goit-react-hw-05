import { fetch } from "../../movies-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieData } from "../../lib/types";

// import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviewItem, setReviewItem] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const data = await fetch.rewiews(movieId as string);
        setReviewItem(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {error && <p>We don't have any reviews for this movie.</p>}
      {loading && <p>Loading reviews list...</p>}
      {reviewItem.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul>
        {reviewItem.map((review) => (
          <li key={review.id}>
            <h1>Author {review.author}</h1>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
