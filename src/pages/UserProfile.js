import UserImage from "../components/UserImg";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Back from "../components/Back";
import DeleteLogo from "../components/DeleteLogo";
import PostContent from "../components/PostContent";
import { ROUTES, fetcher } from "../utils/Api";
import { getCookie } from "../utils/Cookie";
import SwitchLightMode from "../components/lightMode";

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
  position: relative;
  color: var(--third-color);
  background-color: var(--primary-color);
  padding: 3.3rem 0 0.3rem 0;
  border-bottom: solid var(--second-color);
`;

const UserIconPosition = styled.div`
  position: absolute;
  border: solid var(--primary-color) 7px;
  border-radius: 50%;
  top: -40px;
  left: calc(50% - (65px + 7px * 2) / 2);
`;

const UserPosts = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1.1rem;
`;

const UserRole = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 70%;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

const UserDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`;

const LightMode = styled.div`
  position: absolute;
  right: 2rem;
  top: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: solid var(--second-color) 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserProfile = () => {
  const userInfo = useLocation().state.user;
  const [posts, setPosts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    fetcher(`${ROUTES.post}/user/${userInfo.id}`, {
      method: "GET",
      headers: { authorization: `Bearer ${getCookie("userId")}` },
    })
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
        setIsUpdate(false);
      });
  }, [isUpdate]);

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
        <LightMode
          onClick={() => {
            const changeTheme = theme === "light" ? "dark" : "light";
            setTheme(changeTheme);
            localStorage.setItem("theme", changeTheme);
          }}
        >
          <SwitchLightMode theme={theme} />
        </LightMode>
        <UserName>{userInfo.name}</UserName>
        <UserDescription>{userInfo.description}</UserDescription>
        <UserRole>{userInfo.role}</UserRole>
        <UserPosts>Post récent</UserPosts>
      </UserInfo>
      {posts.map((post) => (
        <PostContent
          key={post.id}
          post={post}
          onClick={async () => {
            await fetcher(`${ROUTES.post}/${post.id}`, {
              method: "DELETE",
              headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
            });
            setIsUpdate(true);
          }}
        />
      ))}
    </NavUser>
  );
};

export default UserProfile;
