import { fetcher, ROUTES } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

export const HandleClick = async (
  username,
  description,
  user,
  redirect,
  setError,
  setSeverity,
  setOpen
) => {
  if (username === "" && description === "") {
    setError("Les champs sont vides !");
    setSeverity("error");
    return setOpen(true);
  }
  if (username !== "" && description === "") {
    await editProfile(
      username,
      undefined,
      user,
      setSeverity,
      setError,
      setOpen
    );
    return redirect.push("/main");
  }
  if (description !== "" && username === "") {
    await editProfile(
      undefined,
      description,
      user,
      setSeverity,
      setError,
      setOpen
    );
    return redirect.push("/main");
  }
  await editProfile(
    username,
    description,
    user,
    setSeverity,
    setError,
    setOpen
  );
  return redirect.push("/main");
};

const editProfile = async (
  name,
  description,
  user,
  setSeverity,
  setError,
  setOpen
) => {
  await fetcher(`${ROUTES.user}/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getCookie("BearerToken")}`,
    },
    body: JSON.stringify({ name, description }),
  }).then((user) => {
    setSeverity(user.status === 200 ? "success" : "error");
    setError(`${user.message}`);
    setOpen(true);
  });
};
