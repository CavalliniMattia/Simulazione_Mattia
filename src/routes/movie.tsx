import { getMovies } from "../api/getMovies";

export async function loader() {
  const movies = await getMovies();
  return movies;
}

export default function Movie() {
  return <div />;
}
