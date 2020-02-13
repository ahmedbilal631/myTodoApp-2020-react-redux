import React, { Component } from 'react'

//here we will import redux data
import {connect} from 'react-redux';
import {addTask} from '../redux/actions';

class AddTodo extends Component {
    state={

    }
    render() {
        return (
            <div>
                <div>Add a new Todo!</div>
                <div className="input-group mb-3">
                 <input type="text" className="form-control"
                  placeholder="Enter your task here"
                  ref="myTaskVal"
                  />
                <div className="input-group-append">
                <button className="btn btn-primary" type="button"
                     onClick={
                        ()=>this.props.addTask({text:this.refs.myTaskVal.value})
                        }
                >Add Task!</button>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {addTask})(AddTodo);