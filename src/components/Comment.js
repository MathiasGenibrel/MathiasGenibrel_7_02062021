import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import send16Filled from "@iconify-icons/fluent/send-16-filled";
import { fetcher, ROUTES } from "../utils/Api";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { getCookie } from "../utils/Cookie";
import { useState } from "react";
import UserImage from "./UserImg";

const CreateComment = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const SendCommentIcon = styled(Icon)`
  color: ${(props) => props.theme.primaryColor};
`;

const UserCommentContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  padding: 0.5rem;
  border: solid ${(props) => props.theme.primaryColor};
  border-radius: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
`;

const UserInfoText = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

const UserComment = styled.span`
  text-align: left;
  margin-left: 3.5rem;
`;

export const Comment = ({ comments, postId, setPostComment, user }) => {
  const [inputComment, setInputComment] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInputComment(value);
  };

  const sendComment = async () => {
    if (inputComment === "") return;
    const comment = { comment: inputComment, postId };
    const response = await fetcher(`${ROUTES.comment}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("BearerToken")}`,
      },
      body: JSON.stringify(comment),
    });
    const newComment = {
      ...response,
      user,
    };
    setInputComment("");
    setPostComment([newComment, ...comments]);
  };

  return (
    <>
      <CreateComment>
        <TextField
          id="standard-basic"
          label="Commentaire"
          margin="dense"
          value={inputComment}
          onChange={handleChange}
        />
        <IconButton aria-label="send" onClick={sendComment}>
          <SendCommentIcon icon={send16Filled} />
        </IconButton>
      </CreateComment>
      {comments.map((commentPost) => {
        return (
          <UserCommentContent key={commentPost.id}>
            <UserInfo>
              <UserImage
                role={commentPost.user.role}
                name={commentPost.user.name}
              />
              <UserInfoText>
                <p>{commentPost.user.name}</p>
                <p>{commentPost.user.description}</p>
              </UserInfoText>
            </UserInfo>
            <UserComment>{commentPost.comment}</UserComment>
          </UserCommentContent>
        );
      })}
    </>
  );
};
