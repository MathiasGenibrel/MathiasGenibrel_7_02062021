import { useState, useEffect, useCallback } from "react";

import { ROUTES } from "../utils/Api";
import { fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const usePosts = (offset = 0) => {
  const [posts, setPosts] = useState([]);

  const fetchPost = useCallback(() => {
    fetcher(`${ROUTES.post}?offset=${offset}`, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
    }).then((postsFetch) => {
      setPosts((prevPost) => [...prevPost, ...postsFetch]);
    });
  }, [setPosts, offset]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return [posts, setPosts];
};

export default usePosts;
