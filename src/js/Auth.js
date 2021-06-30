export const LoggingIn = async (location) => {
  const userName = document.body.querySelector("#userName").value;
  const password = document.body.querySelector("#password").value;
  let apiLocation = location.toLowerCase();
  let confirmPassword = "";

  if (!userName || !password) return console.error("Des champs sont vides");
  if (apiLocation === "signup")
    confirmPassword = document.body.querySelector("#confirmPassword").value;
  if (apiLocation === "signup" && password !== confirmPassword)
    return console.error("Les mots de passe ne sont pas identique");

  const user = {
    name: userName,
    password: password,
  };

  const response = await fetch(
    `http://localhost:8080/api/users/${apiLocation}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    }
  );

  // console.log(await response.json());
  const infoUser = await response.json();
  console.log(infoUser);

  document.cookie = `userId=${infoUser.userId}; Path=/`;
  document.cookie = `BearerToken=${infoUser.token}; Path=/`;
  return true;
};

export const SignOut = () => {
  document.cookie = "userId=; expires=Mon, 02 Oct 2000 01:00:00 GMT; Path=/";
  document.cookie = "BearerToken=; expires=Mon, 02 Oct 2000 01:00:00 GMT; Path=/";
}
