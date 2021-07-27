export const switchTheme = (theme, setTheme) => {
  const changeTheme = theme === "light" ? "dark" : "light";
  setTheme(changeTheme);
  localStorage.setItem("theme", changeTheme);
  window.location.reload(false);
};
