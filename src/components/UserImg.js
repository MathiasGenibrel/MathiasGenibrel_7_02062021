import React from "react";
import styled from "styled-components";
import AdminLogo from "./AdminLogo";

const UserImg = styled.img`
  filter: drop-shadow(1px 2px 6px rgba(0, 0, 0, 0.35));
  border-radius: 50%;
  height: 40px;
`;

const UserAdmin = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const UserImage = ({ role, name = "default" }) => {
  let isAdmin = null;
  if (role === "admin") isAdmin = <AdminLogo className="fas fa-shield-alt" />;

  return (
    <>
      <UserImg
        src={require("../assets/img/default_profile_pic.jpg").default}
        alt={`Utilisateur : ${name}`}
      />
      <UserAdmin>{isAdmin}</UserAdmin>
    </>
  );
};

export default UserImage;
