import React, { Component } from 'react'
import './style/myStyle.css';

import AddTodoBox from './addTodo';
import DisplayTodos from './displayTodos';



class MainApp extends Component {
    render() {
        return (
            <div className="myMainBody">
                <div className="myNav"><p className="myNavLogoText">MY-TODO</p></div>
                <hr/>
                <div className="myTodoContainer container">TodoContainer
                <AddTodoBox />
                <DisplayTodos />
                </div>
            </div>
        )
    }
}
export default MainApp;
