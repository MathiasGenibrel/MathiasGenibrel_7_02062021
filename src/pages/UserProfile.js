import { UserInfoProfil } from "../components/UserInfoProfil";
import { InfiniteScrollPost } from "../components/InfiniteScrollPost";
import DeleteLogo from "../components/DeleteLogo";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import usePost from "../hooks/usePost";
import styled from "styled-components";
import Back from "../components/Back";
import { deleteAccount, SignOut } from "../utils/Auth";
import { useHistory } from "react-router";
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
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  display: flex;
  height: 90px;
`;

const UserProfile = () => {
  const redirect = useHistory();
  const user = useLocation().state.user;
  const userConnected = useLocation().state.userConnected;

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [offset, setOffset] = useState(0);
  const [posts, refetch] = usePost(user.id, offset);

  const deleteAccountBtn =
    user.id === getCookie("userId") ? (
      <DeleteLogo onClick={() => handleClick(user.id)} />
    ) : (
      <div />
    );

  const switchMode = () => {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
    localStorage.setItem("theme", changeTheme);
  };

  const handleClick = async (id) => {
    const accountDeleted = await deleteAccount(id);
    if (accountDeleted) {
      SignOut();
      redirect.push("/auth/signin");
    }
  };

  return (
    <NavUser>
      <Navigation>
        {deleteAccountBtn}
        <Back angle="180" />
      </Navigation>
      <UserInfoProfil user={user} switchMode={switchMode} theme={theme} />
      <InfiniteScrollPost
        userConnected={userConnected}
        posts={posts}
        user={user}
        refetch={refetch}
        offset={offset}
        setOffset={setOffset}
      ></InfiniteScrollPost>
    </NavUser>
  );
};

export default UserProfile;
