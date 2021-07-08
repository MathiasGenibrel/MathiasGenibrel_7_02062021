import UserImage from "../components/UserImg";
import SwitchLightMode from "../components/lightMode";
import React from "react";
import styled from "styled-components";

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

export const UserInfoProfil = ({user, switchMode, theme}) => {
  return (
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
  );
};
