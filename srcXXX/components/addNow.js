import React, { Component } from 'react';

import {connect} from 'react-redux';

import {modifyAction} from '../redux/actions/modifyAction';


class AddNow extends Component {
     state={
       text: 'Empty',
       arr : []
     }

     handleChange=(ev)=>{
         console.log('yes changed', ev.target.value);
         
       this.setState({
        text: ev.target.value
       })
     }

     addNow=()=>{
       this.props.modifyAction({text:this.state.text});
     }
  render() {
    const {arr} =this.props
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <button onClick={this.addNow}>Add now</button>
    <div>{arr.map((item, index)=>{
        return <p key={index}>{item.text}</p>
    })}</div>
      </div>
        );
  }
}
const mapStateToProps =(state)=>{
  return{
    arr: state.modify 
  }
}

export default connect(mapStateToProps, {modifyAction})(AddNow);