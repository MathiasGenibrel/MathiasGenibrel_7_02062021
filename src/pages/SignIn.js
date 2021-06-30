import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { LoggingIn } from "../js/Auth";

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

const SignUpLink = styled.span`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
`;

const SignIn = () => {
  const { slug } = useParams();
  const redirect = useHistory();

  const handleClick = async () => {
    const userLogin = await LoggingIn(slug);
    if (userLogin) redirect.push("/main");
  }

  return (
    <SignContent>
      <LogoSvg height="150px" />
      <div>
        <InputWithLabel
          label="userName"
          text="Nom d'utilisateur"
        ></InputWithLabel>
        <InputWithLabel
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
