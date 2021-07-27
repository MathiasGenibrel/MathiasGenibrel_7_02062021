import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router";

import { UserNewPost } from "../components/UserNewPost";
import SendPost from "../utils/sendPost";

import { Icon } from "@iconify/react";
import cancelIcon from "@iconify-icons/iconoir/cancel";
import featherIcon from "@iconify-icons/fa-solid/feather";
import send16Filled from "@iconify-icons/fluent/send-16-filled";
import {
  NavContent,
  NewPostContent,
  UserSendPostBtn,
  UserSendPostBtnIcon,
  Title,
} from "../styles/addPost";

export default function AddPost() {
  const userInfo = useLocation().state.user;
  const [textPost, setTextPost] = useState("");
  const [dataImg, setDataImg] = useState({});
  const [inputImg, setInputImg] = useState("Ajoute une image");

  const redirect = useHistory();

  const handlePostChange = ({ target: { value } }) => {
    setTextPost(value);
  };

  const handleInputImg = ({ target: { files } }) => {
    if (files[0] === "") return;
    setInputImg(files.length === 0 ? "Ajoute une image" : files[0].name);
    setDataImg(files[0]);
  };

  return (
    <NewPostContent>
      <NavContent>
        <Icon icon={featherIcon} color="#f4f4f4" height="1.5rem" />
        <Title>Nouveau Post</Title>
        <Link to={`/main`}>
          <Icon icon={cancelIcon} color="#f4f4f4" height="2.2rem" />
        </Link>
      </NavContent>
      <UserNewPost
        userInfo={userInfo}
        handlePostChange={handlePostChange}
        handleInputImg={handleInputImg}
        textPost={textPost}
        inputImg={inputImg}
      />
      <UserSendPostBtn
        onClick={() => SendPost(dataImg, textPost, inputImg, redirect)}
      >
        <UserSendPostBtnIcon icon={send16Filled} height="2rem" />
      </UserSendPostBtn>
    </NewPostContent>
  );
}
