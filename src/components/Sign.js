import React, { Component } from "react";
import Button from "./Button";
import Back from "./Back";
import Input from "./Input";
import Logo from "./Logo";
import "../styles/signUp.css";

class BoxSign extends Component {
  state = {
    signIn: false,
    userName: "",
    password: "",
  };

  refComposantInput = React.createRef();

  switchMenu(event) {
    this.setState({
      signIn: event,
    });
  }

  userSignIn(event) {
    this.setState({
      signIn: event,
    });
  }

  userInfo(stateName, info) {
    this.setState({
      stateName: info,
    });
  }

  signUp(infoUser) {
    console.log(infoUser);
  }

  render() {
    if (this.state.signIn)
      return (
        <form className="sign">
          <Back
            switchMenu={this.switchMenu.bind(this, false)}
            name="sign__back"
          />
          <Logo color="#F4F4F4" height="145px" name="GROUPOMANIA" />
          <div className="sign__input">
            <Input
              inputTitle="Nom d'utilisateur :"
              inputText={this.signUp.bind(this, "userName")}
            ></Input>
            <Input inputTitle="Mot de passe :" inputType="password"></Input>
            <Input
              inputTitle="Confirmez votre mot de passe :"
              inputType="password"
            ></Input>
          </div>
          <Button
            userClick={this.signUp.bind(this, false)}
            text="S'inscrire"
          ></Button>
        </form>
      );

    return (
      <div className="sign">
        <Logo color="#F4F4F4" height="145px" name="GROUPOMANIA"></Logo>
        <div className="sign__input">
          <Input ref={this.refComposantInput} inputTitle="Nom d'utilisateur :"></Input>
          <Input inputTitle="Mot de passe :" inputType="password"></Input>
        </div>
        <Button
          reverse={true}
          userClick={this.switchMenu.bind(this, true)}
          text="S'inscrire"
        ></Button>
        <Button
          userClick={this.userSignIn.bind(this, true)}
          text="Se connecter"
        ></Button>
      </div>
    );
  }
}
export default BoxSign;
