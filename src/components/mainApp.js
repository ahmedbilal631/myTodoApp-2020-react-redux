import React, { Component } from 'react'
import SignUp from './Authentication/signUp';
// import NavBar from './Header/NavBar/navBar';



class MainApp extends Component {
    render() {
        return (
            <div style={{height: 100}} >
                {/* <NavBar /> */}
                <SignUp />
            </div>
        )
    }
}

export default MainApp;