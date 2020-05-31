import React, { Component } from 'react';
import './firebase/config';
import * as firebase from 'firebase';

class App extends Component {

  state ={
    name: '',
    class: '',
    data: []//to get data from db
  }



  //here the function to retrieve data from database
  componentDidMount(){
    let arr = [];
    firebase.database().ref('users').once('value').then(snapShot=>{
      snapShot.forEach(item=>{
        // console.log(item.key, item.val());
        this.state.data.push({
          id: item.key, ...item.val()
        })
      })
    })
    // this.setState({
    //   data: arr
    // })
    // console.log(arr);    
  }

  //.................................................................

  handleSubmit = e=>{
    e.preventDefault();

    //here is the function to push the data in real time firebase database
    firebase.database().ref('users').push({
      name: this.state.name,
      class: this.state.class
    })

  }

  //...............................................................

//to remove some data from database
removeMe=(getId)=>{
firebase.database().ref('users').child(getId).remove();
}

//.................................................................


  render() {
    let {data} = this.state.data
    console.log(this.state.data);
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <input type="text" onChange={e=>this.setState({name: e.target.value})} placeholder="name" />
          <input type="text" onChange={e=>this.setState({class: e.target.value})} placeholder="class" />
          <input type="submit" value="Submit"/>
        </form>
        <hr/>
        <ul>
          {this.state.data.map((item)=>{
            return (
              <li key={item.id}>{item.name}..... <button onClick={()=>this.removeMe(item.id)}>Del</button></li>
            )
          }
          )}
        </ul>
      </div>
        );
  }
}

export default App;