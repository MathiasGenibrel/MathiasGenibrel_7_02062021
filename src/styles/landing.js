import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContent = styled.nav`
  background-color: ${(props) => props.theme.thirdColor};
  color: ${(props) => props.theme.primaryColor};
  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 4.4rem;
  display: flex;
  width: 100%;
  z-index: 2;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  padding: 4.2rem 0 6.5rem;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const AddContent = styled(Link)`
  background-color: ${(props) => props.theme.thirdColor};
  border: solid 0.2rem ${(props) => props.theme.secondColor};
  box-shadow: 2.5px 5px 8px rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  position: fixed;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
`;

export const SignOutBtn = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 1.4rem;
`;

export const TextEndPage = styled.p`
  color: ${(props) => props.theme.thirdColor};
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 3rem;
`;
