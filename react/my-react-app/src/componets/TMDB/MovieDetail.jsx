import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieDetail() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
          // page: 1,
        },
      };

      const res = await axios(config);
      // const data = res["data"];
      // console.log(res);
      console.log(res["data"]);
      setMovies(res["data"]);
      // setMovies(data);
    }

    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">무비디테일</h1>

      {/* 영화 정보 박스 */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          {movies["title"]}
        </h2>
        <p className="text-gray-700 leading-relaxed">{movies["overview"]}</p>
      </div>
    </div>
  );
}
