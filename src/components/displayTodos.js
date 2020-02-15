import React, { Component } from 'react'

//here the redux will be imported
import {connect} from 'react-redux';
import {delTask, editTask, compTask} from '../redux/actions';

class DisplayTodos extends Component {
    constructor(){
        super();
        this.state ={
            tasks : [],
            editingTask: {
                id:"",
                task:""
            },
            status: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.tasks,"next props")
        this.setState({
            tasks : nextProps.tasks
        })    
    }

    handleChange=event=>{
        let task = this.state.editingTask;
        task.task = event.target.value;
        this.setState({
            editingTask: task
        })
    }

    ///to update a task process is here...........................
    //first to fix a task that is needed to be edit
    editBox=(id, task)=>{
        this.setState({editingTask :{id, task}});
    }
    //now update button function
    updateTask=()=>{
        this.props.editTask({id: this.state.editingTask.id, text: this.state.editingTask.task});
        this.setState({editingTask:{
            id: '',
            task: ''
        }})
        }

            //............................


    render() {
        const {tasks, editingTask} = this.state;
        return (
            <div>
                {/*  <div class="pretty p-icon p-rotate">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>Friends</label>
        </div>
    </div> */}

<ul className="collection with-header">
{tasks.map((todo, i)=>(
    <li key={todo.id} className="collection-item">

                             <div className="container">
                             {editingTask.id === todo.id?
                            <div className="row">
                            <div className="input-field col s9 l9 m9">
                            <input id="txtEditTodo"
                                 style={{color: 'darkcyan'}}
                                 placeholder="Enter your task here"
                                 ref="myTaskVal"
                                 autoFocus
                                 value={editingTask.task}
                                onChange={this.handleChange}
                                type="text" className="validate" />
                            <label for="txtEditTodo" style={{color: 'darkcyan', fontSize:'120%'}}>Update Todo!</label>
                            </div>
                            <div className="col s3 m3 l3">
                           <br/>
                            <button className="btn waves-effect waves-light"
                            onClick={this.updateTask} style={{fontWeight:'bold'} }
                            type="button" name="action">Update!</button>
                            </div>
                            </div>
                        :
                        <div className="row" style={{color:"darkcyan", fontSize:"120%",fontWeight:"500", textAlign:"justify"}}>
                                {todo.completed?<strike style={{color:"yellow"}}>{todo.text}</strike>: todo.text}
                                <i className="secondary-content">
                                     <button className="btn" style={{fontWeight:'bold'}} onClick={()=>this.props.delTask({id: todo.id})}>X</button>..
                                      <button className="btn" style={{fontWeight:'bold'}} onClick={()=>{this.editBox(todo.id, todo.text)}}>Edit</button>..
                                      <button className="btn" style={{fontWeight:'bold'}} onClick={() =>this.props.compTask({id: todo.id})}>Completed!</button></i>
                                </div>
                                }
                                </div>
                        </li>

))}
</ul>

{
                                //      <td>
                                //      <div className="pretty p-icon p-curve  p-default">
                                //         <input type="radio" name="radio66"  onChange={() =>this.props.compTask({id: todo.id})} />
                                //       <div className="state p-warning">
                                //         <i className="icon mdi mdi-check"></i>
                                //      <label style={{color:'#fefbfb', fontSize:'120%'}}></label>
                                //      </div>
                                //     </div>
                                //      </td>
                                //      <td >
                                //          <div>
                                //      <button className="btn btn-danger" type="button" onClick={()=>this.props.delTask({id: todo.id})}>X</button>--
                                //       <button className="btn btn-primary" type="button" onClick={()=>{this.editBox(todo.id, todo.text)}}>edit</button>
                                //          </div>
                                //      </td>
                                //      </tr>                                
                                // }
                                // </tbody>
                                // </table>
                                // </div>
                   
                            }





{/*
                 {tasks.map((todo, i)=>(
                         <div key={todo.id} className="table-responsive">
                         <table className="table">
                            <tbody>
                            {editingTask.id === todo.id?
                                <tr><td>
                           <div className="input-group mb-3">
                         <input type="text" className="form-control"
                          placeholder="Enter your task here"
                            //  ref="myTaskVal"
                          value={editingTask.task}
                         onChange={this.handleChange}
                         />
                        <div className="input-group-append">
                        <button className="btn btn-primary" type="button"
                        onClick={this.updateTask}
                        >Update!</button>
                        </div>
                        </div>
                            {/* <input type="text" value={editingTask.task} onChange={this.handleChange}/>
                        <button onClick={this.updateTask}>update</button> */}
{/*                        </td>
                        </tr>
                        :
                                     <tr>
                                     <td>
                                     <div className="pretty p-icon p-curve  p-default">
                                        <input type="radio" name="radio66"  onChange={() =>this.props.compTask({id: todo.id})} />
                                      <div className="state p-warning">
                                        <i className="icon mdi mdi-check"></i>
                                     <label style={{color:'#fefbfb', fontSize:'120%'}}>{todo.completed?<strike>{todo.text}</strike>: todo.text}</label>
                                     </div>
                                    </div>
                                        {/* <label>Friends</label> */}
   {/*                                  </td>
                                     <td >
                                         <div>
                                     <button className="btn btn-danger" type="button" onClick={()=>this.props.delTask({id: todo.id})}>X</button>--
                                      <button className="btn btn-primary" type="button" onClick={()=>{this.editBox(todo.id, todo.text)}}>edit</button>
                                     {/* <button onClick={() =>this.props.compTask({id: todo.id})}>Completed</button> */}
 {/*                                        </div>
                                     </td>
                                     </tr>                                
                                }
                                </tbody>
                                </table>
                                </div>
                     ))}
                            */}
            </div>
        )
    }
}
//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        tasks: state.todoManipulations
    }
};

export default connect(mapStateToProps,{editTask, delTask, compTask})(DisplayTodos);