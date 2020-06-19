import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './navStyle2.css';

import SB_bg from '../../../media/side_bar/side_bar_bg_3.jpg';
import SB_dp from '../../../media/dummy_profile.jpg';
import Logo from '../../../media/logo_white.png';

class NavBar2 extends Component {

    //..........................................    
    componentDidMount(){
        window.jQuery(document).ready(function(){
            window.jQuery('.sidenav').sidenav();
            window.jQuery('.dropdown-trigger').dropdown();
          });         
    } 

//.......................................

    //function to close the side bar
    closeSB=()=>{
        // alert('yes close');

        window.jQuery(document).ready(function(){
            window.jQuery('.sidenav').sidenav('close');
          });   
}
//...........................................


    render() {
        return (
            <div>
             <nav className='myLINav'>
            <div className="nav-wrapper">
            <span className="menu_btn">
                            <span className='sidenav-trigger' data-target="slide-out" ><i className="menu_btn_style material-icons " >dehaze</i></span>
                      </span>
                      <span>
                         <Link to="/home"><img className="myLogoStyling brand-logo" width="150px" src={Logo} alt="images/yuna.jpg"  /></Link>
                      </span>
                      <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
  
                    <span className="mySBCLoseBtnX"><i className="mySBCLoseBtn material-icons" onClick={this.closeSB}>backspace</i></span>
  
                     <div className="background center">
                     <img src={SB_bg} alt="side bar bg" />
                    </div>
    <Link to="#dp"><img className="circle" src={SB_dp} alt="images/yuna.jpg"  /></Link>
    <Link to="#name"><span className="white-text name">John Doe</span></Link>
 <Link to="#email"><span className="white-text email">jdandturk@gmail.com</span></Link>
                    </div></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/home'><i className="mySNIcon material-icons">home</i><span>Home</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/notifications'><i className="mySNIcon material-icons">notifications_active</i><span>Notifications</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/search'><i className="mySNIcon material-icons">search</i><span>Search</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/post'><i className="mySNIcon material-icons">add_circle_outline</i><span>Add new post</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/active_posts'><i className="mySNIcon material-icons">cast</i><span>Active posts</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/resloved_posts'><i className="mySNIcon material-icons">check_box</i><span>Resolved posts</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/profile'><i className="mySNIcon material-icons">account_circle</i><span>Profile</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/settings'><i className="mySNIcon material-icons">build</i><span>Settings</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/help'><i className="mySNIcon material-icons">live_help</i><span>Help?</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/feedback'><i className="mySNIcon material-icons">feedback</i><span>Feedback</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/about'><i className="mySNIcon material-icons">feedback</i><span>About us</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/signin'><i className="mySNIcon material-icons">power_settings_new</i><span>Logout</span></Link></li>
</ul>
{/* <i className="material-icons">menu</i> */}

            {/* <a href="#" className="brand-logo left">Logo</a> */}

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                          {/* <li className="myNavItem">Help?</li> */}
                          <li className="myNavItem">
                              <Link to="/home">
                              Home
                              </Link>
                              </li>
                          <li className="myNavItem">
                              <Link to="/about">
                              About us
                              </Link>
                              </li>
                          <li className="myNavItem">
                              
  
                          <Link className="dropdown-trigger" to="#!" data-target="dropdown1">
                          <i className="material-icons">account_circle</i></Link>

                            <ul id='dropdown1' className='dropdown-content'>
                            <li><Link to="/profile"><i className="mySNIcon material-icons">account_circle</i>Account</Link></li>
                            <li><Link to="/signin"><i className="mySNIcon material-icons">power_settings_new</i>Logout</Link></li>
                          </ul>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default NavBar2