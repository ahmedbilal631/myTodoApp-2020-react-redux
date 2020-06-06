import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './signUpStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addUser, loadData} from '../../redux/actions/index';


class SignUp extends Component {
    constructor(){
        super();
        this.state ={
            name : '',
            names : []
    }}

    componentDidMount(){
        this.props.loadData();
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.names,"next props")
        this.setState({
            names : nextProps.names
        })    
    }

    handleChange=event=>{
        let textX = this.state;
        textX.name = event.target.value
        console.log(textX);
        this.setState({
            name: textX.name
        })
    }

    adder=()=>{
    console.log(this.state);
    
        this.props.addUser({text: this.state.name});
        this.setState({
            name: ''
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
        <p>{this.state.name}</p>
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
                                                       value={this.state.name}
                                                       onChange={this.handleChange}                    
                    />
                     <label htmlFor="icon_prefix" className="myTxtLable">Full Name</label>
                     </div>
                     <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="myInputBox" />
                     <label htmlFor="email">Email</label>
                     </div>
                    <div className="input-field">
                     <i className="material-icons prefix">phone</i>
                         <input id="icon_telephone" type="tel" className="myInputBox" />
                     <label htmlFor="icon_telephone">Cell Number</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="myInputBox" />
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
        names: state.users
    }
};

export default connect(mapStateToProps, {addUser, loadData})(SignUp);