import { Link } from "react-router-dom";

import styled from "styled-components";
import { Icon } from "@iconify/react";

export const UserInfo = styled.div`
  position: relative;
  color: ${(props) => props.theme.thirdColor};
  background-color: ${(props) => props.theme.primaryColor};
  padding: 3.3rem 0 0.3rem 0;
  border-bottom: solid ${(props) => props.theme.secondColor};
`;

export const UserIconPosition = styled.div`
  position: absolute;
  border: solid ${(props) => props.theme.primaryColor} 7px;
  border-radius: 50%;
  top: -40px;
  left: calc(50% - (65px + 7px * 2) / 2);
`;

export const UserPosts = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1.1rem;
`;

export const UserRole = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 70%;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  text-transform: capitalize;
`;

export const UserDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`;

export const LightMode = styled.div`
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

export const EditProfile = styled(Link)`
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

export const EditProfileIcon = styled(Icon)`
  font-size: 1.5rem;
`;
