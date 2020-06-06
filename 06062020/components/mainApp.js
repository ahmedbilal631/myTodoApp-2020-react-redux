import React, { Component } from 'react'


import {connect} from 'react-redux';
import {addMe} from '../redux/actions/actions';

class MainApp extends Component {
 constructor(){
     super();
    //  alert('main a pp');
    this.state = {
        name : 'name',
        names: ['empty']
    }
    
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
    // console.log(textX);
    this.setState({
        name: textX.name
    })
}
 
    addMe=()=>{
        console.log('yes add me button pressed');
        console.log("state", this.state);
        this.props.addMe({name: this.state.name});
        this.setState({
            // names: [...this.state.names, this.state.name],
            name: 'name'
        });
    }
    CheckState=()=>{
        console.log("CurrentState", this.state);
        
    }



    render() {
        return (
            <div>
                Hello from main app.
                <input type='text' value={this.state.name}
                onChange={this.handleChange} />
                <button onClick={this.addMe}>Add</button>
                <button onClick={this.CheckState}>CheckState</button>
                <div>
                    {this.state.names.map((item, id)=>(
                        <li key={id}>{item}</li>
                    ))}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        names: state.AddmeReducer
    }
};

export default connect(mapStateToProps,{addMe})(MainApp);