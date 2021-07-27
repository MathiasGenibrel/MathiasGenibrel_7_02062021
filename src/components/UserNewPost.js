import React from "react";

import UserImage from "../components/UserImg";

import pictureOne from "@iconify-icons/icon-park-outline/picture-one";
import { Icon } from "@iconify/react";
import {
  UserPost,
  UserText,
  UserImg,
  UserInput,
  UserInputImg,
  UserInputImgText,
  UserLabelImg,
} from "../styles/userNewPost";

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
          autoFocus
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
