import React from "react";
import styled from "styled-components";
import UserImage from "./UserImg";
import { Icon } from "@iconify/react";
import cancelIcon from "@iconify-icons/iconoir/cancel";
import { getCookie } from "../utils/Cookie";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = styled.div`
  margin: 1.5rem 1rem 0 1rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 1rem;
  position: relative;
`;

const UserInfo = styled(Link)`
  display: flex;
  margin: 0.7rem 0.5rem 1.3rem 0.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

const UserProfilImg = styled.div`
  position: relative;
  margin-right: 1rem;
  text-align: left;
`;

const UserProfilText = styled.div`
  text-align: left;
`;

const UserProfilName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: capitalize;
`;

const UserPost = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

const UserVote = styled.div`
  display: flex;
  justify-content: space-around;
`;

const UserVoteIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 2rem;
  &:active {
    transform: scale(0.95);
  }
`;

const DeletePost = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #f4f4f4;
`;

const ImgPost = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  margin: 1rem 0 0.5rem 0;
  border-radius: 0.5rem;
`;

const TextPost = styled.p`
  overflow-wrap: break-word;
`;

const PostContent = ({
  post,
  user,
  userConnected,
  onClickDelete,
  onClickUpVote,
  onClickDownVote,
}) => {
  const [vote, setVote] = useState(
    post.votes.length === 0 ? "none" : post.votes[0].vote
  );
  const [upVote, setUpVote] = useState(post.upVote);
  const [downVote, setDownVote] = useState(post.downVote);

  const deletePost =
    post.userId === getCookie("userId") ? (
      <Icon icon={cancelIcon} color="#f4f4f4" height="2.2rem" />
    ) : userConnected.role === "admin" ? (
      <Icon icon={cancelIcon} color="#f4f4f4" height="2.2rem" />
    ) : null;
  const text = post.text ? <TextPost>{post.text}</TextPost> : null;
  const img = post.imgUrl ? (
    <ImgPost
      src={require(`../../public/img/${post.imgUrl}`).default}
      alt={`Utilisateur : ${post.user.name}`}
    />
  ) : null;

  const userUpVote = () => {
    if (vote === "upVote") return;
    if (vote === "none") {
      setVote("upVote");
      return setUpVote(upVote + 1);
    }
    setVote("upVote");
    setUpVote(upVote + 1);
    setDownVote(downVote - 1);
  };

  const userDownVote = () => {
    if (vote === "downVote") return;
    if (vote === "none") {
      setVote("downVote");
      return setDownVote(downVote + 1);
    }
    setVote("downVote");
    setUpVote(upVote - 1);
    setDownVote(downVote + 1);
  };

  return (
    <Post>
      <UserInfo
        to={{
          pathname: `/main/${post.user.name}`,
          state: { user: post.user, userConnected: user },
        }}
      >
        <UserProfilImg>
          <UserImage role={post.user.role} name={post.user.name} />
        </UserProfilImg>
        <UserProfilText>
          <UserProfilName>{post.user.name}</UserProfilName>
          <span style={{ fontSize: ".9rem" }}>{post.user.description}</span>
        </UserProfilText>
      </UserInfo>
      <DeletePost onClick={onClickDelete}>{deletePost}</DeletePost>
      <UserPost>
        {text}
        {img}
      </UserPost>
      <UserVote>
        <UserVoteIcon
          onClick={() => {
            userUpVote();
            onClickUpVote(vote, post.id);
          }}
        >
          <i className="fas fa-arrow-up"></i>
          <span>{upVote}</span>
        </UserVoteIcon>
        <i className="fas fa-comment"></i>
        <UserVoteIcon
          onClick={() => {
            userDownVote();
            onClickDownVote(vote, post.id);
          }}
        >
          <i className="fas fa-arrow-down"></i>
          <span>{downVote}</span>
        </UserVoteIcon>
      </UserVote>
    </Post>
  );
};

export default PostContent;
