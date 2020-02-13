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
                 {tasks.map((todo, i)=>(
                         <div key={todo.id} className="table-responsive">
                             <table className="table">
                            <tbody>
                             {editingTask.id === todo.id?
                        <tr><td><input type="text" value={editingTask.task} onChange={this.handleChange}/>
                        <button onClick={this.updateTask}>update</button>
                        </td>
                        </tr>
                        :
                                     <tr>
                                     <td colSpan={4}>
                                     {/* <div className="pretty p-icon p-curve p-has-indeterminate"> */}
                                        <input type="checkbox" style={{width:'2%', color:'white'}} />
                                      {/* <div className="state text-white"> */}
                                        {/* <i className="icon mdi mdi-check"></i> */}
                                     <label>{todo.completed?<strike>{todo.text}</strike>: todo.text}</label>
                                     {/* </div> */}
                                    {/* </div> */}
                                        {/* <label>Friends</label> */}
                                     </td>
                                     <td >
                                         <div>
                                     <button onClick={()=>this.props.delTask({id: todo.id})}>X</button>
                                      <button onClick={()=>{this.editBox(todo.id, todo.text)}}>edit</button>
                                     <button onClick={() =>this.props.completedTask({id: todo.id})}>Completed</button>
                                         </div>
                                     </td>
                                     </tr>                                
                                }
                                </tbody>
                                </table>
                                </div>
                     ))}
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