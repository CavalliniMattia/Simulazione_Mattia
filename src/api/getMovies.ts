import axios from "axios";

export const getMovies = async () => {
  const response = await axios.get(
    "http://www.omdbapi.com/?apikey=9b22e877&s=avengers&type=movie"
  );
  return response;
};
