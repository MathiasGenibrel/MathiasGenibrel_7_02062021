import { fetcher } from "./Api";
import { ROUTES } from "./Api";
import { getCookie } from "./Cookie";

export const deletePost = async (id, userRole) => {
  const route = userRole === "admin" ? `${ROUTES.post}/admin/${id}` : `${ROUTES.post}/${id}`
  await fetcher(route, {
    method: "DELETE",
    headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
  });
};

const userVote = async (vote, id) => {
  await fetcher(`${ROUTES.post}/${id}/vote`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getCookie("BearerToken")}`,
    },
    body: JSON.stringify({ vote: vote }),
  });
};

export const upVote = (votes, id, refetch) => {
  if (votes[0] === undefined) return userVote("upVote", id, refetch);
  if (votes[0].vote !== "upVote") return userVote("upVote", id, refetch);
};

export const downVote = (votes, id, refetch) => {
  if (votes[0] === undefined) return userVote("downVote", id, refetch);
  if (votes[0].vote !== "downVote") return userVote("downVote", id, refetch);
};
