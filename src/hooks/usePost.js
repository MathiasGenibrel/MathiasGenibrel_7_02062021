import { ROUTES } from "../utils/Api";
import { useState, useEffect } from "react";
import { fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const usePost = (userId) => {
  let route = `${ROUTES.post}`;
  if (userId) route = `${ROUTES.post}/user/${userId}`;

  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    fetcher(route, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
    }).then((result) => {
      setPosts(result);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return [posts, fetchPost];
};

export default usePost;
