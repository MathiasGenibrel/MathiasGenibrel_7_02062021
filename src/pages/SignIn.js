import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";

import { LoggingIn } from "../utils/Auth";

import useInput from "../hooks/useInput";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { SignContent, SignUpLink } from "../styles/signIn";

const SignIn = () => {
  if (!localStorage.getItem("theme"))
    localStorage.setItem(
      "theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  const { slug } = useParams();
  const redirect = useHistory();

  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [error, setError] = useState("404 not found");

  const handleKeydown = async (e) => {
    if (e.key === "Enter") await handleClick();
  };

  const handleClick = async () => {
    const userLogin = await LoggingIn(
      slug,
      username,
      password,
      undefined,
      setError,
      setSeverity,
      setOpen
    );
    if (userLogin) redirect.push("/main");
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <SignContent>
      <LogoSvg height="150px" />
      <div>
        <InputWithLabel
          value={username}
          onChange={handleUsernameChange}
          label="userName"
          text="Nom d'utilisateur"
        ></InputWithLabel>
        <InputWithLabel
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeydown}
          label="password"
          text="Mot de passe"
          type="password"
        ></InputWithLabel>
      </div>
      <Button onClick={handleClick} text="Se connecter" />
      <Link to="/auth/SignUp" style={{ marginTop: "1rem" }}>
        <SignUpLink>S'inscrire</SignUpLink>
      </Link>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {error}
        </Alert>
      </Snackbar>
    </SignContent>
  );
};

export default SignIn;
