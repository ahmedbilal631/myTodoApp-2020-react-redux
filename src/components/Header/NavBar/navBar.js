import React, { Component } from 'react';
import './navStyle.css';

// import Logo_White from '../../../media/logo_white.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                  <nav className="myNav">
                      {/* <span> */}
                          {/* <img src={Logo_White} alt="Lets Find" className="responsive-img"/> */}
                      {/* </span> */}
                      <ul>
                          <li className="myNavItem">Help?</li>
                          <li className="myNavItem">About us</li>
                      </ul>
                 </nav>
            </div>
        )
    }
}

export default NavBar