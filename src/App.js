import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import React from "react";

const App = () => {
  return (
    <div className="App">
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
          <Route path="/main/:slug" component={UserProfile} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
