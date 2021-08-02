import React, { useState } from "react";

import { getCookie } from "../utils/Cookie";
import { Comment } from "./Comment";
import UserImage from "./UserImg";

import { Icon } from "@iconify/react";
import cancelIcon from "@iconify-icons/iconoir/cancel";
import {
  Post,
  UserInfoLink,
  UserInfo,
  UserProfilImg,
  UserVote,
  UserProfilText,
  UserProfilName,
  UserPost,
  UserVoteIcon,
  DeletePost,
  ImgPost,
  TextPost,
} from "../styles/postContent";

const PostContent = ({
  post,
  user,
  onProfile,
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
  const [postComment, setPostComment] = useState(post.comments);
  const [comment, setComment] = useState(false);

  const deletePost =
    post.userId === getCookie("userId") || userConnected.role === "admin" ? (
      <Icon icon={cancelIcon} color="#f4f4f4" height="2.2rem" />
    ) : null;

  const img = post.imgUrl ? (
    <ImgPost src={post.imgUrl} alt={`Utilisateur : ${post.user.name}`} />
  ) : null;

  const text = post.text ? <TextPost>{post.text}</TextPost> : null;

  const userInfo = (
    <>
      <UserProfilImg>
        <UserImage role={post.user.role} name={post.user.name} />
      </UserProfilImg>
      <UserProfilText>
        <UserProfilName>{post.user.name}</UserProfilName>
        <span style={{ fontSize: ".9rem" }}>{post.user.description}</span>
      </UserProfilText>
    </>
  );

  const userInfoContent = onProfile ? (
    <UserInfo>{userInfo}</UserInfo>
  ) : (
    <UserInfoLink
      to={{
        pathname: `/main/${post.user.name}`,
        state: { user: post.user, userConnected: user },
      }}
    >
      {userInfo}
    </UserInfoLink>
  );

  const userUpVote = () => {
    if (vote === "upVote") {
      setVote("none");
      return setUpVote(upVote - 1);
    }
    if (vote === "none") {
      setVote("upVote");
      return setUpVote(upVote + 1);
    }
    setVote("upVote");
    setUpVote(upVote + 1);
    setDownVote(downVote - 1);
  };

  const userDownVote = () => {
    if (vote === "downVote") {
      setVote("none");
      return setDownVote(downVote - 1);
    }
    if (vote === "none") {
      setVote("downVote");
      return setDownVote(downVote + 1);
    }
    setVote("downVote");
    setUpVote(upVote - 1);
    setDownVote(downVote + 1);
  };

  const commentDisplay = () => {
    if (comment !== false) return setComment(false);
    setComment(true);
  };

  return (
    <Post>
      {userInfoContent}
      <DeletePost onClick={onClickDelete}>{deletePost}</DeletePost>
      <UserPost>
        {text}
        {img}
      </UserPost>
      <UserVote>
        <UserVoteIcon
          onClick={() => {
            userUpVote();
            onClickUpVote(
              vote === "none" || vote === "downVote" ? "upVote" : "none",
              post.id
            );
          }}
        >
          <i className="fas fa-arrow-up"></i>
          <span>{upVote}</span>
        </UserVoteIcon>
        <i className="fas fa-comment" onClick={commentDisplay}></i>
        <UserVoteIcon
          onClick={() => {
            userDownVote();
            onClickDownVote(
              vote === "none" || vote === "upVote" ? "downVote" : "none",
              post.id
            );
          }}
        >
          <i className="fas fa-arrow-down"></i>
          <span>{downVote}</span>
        </UserVoteIcon>
      </UserVote>
      {comment === false ? null : (
        <Comment
          comments={postComment}
          setPostComment={setPostComment}
          user={userConnected}
          postId={post.id}
        ></Comment>
      )}
    </Post>
  );
};

export default PostContent;
