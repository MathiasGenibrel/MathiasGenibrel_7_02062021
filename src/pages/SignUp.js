import InputWithLabel from "../components/Input";
import Button from "../components/Button";
import LogoSvg from "../components/Logo";
import Back from "../components/Back";

const SignUp = () => {
  return (
    <>
      <Back/>
      <LogoSvg height="120px" color="#333" />
      <InputWithLabel
        label="userName"
        text="Nom d'utilisateur"
      ></InputWithLabel>
      <InputWithLabel
        label="paswword"
        text="Mot de passe"
        type="password"
      ></InputWithLabel>
      <InputWithLabel
        label="confirmPaswword"
        text="Confirmez votre mot de passe"
        type="password"
      ></InputWithLabel>
      <Button text="S'inscrire"/>
    </>
  );
};

export default SignUp;
