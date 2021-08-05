import { setCookie, getCookie } from "./Cookie";
import { ROUTES, fetcher } from "./Api";

export const LoggingIn = async (
  location,
  userName,
  password,
  confirmPassword,
  setError,
  setSeverity,
  setOpen
) => {
  let apiLocation = location.toLowerCase();

  if (!userName || !password) {
    setError("Des champs sont vides !");
    setSeverity("error");
    return setOpen(true);
  }
  if (apiLocation === "signup" && password !== confirmPassword) {
    setError("Les mots de passe ne sont pas identique");
    setSeverity("error");
    return setOpen(true);
  }
  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)) {
    setError(
      "Le mot de passe doit faire au moins 8 caractères et doit contenir au moins 1 majuscule, 1 minuscule et 1 nombre"
    );
    setSeverity("error");
    return setOpen(true);
  }

  const user = {
    name: userName,
    password: password,
  };

  const response = await fetcher(`${ROUTES.user}/${apiLocation}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  if (apiLocation === "signup")
    return LoggingIn("signIn", user.name, user.password);

  const infoUser = await response;
  if (infoUser.userId === undefined) return false;

  setCookie("userId", infoUser.userId);
  setCookie("BearerToken", infoUser.token);
  return true;
};

export const SignOut = () => {
  setCookie("userId", "", "", "Mon, 02 Oct 2000 01:00:00 GMT");
  setCookie("BearerToken", "", "", "Mon, 02 Oct 2000 01:00:00 GMT");
};

export const deleteAccount = async (id) => {
  await fetcher(`${ROUTES.user}/${id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${getCookie("BearerToken")}` },
  });

  return true;
};
