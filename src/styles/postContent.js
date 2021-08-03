import styled from "styled-components";
import { Link } from "react-router-dom";

export const Post = styled.div`
  margin: 1.5rem 1rem 0 1rem;
  padding: 0.5rem;
  width: auto;
  max-width: 500px;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 1rem;
  position: relative;
  @media (min-device-width: 550px) {
    margin: 1.5rem auto 0;
  }
`;

export const UserInfoLink = styled(Link)`
  display: flex;
  margin: 0.7rem 0.5rem 1.3rem 0.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

export const UserInfo = styled.div`
  display: flex;
  margin: 0.7rem 0.5rem 1.3rem 0.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

export const UserProfilImg = styled.div`
  position: relative;
  margin-right: 1rem;
  text-align: left;
`;

export const UserProfilText = styled.div`
  text-align: left;
`;

export const UserProfilName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: capitalize;
`;

export const UserPost = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

export const UserVote = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const UserVoteIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 2rem;
  &:active {
    transform: scale(0.95);
  }
`;

export const DeletePost = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #f4f4f4;
`;

export const ImgPost = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  margin: 1rem 0 0.5rem 0;
  border-radius: 0.5rem;
  @media (min-device-width: 550px) {
    max-height: 380px;
  }
`;

export const TextPost = styled.p`
  overflow-wrap: break-word;
`;
