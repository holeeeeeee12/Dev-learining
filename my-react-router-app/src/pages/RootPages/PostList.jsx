import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParmas] = useSearchParams();

  useEffect(() => {
    // const params = SearchParmas;
    // console.log(params);

    const order = searchParams.get("order") ?? "asc";
    const sortBy = searchParams.get("sortBy") ?? "id";
    console.log(order);

    async function getPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      setPosts(response.data.posts);
    }
    getPosts();
  }, [searchParams]);

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 cusor-pointer"
          onClick={() => {
            setSearchParmas({ sortBy: "id", order: "asc" });
          }}
        >
          ID 오름차순
        </button>
        <button
          className="border-2 p-2 cusor-pointer"
          onClick={() => {
            setSearchParmas({ sortBy: "id", order: "desc" });
          }}
        >
          ID 내림차순
        </button>
      </div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={PATHS.ROOT.getPostDetail(post.id)}>
              No. {post.id} - {post.title}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
}
