import { ROUTES } from "../utils/Api";
import { useState, useEffect } from "react";
import { fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const usePost = (userId, offset = 0) => {
  const [posts, setPosts] = useState([]);
  
  let route = `${ROUTES.post}?offset=${offset}`;
  if (userId) route = `${ROUTES.post}/user/${userId}`;

  const fetchPost = () => {
    fetcher(route, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
    }).then((result) => {
      setPosts(posts.concat(result));
    });
  };

  useEffect(() => {
    fetchPost();
  }, [offset]);

  return [posts, setPosts];
};

export default usePost;
