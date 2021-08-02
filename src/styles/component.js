import styled from "styled-components";

//Input.js

export const InputText = styled.label`
  color: ${(props) => props.theme.primaryColor};
  margin: 1rem 0 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
`;

export const InputUser = styled.input`
  background: ${(props) => props.theme.thirdColor};
  color: ${(props) => props.theme.primaryColor};
  height: 60px;
  width: calc(260px - 1rem);
  padding-left: 1rem;
  border-radius: 15px;
  box-shadow: 4px 4px 8px rgba(1, 24, 39, 0.35),
    inset 5px 4px 4px rgba(255, 146, 51, 0.15);
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

//Button.js

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.thirdColor};
  color: ${(props) => props.theme.primaryColor};
  height: 50px;
  width: 175px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 15px;
  margin-top: 1.5rem;
  box-shadow: 4px 4px 8px rgba(1, 24, 39, 0.35),
    inset 5px 4px 4px rgba(255, 146, 51, 0.15);
  &:active {
    transform: scale(0.98);
  }
`;

export const StyledButtonReverse = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.thirdColor};
  height: 50px;
  width: 175px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 15px;
  margin-top: 1.5rem;
  box-shadow: 4px 4px 8px rgba(1, 24, 39, 0.35),
    inset 5px 4px 4px rgba(255, 146, 51, 0.15);
  &:active {
    transform: scale(0.98);
  }
`;

//AdminLogo.js

export const AdminIcon = styled.svg`
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const IconFill = styled.path`
  fill: ${(props) => props.theme.primaryColor};
  stroke: ${(props) => props.theme.thirdColor};
`;

//Back.js

export const Icon = styled.i`
  color: ${(props) => props.theme.primaryColor};
  font-size: 1.8rem;
`;

//DeleteLogo.js

export const DeleteIcon = styled.svg`
  position: relative;
  right: 0;
  bottom: 0;
  color: ${(props) => props.theme.secondColor};
`;

//Logo.js

export const LogoSvg = styled.div`
  position: relative;
  padding: 0 0 0.5rem 0;
`;
export const LogoTitle = styled.h1`
  position: absolute;
  bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.primaryColor};
`;

export const ColorLogo = styled.g`
  fill: ${(props) => props.theme.primaryColor};
`;

//UserImg.js

export const UserImg = styled.img`
  filter: drop-shadow(1px 2px 6px rgba(0, 0, 0, 0.35));
  border-radius: 50%;
`;

export const UserAdmin = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const UserImgContent = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;
