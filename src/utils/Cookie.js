export const getCookie = (name) => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    .split("=")[1];

  return cookie;
};

export const setCookie = (name, data, path = "", expires = "") => {
  document.cookie = `${name}=${data}; Path=/${path}; Expires=${expires}`;
};
