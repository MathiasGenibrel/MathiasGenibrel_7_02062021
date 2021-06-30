import React from "react";
import styled from "styled-components";

const AdminIcon = styled.svg`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const AdminLogo = ({ height = "80px", color = "#F4F4F4", secondColor = "#011827" }) => {
  return (
    <>
      <AdminIcon
        height= "1rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="shield-alt"
        className="svg-inline--fa fa-shield-alt fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill={color}
          stroke={secondColor}
          strokeWidth = "1rem"
          d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
        ></path>
      </AdminIcon>
    </>
  );
};

export default AdminLogo;
