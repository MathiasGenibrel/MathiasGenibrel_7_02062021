import styled from "styled-components";

export const SignContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: calc(var(--spacing) * 0.5) 0 calc(var(--spacing) * 1.5) 0;
  width: 300px;
  border: 1.5px solid #011827;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  background-color: ${(props) => props.theme.secondColor};
  height: fit-content;
  margin: auto 0;
`;

export const BackPostion = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
`;
