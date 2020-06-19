import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './signUpStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addUser, loadData} from '../../redux/actions/UserAction/index';


class SignUp extends Component {
    constructor(){
        super();
        this.state ={
            new_name: '',
            new_email: '',
            new_number: '',
            new_country: '',
            new_password: '',
            new_profile_pic: '',
            accounts: []
    }}

    componentDidMount(){
        this.props.loadData();
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.accounts,"next props")
        this.setState({
            accounts : nextProps.accounts
        })    
    }

    handleNameChange=event=>{
        this.setState({
            new_name: event.target.value 
        })
    }
    handleEmailChange=e=>{
        this.setState({
            new_email: e.target.value
        })
    }
    handleNumberChange=e=>{
        this.setState({
            new_number: e.target.value
        })
    }
    handlePasswordChange=e=>{
        this.setState({
            new_password: e.target.value
        })
    }

    adder=()=>{
    console.log(this.state);
    let getStateData = this.state;
    // let account_data = 
    // console.log(account_data);
    
    
        this.props.addUser(
            {
                name: getStateData.new_name,
                email: getStateData.new_email,
                number: getStateData.new_number,
                country: '',
                profile_pic: getStateData.new_profile_pic,
                password: getStateData.new_password
            }
        );
        this.setState({
            new_name: '',
            new_email: '',
            new_number: '',
            new_country: '',
            new_password: '',
            new_profile_pic: ''
        });
    }
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
        {/* <p>{this.state.name}</p> */}
                        </div>
                        </div>
                    {/* <form action="">
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <span className='material-icons' id='icon' style={{float:'left', marginTop: '0.65em'}}>account_circle</span>
                        <input type="text" className='myTxtBox myTxtname'  placeholder="Full Name"/>
                        </div>
                    </form> */}
                    <div className="myForm row">
                {/* <form className="XX"> */}
                    <div className="input-field">
                    <i className="myIcon material-icons prefix ">account_circle</i>
                    <input id="icon_prefix" type="text" className="myTxtBox"
                                                       value={this.state.new_name}
                                                       onChange={this.handleNameChange}                    
                    />
                     <label htmlFor="icon_prefix" className="myTxtLable">Full Name</label>
                     </div>
                     <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="myInputBox" 
                    value={this.state.new_email}
                    onChange={this.handleEmailChange} 
                    />
                     <label htmlFor="email">Email</label>
                     </div>
                    <div className="input-field">
                     <i className="material-icons prefix">phone</i>
                         <input id="icon_telephone" type="tel" className="myInputBox"
                                             value={this.state.new_number}
                                             onChange={this.handleNumberChange}
                         />
                     <label htmlFor="icon_telephone">Cell Number</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="myInputBox"
                                        value={this.state.new_password}
                                        onChange={this.handlePasswordChange}
                    />
                     <label htmlFor="password">Password</label>
                     </div>
                    <div>
                        <button className="myBtn btn " onClick={this.adder}>SIGN UP</button>
                    </div>
                    {/* </form> */}
                    <div className="row">
                    <div className="col s6 m6 l6 xl6 offset-s6"></div>
                    <div className="col s6 m6 l6 xl6 offset-s6">
                       <Link to='/signin'>
                       <p className="myCreateNewAcc">
                           Already have an account?
                           </p> 
                       </Link>
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
//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        accounts: state.users
    }
};

export default connect(mapStateToProps, {addUser, loadData})(SignUp);