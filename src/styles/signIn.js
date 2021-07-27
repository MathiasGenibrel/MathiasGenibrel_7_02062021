import styled from "styled-components";

export const SignContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0 1.5rem 0;
  width: 300px;
  border: 1.5px solid #011827;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  background-color: ${(props) => props.theme.secondColor};
  height: fit-content;
  margin: auto 0;
`;

export const SignUpLink = styled.span`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
`;
