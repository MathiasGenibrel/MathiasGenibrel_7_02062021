import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import { LoggingIn } from "../utils/Auth";

import styled from "styled-components";

const SignContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: calc(var(--spacing) * 0.5) 0 calc(var(--spacing) * 1.5) 0;
  width: 300px;
  border: 1.5px solid #011827;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  background-color: ${(props) => props.theme.secondColor};
  height: fit-content;
  margin: auto 0;
`;

const SignUpLink = styled.span`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
`;

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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value.trimStart());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
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
    </SignContent>
  );
};

export default SignIn;
