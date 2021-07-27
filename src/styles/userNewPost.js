import styled from "styled-components";

export const UserPost = styled.div`
  background-color: ${(props) => props.theme.secondColor};
  justify-content: space-between;
  margin: 1.5rem 1rem 8rem;
  flex-direction: column;
  padding: 1.5rem 0.8rem;
  border-radius: 1rem;
  display: flex;
  height: 100%;
`;

export const UserText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const UserImg = styled.div`
  color: ${(props) => props.theme.primaryColor};
  justify-content: space-around;
  align-items: center;
  display: flex;
  width: 100%;
`;

export const UserInput = styled.textarea`
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.primaryColor};
  padding: 1rem 0.5rem 0 1rem;
  height: 100%;
  width: 100%;
  resize: none;
  &::placeholder {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const UserInputImg = styled.input`
  display: none;
`;

export const UserInputImgText = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 9rem;
`;

export const UserLabelImg = styled.label`
  background-color: ${(props) => props.theme.thirdColor};
  justify-content: space-around;
  border-radius: 0.5rem;
  align-items: center;
  font-size: 1.1rem;
  display: flex;
  padding: 1rem;
  width: 12rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 5px 4px 4px rgba(255, 146, 51, 0.15);
  &:hover {
    transform: scale(0.98);
  }
`;