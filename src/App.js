import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/auth/:slug"
            render={({ match }) => {
              if (match.params.slug.toLowerCase() === "signin") return <SignIn/>
              if (match.params.slug === "SignUp") return <SignUp/>
              return <NotFound/>
            }}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
