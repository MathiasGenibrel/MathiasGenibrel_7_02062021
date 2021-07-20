import UserImage from "../components/UserImg";
import SwitchLightMode from "../components/lightMode";
import React from "react";
import styled from "styled-components";
import { getCookie } from "../utils/Cookie";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import editIcon from "@iconify-icons/ci/edit";

const UserInfo = styled.div`
  position: relative;
  color: ${(props) => props.theme.thirdColor};
  background-color: ${(props) => props.theme.primaryColor};
  padding: 3.3rem 0 0.3rem 0;
  border-bottom: solid ${(props) => props.theme.secondColor};
`;

const UserIconPosition = styled.div`
  position: absolute;
  border: solid ${(props) => props.theme.primaryColor} 7px;
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
  text-transform: capitalize;
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
  border: solid ${(props) => props.theme.secondColor} 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditProfile = styled(Link)`
  position: absolute;
  color: ${({ theme }) => theme.thirdColor};
  border: solid ${({ theme }) => theme.secondColor} 2px;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1rem;
  left: 2rem;
`;

const EditProfileIcon = styled(Icon)`
  font-size: 1.5rem;
`;

export const UserInfoProfil = ({ user, switchMode, theme }) => {
  const editProfile =
    user.id === getCookie("userId") ? (
      <EditProfile to={{ pathname: `/main/${user.name}/edit`, state: { user } }}>
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
