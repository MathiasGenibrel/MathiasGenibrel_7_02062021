import { useParams, useHistory } from "react-router-dom";

import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import Back from "../components/Back";

import { LoggingIn } from "../utils/Auth";

import useInput from "../hooks/useInput";

import { SignContent, BackPostion } from "../styles/signUp";

const SignUp = () => {
  const { slug } = useParams();
  const redirect = useHistory();

  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");

  const handleKeydown = (e) => {
    if (e.key === "Enter") handleClick();
  };

  const handleClick = async () => {
    const userLogin = await LoggingIn(
      slug,
      username,
      password,
      confirmPassword
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
    </SignContent>
  );
};

export default SignUp;
