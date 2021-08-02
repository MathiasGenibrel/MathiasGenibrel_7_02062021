import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";

import { switchTheme } from "../utils/switchTheme";
import { HandleClick } from "../utils/editProfile";

import { NavUser, Navigation, EditProfile } from "../styles/userEditProfile";
import Back from "../components/Back";
import Input from "../components/Input";
import Button from "../components/Button";
import { UserInfoProfil } from "../components/UserInfoProfil";

import useInput from "../hooks/useInput";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const UserEditProfile = () => {
  const user = useLocation().state.user;
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [error, setError] = useState("404 not found");
  const [username, handleNameChange] = useInput("");
  const [description, handleDescriptionChange] = useInput("");

  const redirect = useHistory();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <NavUser>
      <Navigation>
        <Back />
      </Navigation>
      <UserInfoProfil
        user={user}
        switchMode={() => switchTheme(theme, setTheme)}
        theme={theme}
      />
      <EditProfile>
        <Input
          value={username}
          placeholder={user.name}
          onChange={handleNameChange}
          label="name"
          text="Nom :"
        ></Input>
        <Input
          value={description}
          placeholder={user.description}
          onChange={handleDescriptionChange}
          label="description"
          text="Parlez de vous :"
        ></Input>
        <Button
          onClick={() =>
            HandleClick(
              username,
              description,
              user,
              redirect,
              setError,
              setSeverity,
              setOpen
            )
          }
          text="Save"
        ></Button>
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
