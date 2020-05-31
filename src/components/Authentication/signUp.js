import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './signUpStyle.css';

class SignUp extends Component {
    render() {
        return (
              <div className='mX'>
                <NavBar />
                <div className="myBody">

                <div className="container ">
                <div className="myContainer">

                    <div className=" row">
                        <div className="col s12 m12 l12 xl12">
                         <p className="myFormTitle">
                              Sign Up
                             </p>
                        </div>
                        </div>
                    {/* <form action="">
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <span className='material-icons' id='icon' style={{float:'left', marginTop: '0.65em'}}>account_circle</span>
                        <input type="text" className='myTxtBox myTxtname'  placeholder="Full Name"/>
                        </div>
                    </form> */}
                    <div className="myForm row">
                <form className="XX">
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
                    <div className="row">
                    <div className="col s6 m6 l6 xl6 offset-s6"></div>
                    <div className="col s6 m6 l6 xl6 offset-s6">
                       <p className="myCreateNewAcc">
                           Create new account?
                           </p> 
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <SubFooter />
                </div>
                  
        )
    }
}

export default SignUp;