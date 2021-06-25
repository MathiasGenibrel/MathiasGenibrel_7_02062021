import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import { Link } from "react-router-dom";
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
  background-color: var(--second-color);
`;

const SignUpLink = styled.span `
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
`

const SignIn = () => {
  return (
    <SignContent>
      <LogoSvg height="150px" color="#F4F4F4" />
      <div>
        <InputWithLabel
          label="userName"
          text="Nom d'utilisateur"
        ></InputWithLabel>
        <InputWithLabel
          label="paswword"
          text="Mot de passe"
          type="password"
        ></InputWithLabel>
      </div>
      <Button text="Se connecter" />
      <Link to="/SignUp" style={{marginTop: "1rem"}}>
        <SignUpLink>S'inscrire</SignUpLink>
      </Link>
    </SignContent>
  );
};

export default SignIn;
