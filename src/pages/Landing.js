import React, { useState } from "react";
import { Link } from "react-router-dom";

import { InfiniteScrollPost } from "../components/InfiniteScrollPost";
import UserImage from "../components/UserImg";

import { SignOut } from "../utils/Auth";

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

import usePosts from "../hooks/usePosts";
import useCurrentUser from "../hooks/useCurrentUser";

const Landing = () => {
  const { currentUser } = useCurrentUser();
  const [offset, setOffset] = useState(0);
  const [posts, refetch] = usePosts(offset);

  return (
    <Content>
      <NavContent>
        <Link
          style={{ position: "relative" }}
          to={{
            pathname: `/main/${currentUser.name}`,
            state: { user: currentUser },
          }}
        >
          <UserImage role={currentUser.role} name={currentUser.name} />
        </Link>
        <Title>Acceuil</Title>
        <SignOutBtn to={`/auth/SignIn`} onClick={SignOut}>
          <i className="fas fa-sign-out-alt"></i>
        </SignOutBtn>
      </NavContent>
      <InfiniteScrollPost
        posts={posts}
        user={currentUser}
        userConnected={currentUser}
        refetch={refetch}
        offset={offset}
        setOffset={setOffset}
      ></InfiniteScrollPost>
      <TextEndPage>Plus rien pour aujourd'hui</TextEndPage>
      <AddContent
        to={{ pathname: `/main/newPost`, state: { user: currentUser } }}
      >
        <Icon icon={featherIcon} color="#f4f4f4" height="1.5rem" />
      </AddContent>
    </Content>
  );
};

export default Landing;
