import React, { Component } from 'react';
import './navStyle.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                  <nav className="myNav">
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