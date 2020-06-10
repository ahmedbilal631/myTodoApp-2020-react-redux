import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './editProfileStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addUser, loadData} from '../../redux/actions/index';
import Dp_Replacement from '../../media/dp_replacement.png'


class Edit_Profile extends Component {
    constructor(){
        super();
        this.state ={
            account_data: {},
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
        let acc = this.props.names[0];
        console.log(acc);
        return (
              <div className='mX'>
                <NavBar />
                <div className="myAPBody">
                <div className="container ">
                <div className="myAPContainer">

                    <div className=" row">
                        <div className="col s12 m12 l12 xl12">
                         <p className="myFormTitle">
                              Edit Profile
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
                {/* <form className="XX"> */}
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="dp_Box_Style col">
                            {acc.profile_image == ''? 
                        // <p className="place_for_dp_Text">DP</p>    
                        <img src={acc.profile_image} alt="Profile Image" className='dp_style responsive-img'/>
                        :
                        <img src={Dp_Replacement} alt="Profile Image" className='dp_style responsive-img'/>
                    }
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="myAPTxtBoxDiv input-field">
                      <input placeholder="Full Name" id="persom_name" type="text" className="myAPTxtBox validate"
                      value={acc.name}
                      />
                        {/* <label for="first_name">First Name</label> */}
                    </div>
                    <div className="myAPTxtBoxDiv input-field">
                      <input placeholder="Country" id="persom_name" type="text" className="myAPTxtBox validate"
                      value={acc.country}
                      />
                        {/* <label for="first_name">First Name</label> */}
                    </div>
                    <div className="myAPTxtBoxDiv input-field">
                      <input placeholder="Email" id="persom_name" type="email" className="myAP/TxtBox validate"
                      value={acc.email}
                      />
                        {/* <label for="first_name">First Name</label> */}
                    </div>
                    <div className="myAPTxtBoxDiv input-field">
                      <input placeholder="Cell Number" id="persom_name" type="tel" className="myAPTxtBox validate"
                      value={acc.number}
                      />
                        {/* <label for="first_name">First Name</label> */}
                    </div>
                    <div className="myAPTxtBoxDiv input-field">
                      <input  placeholder="Password" id="persom_name" type="password" className="myAPTxtBox validate"
                      value={acc.password}
                      />
                        {/* <label for="first_name">First Name</label> */}
                    </div>





                    <div>
                        <button className="myBtn btn " onClick={this.adder}>Update</button>
                    </div>
                    {/* </form> */}
                    <div className="row">
                    <div className="col s6 m6 l6 xl6 offset-s6"></div>
                    <div className="col s6 m6 l6 xl6 offset-s6">
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

export default connect(mapStateToProps, {addUser, loadData})(Edit_Profile);