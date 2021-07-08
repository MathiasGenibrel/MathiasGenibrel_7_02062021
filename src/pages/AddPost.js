import featherIcon from "@iconify-icons/fa-solid/feather";
import React from "react";
import { Icon } from "@iconify/react";
import cancelIcon from "@iconify-icons/iconoir/cancel";
import UserImage from "../components/UserImg";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import pictureOne from "@iconify-icons/icon-park-outline/picture-one";
import send16Filled from "@iconify-icons/fluent/send-16-filled";
import { fetcher, ROUTES } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

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

export default function AddPost() {
  const userInfo = useLocation().state.user;
  const [textPost, setTextPost] = useState("");
  const [inputImg, setInputImg] = useState("Ajoute une image");
  const redirect = useHistory();

  const handlePostChange = (e) => {
    setTextPost(e.target.value);
  };

  const handleInputImg = (e) => {
    if (e.target.value === "") return setInputImg("Ajoute une image");
    setInputImg(e.target.value);
  };

  return (
    <NewPostContent>
      <NavContent>
        <Icon icon={featherIcon} color="#f4f4f4" height="1.5rem" />
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Nouveau Post</h2>
        <Link
          style={{ color: "var(--primary-color)", fontSize: "1.4rem" }}
          to={`/main`}
        >
          <Icon icon={cancelIcon} color="#f4f4f4" height="2.2rem" />
        </Link>
      </NavContent>
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
      <UserSendPostBtn
        onClick={async () => {
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
        }}
      >
        <UserSendPostBtnIcon icon={send16Filled} height="2rem" />
      </UserSendPostBtn>
    </NewPostContent>
  );
}
