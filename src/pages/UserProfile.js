import React, { useState } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

import useUserPosts from "../hooks/useUserPosts";
import Back from "../components/Back";
import { getCookie } from "../utils/Cookie";
import DeleteLogo from "../components/DeleteLogo";
import { UserInfoProfil } from "../components/UserInfoProfil";
import { InfiniteScrollPost } from "../components/InfiniteScrollPost";
import { deleteAccount, SignOut } from "../utils/Auth";

import { NavUser, Navigation } from "../styles/userProfile";

const UserProfile = () => {
  const redirect = useHistory();
  const user = useLocation().state.user;
  const userConnected = useLocation().state.userConnected;

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [offset, setOffset] = useState(0);
  const [posts, refetch] = useUserPosts(user.id, offset);

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
    window.location.reload(false);
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
        <Back />
        {deleteAccountBtn}
      </Navigation>
      <UserInfoProfil user={user} switchMode={switchMode} theme={theme} />
      <InfiniteScrollPost
        userConnected={userConnected ?? user}
        posts={posts}
        user={user}
        onProfile={true}
        refetch={refetch}
        offset={offset}
        setOffset={setOffset}
      ></InfiniteScrollPost>
    </NavUser>
  );
};

export default UserProfile;
