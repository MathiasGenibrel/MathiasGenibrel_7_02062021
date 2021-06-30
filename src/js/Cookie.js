export const authentification = (infoGet = "BearerToken") => {
  const infoCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${infoGet}=`))
    .split("=")[1];

  return infoCookie;
};
