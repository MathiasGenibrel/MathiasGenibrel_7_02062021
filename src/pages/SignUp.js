import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import Back from "../components/Back";
import styled from "styled-components";
import { LoggingIn } from "../js/Auth";
import { useParams } from "react-router-dom";

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
`;

const SignUp = () => {
  const { slug } = useParams();

  return (
    <SignContent>
      <Back />
      <LogoSvg height="150px" />
      <InputWithLabel
        label="userName"
        text="Nom d'utilisateur"
      ></InputWithLabel>
      <InputWithLabel
        label="password"
        text="Mot de passe"
        type="password"
      ></InputWithLabel>
      <InputWithLabel
        label="confirmPassword"
        text="Confirmez votre mot de passe"
        type="password"
      ></InputWithLabel>
      <Button onClick={() => LoggingIn(slug)} text="S'inscrire" />
    </SignContent>
  );
};

export default SignUp;
