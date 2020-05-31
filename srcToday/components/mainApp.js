import React, { Component } from 'react'
import './style/myStyle.css';

import AddTodoBox from './addTodo';
import DisplayTodos from './displayTodos';

// import {connect} from 'react-redux';
// import {loadData} from '../redux/actions';

class MainApp extends Component {
    // componentDidMount(){
    //     this.props.loadData();
    // }
    render() {
        return (
            <div className="myMainBody">
                <div className="myNav"><p className="myNavLogoText">MY-TODO</p></div>
                <hr/>
                <div className="myTodoContainer container">
                <AddTodoBox />
                <hr/>
                <hr/>
                <DisplayTodos />
                </div>
                <div>
                    <hr/>
                    <p style={{textAlign:"center"}}>&copy;mySoftRack-2020</p>
                </div>
            </div>
        )
    }
}
// export default connect(null, {loadData})(MainApp);
export default MainApp
