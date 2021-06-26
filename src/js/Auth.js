export const LoggingIn = async (location) => {
  const userName = document.body.querySelector("#userName").value;
  const password = document.body.querySelector("#password").value;
  let apiLocation = location.toLowerCase();
  let confirmPassword = "";
  
  if (apiLocation === "signup") confirmPassword = document.body.querySelector("#confirmPassword").value;
  if (apiLocation === "signup" && password !== confirmPassword ) return console.error("Les mots de passe ne sont pas identique")
  
  const user = {
    name: userName,
    password: password,
  };

  const response = await fetch(`http://localhost:8080/api/users/${apiLocation}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  // console.log(await response.json());
  const infoUser = await response.json()
  console.log(infoUser);

  document.cookie = `userId=${infoUser.userId}`
  document.cookie = `BearerToken=${infoUser.token}`
  // return response.json();
};