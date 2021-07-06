import { setCookie } from "./Cookie";
import { ROUTES, fetcher } from "./Api";

export const LoggingIn = async (
  location,
  userName,
  password,
  confirmPassword
) => {
  let apiLocation = location.toLowerCase();

  if (!userName || !password) return console.error("Des champs sont vides");
  if (apiLocation === "signup" && password !== confirmPassword)
    return console.error("Les mots de passe ne sont pas identique");

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

  const infoUser = await response.json();

  setCookie("userId", infoUser.userId);
  setCookie("BearerToken", infoUser.token);
  return true;
};

export const SignOut = () => {
  setCookie("userId", "", "", "Mon, 02 Oct 2000 01:00:00 GMT");
  setCookie("BearerToken", "", "", "Mon, 02 Oct 2000 01:00:00 GMT");
};
