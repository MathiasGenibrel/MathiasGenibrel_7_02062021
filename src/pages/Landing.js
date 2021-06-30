import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getInfo } from "../js/CallApi";
import { authentification } from "../js/Cookie";
import { useEffect } from "react";
import PostContent from "../components/PostContent";
import UserImage from "../components/UserImg";
import { SignOut } from "../js/Auth";
import background from "../assets/img/Background_texture.jpg"

const NavContent = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: var(--third-color);
  color: var(--primary-color);
  top: 0;
  width: 100%;
  height: 4.4rem;
`;
const Content = styled.div`
  display: flex;
  padding: 4.2rem 0;
  flex-direction: column;
  width: 100%;
`;

const Landing = () => {
  const [user, setUser] = useState({});
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    getInfo()
      .then((res) => res.json())
      .then((result) => {
        setAllPost(result);
      });
  }, []);

  useEffect(() => {
    getInfo(`users/${authentification("userId")}`)
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  return (
    <Content>
      <NavContent>
        <Link style={{ position: "relative" }} to={`/main/user/${user.userId}`}>
          <UserImage role={user.role} name={user.name} />
        </Link>
        <h2 style={{ fontSize: "1.4rem" }}>Acceuil</h2>
        <Link
          style={{ color: "#F4F4F4", fontSize: "1.4rem" }}
          to={`/auth/SignIn`}
          onClick={SignOut}
        >
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      </NavContent>
      {allPost.map((element, index) => {
        return <PostContent key={index} post={element} />;
      })}
    </Content>
  );
};

export default Landing;
