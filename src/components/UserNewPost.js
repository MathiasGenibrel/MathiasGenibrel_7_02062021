import React from "react";
import styled from "styled-components";
import pictureOne from "@iconify-icons/icon-park-outline/picture-one";
import UserImage from "../components/UserImg";
import { Icon } from "@iconify/react";

const UserPost = styled.div`
  background-color: var(--second-color);
  margin: 1.5rem 1rem 8rem;
  padding: 1.5rem 0.8rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const UserText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const UserImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--primary-color);
`;

const UserInput = styled.textarea`
  background-color: var(--second-color);
  color: var(--primary-color);
  padding: 1rem 0.5rem 0 1rem;
  height: 100%;
  width: 100%;
  resize: none;
  &::placeholder {
    color: var(--primary-color);
  }
`;

const UserInputImg = styled.input`
  display: none;
`;

const UserInputImgText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 9rem;
`;

const UserLabelImg = styled.label`
  background-color: var(--third-color);
  display: flex;
  padding: 1rem;
  width: 12rem;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 5px 4px 4px rgba(255, 146, 51, 0.15);
  &:hover {
    transform: scale(0.98);
  }
`;

export const UserNewPost = ({
  userInfo,
  handlePostChange,
  handleInputImg,
  textPost,
  inputImg,
}) => {
  return (
    <UserPost>
      <UserText>
        <UserImage role={userInfo.role} name={userInfo.name} />
        <UserInput
          placeholder="Quoi de neuf ..."
          onChange={handlePostChange}
          value={textPost}
        ></UserInput>
      </UserText>
      <UserImg>
        <p> {textPost.length} / 255</p>
        <UserInputImg
          type="file"
          id="img"
          accept="image/*"
          onChange={handleInputImg}
        ></UserInputImg>
        <UserLabelImg htmlFor="img">
          <Icon icon={pictureOne} height="1.5rem" />
          <UserInputImgText>{inputImg}</UserInputImgText>
        </UserLabelImg>
      </UserImg>
    </UserPost>
  );
};
