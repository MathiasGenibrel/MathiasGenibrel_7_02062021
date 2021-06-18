import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";

class BoxSign extends Component {
  render() {
    return (
      <div className="App__box-sign">
        <Logo color="#F4F4F4" height="145px" name="GROUPOMANIA"></Logo>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "11.5rem",
          }}
        >
          <Input nameInput="Nom d'utilisateur :"></Input>
          <Input nameInput="Mot de passe :" inputType="password"></Input>
        </div>
        <Button reverse={true} text="S'inscrire"></Button>
        <Button reverse={false} text="Se connecter"></Button>
      </div>
    );
  }
}
export default BoxSign;
