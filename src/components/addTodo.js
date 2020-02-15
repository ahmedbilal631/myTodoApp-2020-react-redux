import React, { Component } from 'react'

//here we will import redux data
import {connect} from 'react-redux';
import {addTask} from '../redux/actions';

class AddTodo extends Component {
    // constructor(){
    //     super();
    //     this.state ={
    //         text: ''
    //     }
    // }

    state={
        text: ""
    }

    handleChange=event=>{
        let textX = this.state;
        textX.text = event.target.value
        // console.log(textX);
        this.setState({
            text: textX.text
        })
    }

    adder=()=>{
        this.props.addTask({text: this.state.text});
        this.setState({
            text: ''
        });
    }
    render() {
        const {text} = this.state;
        return (
            <div className="container">
                <br/>
                <div class="row">
                 <div class="input-field col s9 l9 m9">
                 <input id="txtAddTodo"
                                 style={{color: '#fefbfb'}}
                                   placeholder="Enter your task here"
                                   ref="myTaskVal"
                                   value={text}
                                   onChange={this.handleChange}
                 type="text" class="validate" />
                 <label for="txtAddTodo" style={{color: '#fefbfb', fontSize:'120%'}}>New Todo</label>
                 </div>
                <div className="col s3 m3 l3">
                    <br/>
                 <button class="btn waves-effect waves-light" onClick={this.adder}
                 style={{fontWeight:'bold'}}
                 type="button" name="action">Add now!</button>
                 </div>
                 </div>
                {/* <div className="text-white">Add a new Todo!</div>
                <div className="input-group mb-3">
                 <input type="text" className="form-control"
                  placeholder="Enter your task here"
                  ref="myTaskVal"
                  value={text}
                  onChange={this.handleChange}
                  /> */}
                {/* <div className="input-group-append">
                <button className="btn btn-primary" type="button"
                     onClick={this.adder}
                >Add Task!</button>
                </div>
                </div> */}
            </div>
        )
    }
}

export default connect(null, {addTask})(AddTodo);