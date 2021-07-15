import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import React from "react";
import AddPost from "./pages/AddPost";
import styled from "styled-components";
import backgroundImgLight from "./assets/img/Background_texture_light.jpg";
import backgroundImgDark from "./assets/img/Background_texture_dark.jpg";

const theme = localStorage.getItem("theme") === "light" ? backgroundImgLight : backgroundImgDark

const AppContent = styled.div`
  font-family: "roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  &::before {
    background: scroll left/50px url(${theme});
    content: "";
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;
  }
`;

const App = () => {
  return (
    <AppContent>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/auth/SignIn" />;
            }}
          />
          <Route
            path="/auth/:slug"
            render={({ match }) => {
              if (match.params.slug.toLowerCase() === "signin")
                return <SignIn />;
              if (match.params.slug.toLowerCase() === "signup")
                return <SignUp />;
              return <NotFound />;
            }}
          />
          <Route path="/main" exact component={Landing} />
          <Route path="/main/newPost" component={AddPost} />
          <Route path="/main/:slug" component={UserProfile} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </AppContent>
  );
};
export default App;
