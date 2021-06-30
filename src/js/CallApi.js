import { authentification } from "./Cookie";

export const getInfo = async (routes = "posts", infoCookie) => {  
  const response = await fetch(`http://localhost:8080/api/${routes}`, {
    method: "GET",
    headers: { authorization : `Bearer ${authentification(infoCookie)}`}
  });

  // console.log(await response.json())
  return await response;
};

export const postInfo = async () => {  
  const accessToken = await document.cookie
  .split('; ')
  .find(row => row.startsWith('BearerToken='))
  .split('=')[1];
  console.log(accessToken);

  const response = await fetch(`http://localhost:8080/api/posts?order=DESC`, {
    method: "GET",
    headers: { authorization : `Bearer ${accessToken}`}
  });

  console.log(await response.json())
  // return response.json();
};
