import { Link, useLocation, useHistory } from "react-router-dom";
import send16Filled from "@iconify-icons/fluent/send-16-filled";
import featherIcon from "@iconify-icons/fa-solid/feather";
import { UserNewPost } from "../components/UserNewPost";
import cancelIcon from "@iconify-icons/iconoir/cancel";
import { fetcher, ROUTES } from "../utils/Api";
import { getCookie } from "../utils/Cookie";
import { React, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const NavContent = styled.nav`
  background-color: var(--third-color);
  color: var(--primary-color);
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
  color: var(--primary-color);
  background-color: var(--third-color);
  padding: 0.8rem;
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid var(--second-color);
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
  const [inputImg, setInputImg] = useState("Ajoute une image");
  const redirect = useHistory();

  const sendPost = async () => {
    if (textPost === "" && inputImg === "Ajoute une image") return false;

    await fetcher(`${ROUTES.post}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("BearerToken")}`,
      },
      body: JSON.stringify({
        text: textPost,
        imgUrl: inputImg === "Ajoute une image" ? null : inputImg,
      }),
    });
    redirect.push("/main");
  };

  const handlePostChange = (e) => {
    setTextPost(e.target.value);
  };

  const handleInputImg = (e) => {
    if (e.target.value === "") return;
    setInputImg(e.target.value);
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
