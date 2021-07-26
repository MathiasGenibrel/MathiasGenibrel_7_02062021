import { React, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import { UserNewPost } from "../components/UserNewPost";
import { fetcher, ROUTES } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

import styled from "styled-components";
import { Icon } from "@iconify/react";
import cancelIcon from "@iconify-icons/iconoir/cancel";
import featherIcon from "@iconify-icons/fa-solid/feather";
import send16Filled from "@iconify-icons/fluent/send-16-filled";

const NavContent = styled.nav`
  background-color: ${(props) => props.theme.thirdColor};
  color: ${(props) => props.theme.primaryColor};
  justify-content: space-around;
  align-items: center;
  height: 4.4rem;
  display: flex;
  z-index: 2;
`;

const NewPostContent = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

const UserSendPostBtn = styled.div`
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

const UserSendPostBtnIcon = styled(Icon)`
  position: relative;
  left: 0.1rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
`;

export default function AddPost() {
  const userInfo = useLocation().state.user;
  const [textPost, setTextPost] = useState("");
  const [dataImg, setDataImg] = useState({});
  const [inputImg, setInputImg] = useState("Ajoute une image");
  const redirect = useHistory();

  const sendPost = async () => {
    const dataPost = new FormData();

    dataPost.append("text", textPost);
    dataPost.append("imgUrl", dataImg);

    if (textPost === "" && inputImg === "Ajoute une image") return false;

    await fetcher(`${ROUTES.post}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${getCookie("BearerToken")}`,
      },
      body: dataPost,
    });
    redirect.push("/main");
  };

  const handlePostChange = ({ target: { value } }) => {
    setTextPost(value);
  };

  const handleInputImg = ({ target: { files } }) => {
    if (files[0] === "") return;
    setInputImg(
      files.length === 0 ? "Ajoute une image" : files[0].name
    );
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
      <UserSendPostBtn onClick={sendPost}>
        <UserSendPostBtnIcon icon={send16Filled} height="2rem" />
      </UserSendPostBtn>
    </NewPostContent>
  );
}
