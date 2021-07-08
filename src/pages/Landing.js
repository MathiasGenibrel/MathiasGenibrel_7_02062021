import PostContent from "../components/PostContent";
import { getCookie } from "../utils/Cookie";
import UserImage from "../components/UserImg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SignOut } from "../utils/Auth";
import { useEffect } from "react";
import { ROUTES, fetcher } from "../utils/Api";
import { Icon } from "@iconify/react";
import featherIcon from "@iconify-icons/fa-solid/feather";
import usePost from "../hooks/usePost";
import { deletePost } from "../utils/Post";

const NavContent = styled.nav`
  background-color: var(--third-color);
  color: var(--primary-color);
  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 4.4rem;
  display: flex;
  width: 100%;
  z-index: 2;
  top: 0;
`;

const Content = styled.div`
  display: flex;
  padding: 4.2rem 0 6.5rem;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const AddContent = styled(Link)`
  background-color: var(--third-color);
  border-radius: 50%;
  border: solid 0.2rem var(--second-color);
  height: 3rem;
  width: 3rem;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: 2.5px 5px 8px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h2 `
  font-size: 1.4rem;
`

const SignOutBtn = styled(Link)`
  color: var(--primary-color);
  font-size: 1.4rem;
`;

const Landing = () => {
  const [user, setUser] = useState({});
  const [allPost, refetch] = usePost();

  useEffect(() => {
    fetcher(`${ROUTES.user}/${getCookie("userId")}`, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
    }).then((result) => {
      setUser(result);
    });
  }, []);

  const userVote = async (vote, id) => {
    await fetcher(`${ROUTES.post}/${id}/vote`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("BearerToken")}`,
      },
      body: JSON.stringify({ vote: vote }),
    });
    refetch();
  };

  const upVote = (votes, id) => {
    if (votes[0] === undefined) return userVote("upVote", id);
    if (votes[0].vote !== "upVote") return userVote("upVote", id);
  };

  const downVote = (votes, id) => {
    if (votes[0] === undefined) return userVote("downVote", id);
    if (votes[0].vote !== "downVote") return userVote("downVote", id);
  };

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
      {allPost.map((post) => {
        return (
          <PostContent
            key={post.id}
            post={post}
            onClickDelete={() => deletePost(post.id, refetch)}
            onClickUpVote={() => upVote(post.votes, post.id)}
            onClickDownVote={() => downVote(post.votes, post.id)}
          />
        );
      })}
      <AddContent to={{ pathname: `/main/newPost`, state: { user } }}>
        <Icon icon={featherIcon} color="#f4f4f4" height="1.5rem" />
      </AddContent>
    </Content>
  );
};

export default Landing;
