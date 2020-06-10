import React, { Component } from 'react';
import './navStyle2.css';

import {Link} from 'react-router-dom';

import Side_Bar from '../../Side_Bar/side_bar'

// import Logo_White from '../../../media/logo_white.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                  <nav className="myNav">
                      {/* <span> */}
                          {/* <img src={Logo_White} alt="Lets Find" className="responsive-img"/> */}
                      {/* </span> */}
                      <span className="menu_btn">
                            <span className='sidenav-trigger' data-target="slide-out" ><i className="menu_btn_style material-icons " >dehaze</i></span>
                      </span>
                      <div>
                      <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                     <div className="background">
                     {/* <img src="images/office.jpg"> */}
                     bg
                    </div>
    {/* <a href="#user"><img className="circle" src="images/yuna.jpg"></a> */}
    {/* <a href="#name"><span className="white-text name">John Doe</span></a> */}
    {/* <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a> */}
                    </div></li>
  <li><i className="material-icons">cloud</i>First Link With Icon></li>
  <li><i className="material-icons">cloud</i>First Link With Icon></li>
  <li><i className="material-icons">cloud</i>First Link With Icon></li>
</ul>
{/* <i className="material-icons">menu</i> */}

                      </div>
                      <ul>
                          <li className="myNavItem">Help?</li>
                          <li className="myNavItem">
                              <Link to="/about">
                              About us
                              </Link>
                              </li>
                          <li className="myNavItem">Logout</li>
                      </ul>
                 </nav>
            </div>
        )
    }
}

export default NavBar