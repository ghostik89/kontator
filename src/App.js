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
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./helpers/customTheme";
import {ResidentDocumentsPage} from "./pages/ResidentPages/Documtents";
import {ResidentEventsPage} from "./pages/ResidentPages/Events";
import {ResidentRatingPage} from "./pages/ResidentPages/Rating";
import {MainPageAdmin} from "./pages/AdminPages/MainPage";
import {StatisticAdminPage} from "./pages/AdminPages/StatisticPage";
import {RequestsPageAdmin} from "./pages/AdminPages/RequestsPage";


function App() {
  return (
      <ThemeProvider theme={theme}>
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
            <Route path={routes.docsResident}>
              <ResidentDocumentsPage />
            </Route>
            <Route path={routes.eventsResident}>
              <ResidentEventsPage />
            </Route>
            <Route path={routes.eventsResident}>
              <ResidentRatingPage />
            </Route>
            <Route path={routes.mainAdmin}>
              <MainPageAdmin />
            </Route>
            <Route path={routes.chartAdmin}>
              <StatisticAdminPage />
            </Route>
            <Route path={routes.requestsAdmin}>
              <RequestsPageAdmin />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
  );
}

export default App;
