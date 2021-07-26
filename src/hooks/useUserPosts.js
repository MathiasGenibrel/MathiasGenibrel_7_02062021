import { useState, useEffect } from "react";

import { ROUTES } from "../utils/Api";
import { fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const useUserPosts = (userId, offset = 0) => {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    fetcher(`${ROUTES.post}/user/${userId}?offset=${offset}`, {
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

export default useUserPosts;
