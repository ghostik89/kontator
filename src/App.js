import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {LandingPage} from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import {routes} from "./helpers/routes";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route to={routes.landing}>
          <LandingPage/>
        </Route>
        <Route to={routes.login}>
          <LoginPage/>
        </Route>
        <Route to={routes.login}>
          <LoginPage/>
        </Route>
        <Route to={routes.register}>
          <RegisterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
