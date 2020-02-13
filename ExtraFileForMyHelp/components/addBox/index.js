import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTask} from '../redux/actions';

 class AddBox extends Component {
     componentWillReceiveProps(nextProps){
     }
    render() {
        return (
            <div>
                <input type="text" ref='myTaskVal' />
                <button onClick={
                    ()=>this.props.addTask({task:this.refs.myTaskVal.value,id:Math.random(), status: false})
                    }>Add Task</button>                
            </div>
        )
    }
}

export default connect(null, {addTask})(AddBox);
