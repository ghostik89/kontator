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
            <Route path={routes.login} exact>
              <LoginPage/>
            </Route>
            <Route path={routes.register} exact>
              <RegisterPage/>
            </Route>
            <Route path={routes.mainResident} exact>
              <ResidentMainPage />
            </Route>
            <Route path={routes.docsResident} exact>
              <ResidentDocumentsPage />
            </Route>
            <Route path={routes.eventsResident} exact>
              <ResidentEventsPage />
            </Route>
            <Route path={routes.ratingResident} exact>
              <ResidentRatingPage />
            </Route>
            <Route path={routes.mainAdmin} exact>
              <MainPageAdmin />
            </Route>
            <Route path={routes.chartAdmin} exact>
              <StatisticAdminPage />
            </Route>
            <Route path={routes.requestsAdmin} exact>
              <RequestsPageAdmin />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
  );
}

export default App;
