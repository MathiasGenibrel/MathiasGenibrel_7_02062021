import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import "../styles/signUp.css";

class BoxSign extends Component {
  render() {
    return (
      <div className="sign">
        <Logo color="#F4F4F4" height="145px" name="GROUPOMANIA"></Logo>
        <div className="sign__input">
          <Input inputTitle="Nom d'utilisateur :"></Input>
          <Input inputTitle="Mot de passe :" inputType="password"></Input>
        </div>
        <Button reverse={true} text="S'inscrire"></Button>
        <Button text="Se connecter"></Button>
      </div>
    );
  }
}
export default BoxSign;
