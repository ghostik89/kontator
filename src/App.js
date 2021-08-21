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
import {ResidentMainPage} from "./pages/ResidentPages/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.landing} exact>
          <LandingPage/>
        </Route>
        <Route path={routes.login}>
          <LoginPage/>
        </Route>
        <Route path={routes.register}>
          <RegisterPage/>
        </Route>
        <Route path={routes.mainResident}>
          <ResidentMainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
