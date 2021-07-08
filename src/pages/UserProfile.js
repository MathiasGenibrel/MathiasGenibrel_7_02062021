import UserImage from "../components/UserImg";
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Back from "../components/Back";
import DeleteLogo from "../components/DeleteLogo";
import PostContent from "../components/PostContent";
import SwitchLightMode from "../components/lightMode";
import usePost from "../hooks/usePost";
import { deletePost } from "../utils/Post";

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
  const user = useLocation().state.user;
  const [posts, refetch] = usePost(user.id);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const switchMode = () => {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
    localStorage.setItem("theme", changeTheme);
  };

  return (
    <NavUser>
      <Navigation>
        <DeleteLogo color="var(--second-color)" />
        <Back angle="180" />
      </Navigation>
      <UserInfo>
        <UserIconPosition>
          <UserImage role={user.role} name={user.name} height="65px" />
        </UserIconPosition>
        <LightMode onClick={switchMode}>
          <SwitchLightMode theme={theme} />
        </LightMode>
        <UserName>{user.name}</UserName>
        <UserDescription>{user.description}</UserDescription>
        <UserRole>{user.role}</UserRole>
        <UserPosts>Post récent</UserPosts>
      </UserInfo>
      {posts.map((post) => (
        <PostContent
          key={post.id}
          post={post}
          onClickDelete={() => deletePost(post.id, refetch)}
        />
      ))}
    </NavUser>
  );
};

export default UserProfile;
