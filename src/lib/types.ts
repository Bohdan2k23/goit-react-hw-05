export type MovieData = {
  id: string;
  name: string;
  character: string;
  profile_path: string;
  author: string;
  content: string;
  backdrop_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: {
    id: string;
    name: string;
  }[];
};
