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
import EditPostPageX from '../components/Post/edit_post';
import ProfilePage from '../components/Edit_Profile/profile';
import DisplayPostPage from '../components/Post/display_posts_page';
import SearchPage from '../components/Search/search';

//redux connection
import {loadData} from '../redux/actions/UserAction/index';
import {connect} from 'react-redux';
import Notifications from "../components/Notifications/notifications";

class Routes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''}
    }
  componentDidMount(){
    // this.props.loadData();
  }

  render() {
    let account = this.props.account;
    let check_login = localStorage.getItem('acc_id');


    return (
      <Router>
        {/* <BrowserRouter > */}
        <Switch>
          <Route exact path={routes.WEL_COME} component={WelComePage} />
          <Route  path={routes.ABOUT_PAGE} component={AboutPage} />
          <Route  path={routes.SIGN_IN} component={SignInPage} />
          <Route  path={routes.SIGN_UP} component={SignUpPage} />
          </Switch>
          {check_login === ''?
        <Switch>
          <Route exact path={routes.WEL_COME} component={WelComePage} />
          <Route  path={routes.ABOUT_PAGE} component={AboutPage} />
          <Route  path={routes.SIGN_IN} component={SignInPage} />
          <Route  path={routes.SIGN_UP} component={SignUpPage} />
          </Switch>
          :        
          <Switch>
          {/* <Route exact path={routes.ADD_POST} component={AddPostPage} /> */}
          <Route  path={routes.ABOUT_PAGE} component={AboutPage} />
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route  path={routes.ADD_POSTX} component={AddPostPageX} />
          <Route  path={routes.EDIT_POSTX} component={EditPostPageX} />
          <Route  path={routes.PROFILE} component={ProfilePage} />
          <Route  path={routes.DISPLAY_POSTS} component={DisplayPostPage} />
          <Route  path={routes.NOTIFICATIONS} component={Notifications} />
          <Route exact path={routes.SEARCH} component={SearchPage} />
          {/* <Route exact path={routes.CHECKOUT} component={CheckOutPage} /> */}
          {/* <Route exact path={routes.LEARNER_DRIVER} component={LearnerDriver} /> */}
          {/* <Route exact path={routes.DRIVING_INSTRUCTOR} component={DrivingInstructor} /> */}
          </Switch>
        }
          
          {/* </ BrowserRouter > */}
      </Router>
    );
  }
}
//here the redux data will be converted into props
const mapStateToProps=(state)=>{
  return{
      account: state.usersReducer
  }
};
export default connect(mapStateToProps, null)(Routes);
// export default Routes