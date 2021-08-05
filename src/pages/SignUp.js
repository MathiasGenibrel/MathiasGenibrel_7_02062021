import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";

import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import Back from "../components/Back";

import { LoggingIn } from "../utils/Auth";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useInput from "../hooks/useInput";

import { SignContent, BackPostion } from "../styles/signUp";

const SignUp = () => {
  const { slug } = useParams();
  const redirect = useHistory();

  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [error, setError] = useState("404 not found");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") handleClick();
  };

  const handleClick = async () => {
    const userLogin = await LoggingIn(
      slug,
      username,
      password,
      confirmPassword,
      setError,
      setSeverity,
      setOpen
    );
    if (userLogin) redirect.push("/main");
  };

  return (
    <SignContent>
      <BackPostion>
        <Back />
      </BackPostion>
      <LogoSvg height="150px" />
      <InputWithLabel
        value={username}
        onChange={handleUsernameChange}
        label="userName"
        text="Nom d'utilisateur"
      ></InputWithLabel>
      <InputWithLabel
        value={password}
        onChange={handlePasswordChange}
        label="password"
        text="Mot de passe"
        type="password"
      ></InputWithLabel>
      <InputWithLabel
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        onKeyDown={handleKeydown}
        label="confirmPassword"
        text="Confirmez votre mot de passe"
        type="password"
      ></InputWithLabel>
      <Button onClick={handleClick} text="S'inscrire" />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {error}
        </Alert>
      </Snackbar>
    </SignContent>
  );
};

export default SignUp;
