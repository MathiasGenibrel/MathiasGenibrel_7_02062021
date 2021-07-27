import { fetcher, ROUTES } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

const SendPost = async (dataImg, textPost, inputImg, redirect) => {
  const dataPost = new FormData();

  dataPost.append("text", textPost);
  dataPost.append("imgUrl", dataImg);

  if (textPost === "" && inputImg === "Ajoute une image") return false;

  await fetcher(`${ROUTES.post}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${getCookie("BearerToken")}`,
    },
    body: dataPost,
  });
  redirect.push("/main");
};

export default SendPost;
