import React, { useState } from "react";
import { getCookie } from "../utils/Cookie";
import UserImage from "./UserImg";
import sendComment from "../utils/sendComment";
import deleteComment from "../utils/deleteComment";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import send16Filled from "@iconify-icons/fluent/send-16-filled";
import cancelIcon from "@iconify-icons/iconoir/cancel";
import {
  CreateComment,
  SendCommentIcon,
  UserCommentContent,
  UserInfo,
  UserInfoText,
  UserComment,
  DeleteIcon,
} from "../styles/comment";

export const Comment = ({ comments, postId, setPostComment, user }) => {
  const [inputComment, setInputComment] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInputComment(value);
  };

  const deleteDisplayComment = (comment) => {
    if (getCookie("userId") === comment.userId || user.role === "admin")
      return (
        <DeleteIcon
          icon={cancelIcon}
          color="#f4f4f4"
          height="2.2rem"
          onClick={() =>
            deleteComment(comment.id, user.role, comments, setPostComment)
          }
        />
      );
    return null;
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
        <IconButton
          aria-label="send"
          onClick={() =>
            sendComment(
              comments,
              postId,
              setPostComment,
              user,
              inputComment,
              setInputComment
            )
          }
        >
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
              {deleteDisplayComment(commentPost)}
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
