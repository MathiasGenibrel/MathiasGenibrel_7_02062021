import { ROUTES } from "../utils/Api";
import { useState, useEffect } from "react";
import { fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const usePosts = (offset = 0) => {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    fetcher(`${ROUTES.post}?offset=${offset}`, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
    }).then((postsFetch) => {
      setPosts([...posts, ...postsFetch]);
    });
  };

  useEffect(() => {
    fetchPost();
  }, [offset]);

  return [posts, setPosts];
};

export default usePosts;
