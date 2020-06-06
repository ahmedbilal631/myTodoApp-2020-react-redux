import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as routes from "./routesPath";

//pages
import SignUpPage from '../components/Authentication/signUp';
import SignInPage from '../components/Authentication/signIn';


export default class Routes extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path={routes.HOME_PAGE} component={HomePage} /> */}
          {/* <Route exact path={routes.ABOUT_PAGE} component={AboutPage} /> */}
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          {/* <Route exact path={routes.SEARCH} component={SearchPage} /> */}
          {/* <Route exact path={routes.CHECKOUT} component={CheckOutPage} /> */}
          {/* <Route exact path={routes.LEARNER_DRIVER} component={LearnerDriver} /> */}
          {/* <Route exact path={routes.DRIVING_INSTRUCTOR} component={DrivingInstructor} /> */}

        </Switch>
      </Router>
    );
  }
}
