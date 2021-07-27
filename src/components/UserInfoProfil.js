import React from "react";

import { getCookie } from "../utils/Cookie";
import UserImage from "../components/UserImg";
import SwitchLightMode from "../components/lightMode";

import editIcon from "@iconify-icons/ci/edit";
import {
  UserInfo,
  UserIconPosition,
  UserPosts,
  UserRole,
  UserName,
  UserDescription,
  LightMode,
  EditProfile,
  EditProfileIcon,
} from "../styles/userInfoProfil";

export const UserInfoProfil = ({ user, switchMode, theme }) => {
  const editProfile =
    user.id === getCookie("userId") ? (
      <EditProfile
        to={{ pathname: `/main/${user.name}/edit`, state: { user } }}
      >
        <EditProfileIcon icon={editIcon} />
      </EditProfile>
    ) : null;

  const switchModeBtn =
    user.id === getCookie("userId") ? (
      <LightMode onClick={switchMode}>
        <SwitchLightMode theme={theme} />
      </LightMode>
    ) : null;

  return (
    <UserInfo>
      <UserIconPosition>
        <UserImage role={user.role} name={user.name} height="65px" />
      </UserIconPosition>
      {editProfile}
      {switchModeBtn}
      <UserName>{user.name}</UserName>
      <UserDescription>{user.description}</UserDescription>
      <UserRole>{user.role}</UserRole>
      <UserPosts>Post récent</UserPosts>
    </UserInfo>
  );
};
