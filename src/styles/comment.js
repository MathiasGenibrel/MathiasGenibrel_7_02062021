import styled from "styled-components";
import { Icon } from "@iconify/react";

export const CreateComment = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const SendCommentIcon = styled(Icon)`
  color: ${(props) => props.theme.primaryColor};
`;

export const UserCommentContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  padding: 0.5rem;
  position: relative;
  border: solid ${(props) => props.theme.primaryColor};
  border-radius: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserInfoText = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

export const UserComment = styled.span`
  text-align: left;
  margin-left: 3.5rem;
`;

export const DeleteIcon = styled(Icon)`
  position: absolute;
  right: 0;
  top: 0;
`;
