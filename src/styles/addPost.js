import styled from "styled-components";
import { Icon } from "@iconify/react";

export const NavContent = styled.nav`
  background-color: ${(props) => props.theme.thirdColor};
  color: ${(props) => props.theme.primaryColor};
  justify-content: space-around;
  align-items: center;
  height: 4.4rem;
  display: flex;
  z-index: 2;
`;

export const NewPostContent = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

export const UserSendPostBtn = styled.div`
  position: absolute;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.thirdColor};
  padding: 0.8rem;
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid ${(props) => props.theme.secondColor};
  box-shadow: 2.5px 5px 8px rgba(0, 0, 0, 0.3);
  bottom: 2rem;
  right: 2.5rem;
`;

export const UserSendPostBtnIcon = styled(Icon)`
  position: relative;
  left: 0.1rem;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
`;
