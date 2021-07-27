import React from "react";

import AdminLogo from "./AdminLogo";

import { UserImg, UserAdmin } from "../styles/component";

const UserImage = ({ role, name = "default", height = "40px" }) => {
  let isAdmin = null;
  if (role === "admin") isAdmin = <AdminLogo className="fas fa-shield-alt" />;

  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <UserImg
        style={{ height: `${height}` }}
        src={require("../assets/img/default_profile_pic.jpg").default}
        alt={`Utilisateur : ${name}`}
      />
      <UserAdmin>{isAdmin}</UserAdmin>
    </div>
  );
};

export default UserImage;
