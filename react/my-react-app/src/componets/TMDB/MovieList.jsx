import { useEffect, useState } from "react";
// import axiosInstance from "../../api/index";
import { getPopularMovies } from "./../../api/tmdb";

export default function MovieList() {
  // const [movies, setMovies] = useState([]);

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getPopularMovies();
      setMovies(res["results"]);
      // config = {
      //   method: "GET",
      //   url: `/movie/popular`,
      //   params: {
      //     page: 1,
      //   },
    }

    //   const res = await axiosInstance(config);
    //   setMovies(res["data"]["results"]);
    // }

    fetchData();
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
