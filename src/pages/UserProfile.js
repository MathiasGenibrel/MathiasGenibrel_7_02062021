import UserImage from "../components/UserImg";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Back from "../components/Back";
import DeleteLogo from "../components/DeleteLogo";
import PostContent from "../components/PostContent";
import { ROUTES, fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const NavUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  padding-bottom: 2.5rem;
`;

const Navigation = styled.nav`
  background-color: var(--third-color);
  height: 90px;
  padding: 0 2.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const UserInfo = styled.div`
  color: var(--third-color);
  background-color: var(--primary-color);
  padding: 3.3rem 0 0.3rem 0;
  border-bottom: solid var(--second-color);
`;

const UserIconPosition = styled.div`
  position: absolute;
  border: solid var(--primary-color) 7px;
  border-radius: 50%;
  top: 55px;
  left: calc(50% - (65px + 7px * 2) / 2);
`;

const UserProfile = () => {
  const userInfo = useLocation().state.user;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetcher(`${ROUTES.post}/user/${userInfo.id}`, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("userId")}` },
    })
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <NavUser>
      <Navigation>
        <DeleteLogo color="var(--second-color)" />
        <Back angle="180" />
      </Navigation>
      <UserInfo>
        <UserIconPosition>
          <UserImage role={userInfo.role} name={userInfo.name} height="65px" />
        </UserIconPosition>
        <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>{userInfo.name}</p>
        <p>{userInfo.description}</p>
        <p
          style={{
            fontSize: ".8rem",
            fontWeight: "700",
            textTransform: "uppercase",
            opacity: "70%",
          }}
        >
          {userInfo.role}
        </p>
        <p
          style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "1.5rem" }}
        >
          Post récent
        </p>
      </UserInfo>
      {posts.map((post) => (
        <PostContent key={post.id} post={post} />
      ))}
    </NavUser>
  );
};

export default UserProfile;
