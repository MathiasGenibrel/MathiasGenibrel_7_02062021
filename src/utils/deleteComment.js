import { ROUTES } from "./Api";
import { fetcher } from "./Api";
import { getCookie } from "./Cookie";

const deleteComment = async (id, userRole, comments, setPostComment) => {
  const route =
    userRole === "admin"
      ? `${ROUTES.comment}/admin/${id}`
      : `${ROUTES.comment}/${id}`;

  await fetcher(route, {
    method: "DELETE",
    headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
  });
  setPostComment(comments.filter((comment) => comment.id !== id));
};

export default deleteComment;
