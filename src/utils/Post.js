import { fetcher } from "./Api";
import { ROUTES } from "./Api";
import { getCookie } from "./Cookie";

export const deletePost = async (id, userRole) => {
  const route =
    userRole === "admin"
      ? `${ROUTES.post}/admin/${id}`
      : `${ROUTES.post}/${id}`;
  await fetcher(route, {
    method: "DELETE",
    headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
  });
};

export const userVote = async (vote, id) => {
  await fetcher(`${ROUTES.post}/${id}/vote`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getCookie("BearerToken")}`,
    },
    body: JSON.stringify({ vote: vote }),
  });
};
