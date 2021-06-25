import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import notFound from "./pages/notFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/" component={notFound} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
