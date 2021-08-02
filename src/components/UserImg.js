import React from "react";

import AdminLogo from "./AdminLogo";

import { UserImg, UserAdmin, UserImgContent } from "../styles/component";

const UserImage = ({ role, name = "default", height = "40px" }) => {
  let isAdmin = null;
  if (role === "admin") isAdmin = <AdminLogo className="fas fa-shield-alt" />;

  return (
    <UserImgContent>
      <UserImg
        style={{ height: `${height}` }}
        src={`https://eu.ui-avatars.com/api/?name=${name}&background=random&bold=true&uppercase=false`}
        alt={`Utilisateur : ${name}`}
      />
      <UserAdmin>{isAdmin}</UserAdmin>
    </UserImgContent>
  );
};

export default UserImage;
