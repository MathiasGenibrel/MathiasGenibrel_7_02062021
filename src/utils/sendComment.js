import { ROUTES } from "./Api";
import { fetcher } from "./Api";
import { getCookie } from "./Cookie";

const sendComment = async (comments, postId, setPostComment, user, inputComment, setInputComment) => {
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

export default sendComment;
