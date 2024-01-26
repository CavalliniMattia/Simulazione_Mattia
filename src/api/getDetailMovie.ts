import axios from "axios";

export const getDetailMovie = async (id: string) => {
  const response = await axios.get(
    "http://www.omdbapi.com/?apikey=9b22e877&s=avengers&type=movie&i=" + id
  );
  return response;
};
