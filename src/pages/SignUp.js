import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import Back from "../components/Back";
import styled from "styled-components";
import { LoggingIn } from "../utils/Auth";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";

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
  background-color: var(--second-color);
  height: fit-content;
  margin: auto 0;
`;

const BackPostion = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
`;

const SignUp = () => {
  const { slug } = useParams();
  const redirect = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleKeydown = (e) => {
    if (e.key === "Enter") handleClick()
  }

  const handleClick = async () => {
    const userLogin = await LoggingIn(slug, username, password, confirmPassword);
    if (userLogin) redirect.push("/main");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
    </SignContent>
  );
};

export default SignUp;
