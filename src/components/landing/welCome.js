import React, { Component } from 'react';
import './WCStyle.css';
import Logo_White from '../../media/logo_white.png';

import {Link} from 'react-router-dom';

class WelCome extends Component {
    render() {
        return (
            <div className='myWCBody'>
                this is welcome screen.
                <div className="myMarginAdjustment row "></div>
                <div className="row">
                <div className="myFlexAdjustment">
                <div className="myWCContainer container">
                    <div className="myLogoAdjustment">
                        <img src={Logo_White} className="responsive-img" alt="Let's Find"/>
                    </div>
                    <p className="myWCTitle">
                        Welcome to Let's Find!
                    </p>
                    <p className="myWCStatementArea">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis incidunt similique aspernatur rem id quo architecto voluptate velit dolor, earum tempora deleniti, exercitationem quod animi nemo cumque et praesentium aperiam.
                    </p>
                    <div className="myBtnArea">
                        <Link to='/signin'>
                        <button className='btn'>GET START NOW</button>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
                <div className="row"></div>
                
            </div>
        )
    }
}

export default WelCome;