import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './signUpStyle.css';

class SignUp extends Component {
    render() {
        return (
            <div>

            <div className='myBody'>
                <NavBar />
                <div className="myContainer">
                    <div className="myFormTitle">Sign Up</div>
                    {/* <form action="">
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <span className='material-icons' id='icon' style={{float:'left', marginTop: '0.65em'}}>account_circle</span>
                        <input type="text" className='myTxtBox myTxtname'  placeholder="Full Name"/>
                        </div>
                    </form> */}
                <form className="myForm">
                    <div className="input-field">
                    <i className="myIcon material-icons prefix ">account_circle</i>
                    <input id="icon_prefix" type="text" className="myTxtBox" />
                     <label for="icon_prefix" className="myTxtLable">First Name</label>
                     </div>
                     <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="myInputBox" />
                     <label for="email">Email</label>
                     </div>
                    <div class="input-field">
                     <i class="material-icons prefix">phone</i>
                         <input id="icon_telephone" type="tel" class="myInputBox" />
                     <label for="icon_telephone">Telephone</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="myInputBox" />
                     <label for="password">Password</label>
                     </div>
                    <div>
                        <button className="myBtn btn ">SIGN UP</button>
                    </div>
                    </form>

                    </div>
                </div>
                    <SubFooter />
                        </div>
        )
    }
}

export default SignUp;