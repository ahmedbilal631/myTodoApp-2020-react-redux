import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as routes from "./routesPath";

//pages
import WelComePage from '../components/landing/welCome';
import AboutPage from '../components/About/about';
import SignUpPage from '../components/Authentication/signUp';
import SignInPage from '../components/Authentication/signIn';
import HomePage from '../components/Home/home';
// import AddPostPage from '../components/AddPost/addPost';
import AddPostPageX from '../components/Post/add_post';
import ProfilePage from '../components/Edit_Profile/profile';
import DisplayPostPage from '../components/Post/display_posts_page';


export default class Routes extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.WEL_COME} component={WelComePage} />
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route exact path={routes.ABOUT_PAGE} component={AboutPage} />
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          {/* <Route exact path={routes.ADD_POST} component={AddPostPage} /> */}
          <Route exact path={routes.ADD_POSTX} component={AddPostPageX} />
          <Route exact path={routes.PROFILE} component={ProfilePage} />
          <Route exact path={routes.DISPLAY_POSTS} component={DisplayPostPage} />
          {/* <Route exact path={routes.SEARCH} component={SearchPage} /> */}
          {/* <Route exact path={routes.CHECKOUT} component={CheckOutPage} /> */}
          {/* <Route exact path={routes.LEARNER_DRIVER} component={LearnerDriver} /> */}
          {/* <Route exact path={routes.DRIVING_INSTRUCTOR} component={DrivingInstructor} /> */}

        </Switch>
      </Router>
    );
  }
}
