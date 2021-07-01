const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080/api"
    : "https:/masuperapi.com/api";

export const ROUTES = {
  post: `${host}/posts`,
  user: `${host}/users`,
  comment: `${host}/comments`,
};

export const fetcher = async (url, options = {}) => {
  const response = await fetch(url, options);

  return response;
};
