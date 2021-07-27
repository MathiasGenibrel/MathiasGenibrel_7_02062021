import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { InfiniteScrollPost } from "../components/InfiniteScrollPost";
import UserImage from "../components/UserImg";
import usePosts from "../hooks/usePosts";
import { SignOut } from "../utils/Auth";
import { getCookie } from "../utils/Cookie";
import { ROUTES, fetcher } from "../utils/Api";

import { Icon } from "@iconify/react";
import featherIcon from "@iconify-icons/fa-solid/feather";
import {
  NavContent,
  Content,
  AddContent,
  Title,
  SignOutBtn,
  TextEndPage,
} from "../styles/landing.js";

const Landing = () => {
  const [user, setUser] = useState({});
  const [offset, setOffset] = useState(0);
  const [posts, refetch] = usePosts(offset);

  useEffect(() => {
    fetcher(`${ROUTES.user}/${getCookie("userId")}`, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
    }).then((result) => {
      setUser(result);
    });
  }, []);

  return (
    <Content>
      <NavContent>
        <Link
          style={{ position: "relative" }}
          to={{ pathname: `/main/${user.name}`, state: { user } }}
        >
          <UserImage role={user.role} name={user.name} />
        </Link>
        <Title>Acceuil</Title>
        <SignOutBtn to={`/auth/SignIn`} onClick={SignOut}>
          <i className="fas fa-sign-out-alt"></i>
        </SignOutBtn>
      </NavContent>
      <InfiniteScrollPost
        posts={posts}
        user={user}
        userConnected={user}
        refetch={refetch}
        offset={offset}
        setOffset={setOffset}
      ></InfiniteScrollPost>
      <TextEndPage>Plus rien pour aujourd'hui</TextEndPage>
      <AddContent to={{ pathname: `/main/newPost`, state: { user } }}>
        <Icon icon={featherIcon} color="#f4f4f4" height="1.5rem" />
      </AddContent>
    </Content>
  );
};

export default Landing;
