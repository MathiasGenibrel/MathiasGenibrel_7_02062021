import styled from "styled-components";

export const NavUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  padding-bottom: 2.5rem;
`;

export const Navigation = styled.nav`
  background-color: ${(props) => props.theme.thirdColor};
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  display: flex;
  height: 90px;
`;

export const EditProfile = styled.div`
  margin: 5rem 1rem 1rem 1rem;
  padding: 1rem 0 2rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: ${(props) => props.theme.secondColor};
`;