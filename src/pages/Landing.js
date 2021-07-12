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
import { upVote, downVote, userVote } from "../utils/Post";
import InfiniteScroll from "react-infinite-scroll-component";

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

const Title = styled.h2`
  font-size: 1.4rem;
`;

const SignOutBtn = styled(Link)`
  color: var(--primary-color);
  font-size: 1.4rem;
`;

const TextEndPage = styled.p`
  position: absolute;
  bottom: 2.8rem;
  left: 2rem;
  color: var(--third-color);
  font-size: 1.2rem;
  font-weight: 700;
`;

const Landing = () => {
  const [user, setUser] = useState({});
  const [offset, setOffset] = useState(0);
  const [allPost, refetch] = usePost(null, offset);

  const deletePostDisplay = (id) => {
    refetch(allPost.filter((postId) => postId.id !== id));
  };

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
      <InfiniteScroll
        dataLength={allPost.length}
        next={() => setOffset(offset + 5)}
        hasMore={true}
      >
        {allPost.map((post) => (
          <PostContent
            key={post.id}
            post={post}
            userRole={user.role}
            onClickDelete={() => {
              deletePost(post.id, user.role);
              deletePostDisplay(post.id);
            }}
            onClickUpVote={(vote, id) => upVote(vote, id)}
            onClickDownVote={(vote, id) => downVote(vote, id)}
          />
        ))}
      </InfiniteScroll>
      <TextEndPage>Plus rien pour aujourd'hui</TextEndPage>
      <AddContent to={{ pathname: `/main/newPost`, state: { user } }}>
        <Icon icon={featherIcon} color="#f4f4f4" height="1.5rem" />
      </AddContent>
    </Content>
  );
};

export default Landing;
