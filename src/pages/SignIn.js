import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";

import { LoggingIn } from "../utils/Auth";

import useInput from "../hooks/useInput";

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

  const handleKeydown = (e) => {
    if (e.key === "Enter") handleClick();
  };

  const handleClick = async () => {
    const userLogin = await LoggingIn(slug, username, password);
    if (userLogin) redirect.push("/main");
  };

  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

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
    </SignContent>
  );
};

export default SignIn;
