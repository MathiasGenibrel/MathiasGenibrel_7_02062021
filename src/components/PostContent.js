import React from "react";
import styled from "styled-components";
import UserImage from "./UserImg";

const Post = styled.div`
  margin: 1.5rem 1rem 0 1rem;
  padding: 0.5rem;
  background-color: var(--second-color);
  color: var(--primary-color);
  border-radius: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  margin: 0.7rem 0.5rem 1.3rem 0.5rem;
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
`;

const PostContent = ({ post }) => {
  const text = post.text ? <p>{post.text}</p> : null;
  const img = post.imgUrl ? (
    <img
      src={require(post.imgUrl).default}
      alt={`Utilisateur : ${post.user.name}`}
    />
  ) : null;

  return (
    <Post>
      <UserInfo>
        <UserProfilImg>
          <UserImage role={post.user.role} name={post.user.name} />
        </UserProfilImg>
        <UserProfilText>
          <UserProfilName>{post.user.name}</UserProfilName>
          <span style={{ fontSize: ".9rem" }}>{post.user.description}</span>
        </UserProfilText>
      </UserInfo>
      <UserPost>
        {text}
        {img}
      </UserPost>
      <UserVote>
        <UserVoteIcon>
          <i className="fas fa-arrow-up"></i>
          <span>{post.upVote}</span>
        </UserVoteIcon>
        <i className="fas fa-comment"></i>
        <UserVoteIcon>
          <i className="fas fa-arrow-down"></i>
          <span>{post.downVote}</span>
        </UserVoteIcon>
      </UserVote>
    </Post>
  );
};

export default PostContent;
