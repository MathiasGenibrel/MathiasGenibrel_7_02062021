import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";

import { fetcher, ROUTES } from "../utils/Api";
import { getCookie } from "../utils/Cookie";

import styled from "styled-components";
import Back from "../components/Back";
import Input from "../components/Input";
import Button from "../components/Button";
import { UserInfoProfil } from "../components/UserInfoProfil";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const NavUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  padding-bottom: 2.5rem;
`;

const Navigation = styled.nav`
  background-color: ${(props) => props.theme.thirdColor};
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  display: flex;
  height: 90px;
`;

const EditProfile = styled.div`
  margin: 5rem 1rem 1rem 1rem;
  padding: 1rem 0 2rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: ${(props) => props.theme.secondColor};
`;

const UserEditProfile = () => {
  const redirect = useHistory();
  const user = useLocation().state.user;
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [error, setError] = useState("404 not found");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const switchMode = () => {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
    localStorage.setItem("theme", changeTheme);
    window.location.reload(false);
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value.trimStart());
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value.trimStart());
  };

  const handleClick = async () => {
    if (name === "" && description === "") {
      setError("Les champs sont vides !");
      setSeverity("error");
      return setOpen(true);
    }
    if (name !== "" && description === "") {
      await editProfile(name);
      return redirect.push("/main");
    }
    if (description !== "" && name === "") {
      await editProfile(undefined, description);
      return redirect.push("/main");
    }
    await editProfile(name, description);
    return redirect.push("/main");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  console.log(`${ROUTES.user}/${user.id}`);

  const editProfile = async (name, description) => {
    await fetcher(`${ROUTES.user}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("BearerToken")}`,
      },
      body: JSON.stringify({ name, description }),
    }).then((user) => {
      console.log(user);
      setSeverity(user.status === 200 ? "success" : "error");
      setError(`${user.message}`);
      setOpen(true);
    });
  };
  return (
    <NavUser>
      <Navigation>
        <Back />
      </Navigation>
      <UserInfoProfil user={user} switchMode={switchMode} theme={theme} />
      <EditProfile>
        <Input
          value={name}
          onChange={handleNameChange}
          label="name"
          text="Nom :"
        ></Input>
        <Input
          value={description}
          onChange={handleDescriptionChange}
          label="description"
          text="Votre rôle :"
        ></Input>
        <Button onClick={handleClick} text="Save"></Button>
      </EditProfile>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {error}
        </Alert>
      </Snackbar>
    </NavUser>
  );
};

export default UserEditProfile;