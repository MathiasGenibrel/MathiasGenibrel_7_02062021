import PostContent from "../components/PostContent";
import { authentification } from "../js/Cookie";
import UserImage from "../components/UserImg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getInfo } from "../js/CallApi";
import styled from "styled-components";
import { SignOut } from "../js/Auth";
import { useEffect } from "react";

const NavContent = styled.nav`
  background-color: var(--third-color);
  color: var(--primary-color);
  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 4.4rem;
  display: flex;
  width: 100%;
  z-index: 2;
  top: 0;
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
        <Link
          style={{ position: "relative" }}
          to={{ pathname: `/main/${user.name}`, state: { user } }}
        >
          <UserImage role={user.role} name={user.name} />
        </Link>
        <h2 style={{ fontSize: "1.4rem" }}>Acceuil</h2>
        <Link
          style={{ color: "var(--primary-color)", fontSize: "1.4rem" }}
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
