import { useState, useEffect } from "react";

import { ROUTES } from "../utils/Api";
import { fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const useCurrentUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetcher(`${ROUTES.user}/${getCookie("userId")}`, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
    }).then((result) => {
      setUser(result);
    });
  }, []);

  return { currentUser: user };
};

export default useCurrentUser;
