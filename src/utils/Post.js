import { fetcher } from "./Api";
import { ROUTES } from "./Api";
import { getCookie } from "./Cookie";

export const deletePost = async (id, refetch) => {
  await fetcher(`${ROUTES.post}/${id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
  });
  refetch();
};
