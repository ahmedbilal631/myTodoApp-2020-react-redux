import React, { Component } from 'react';
import {connect} from 'react-redux';

import {deleteTask, editTask, completedTask} from '../redux/actions';

class TaskList extends Component {
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


    handleChange = ev => {
        let task = this.state.editingTask;
        task.task = ev.target.value;
       this.setState({
            editingTask : task
       })
    }


    render() {
        const { editingTask,tasks, status } = this.state;
        const { id,task } = editingTask;
        return (
            
            <div>
                <p>This is the task list...</p> 
                    {/* {tasks.map((todo,i) => (
                    <div key={todo.id}>{todo.status?<strike>{todo.task}</strike>:<p>{todo.task}</p>}<button onClick={()=>this.props.deleteTask({taskId: todo.id})}>X</button>
                        <button onClick={() =>this.setState({editingTask : tasks[i]})}>edit</button>
                        <button onClick={() =>this.props.completedTask({taskId: todo.id})}>Completed</button>
                        {editingTask.id === todo.id  ? <span><input type="text" value={editingTask.task} onChange={this.handleChange}/>
                        <button onClick={()=>this.props.editTask({taskId: editingTask.id, payload: editingTask.task})}>update</button></span> :""} </div>
                        ))
                    }  */}
                    
                     {tasks.map((todo, i)=>(
                         <div key={todo.id}>{editingTask.id === todo.id?
                        <span><input type="text" value={editingTask.task} onChange={this.handleChange}/>
                        <button onClick={()=>this.props.editTask({taskId: editingTask.id, payload: editingTask.task}),
                         ()=>{this.setState({
                                        editingTask: {
                                            id:"",
                                            task:""
                                        }
                        })}
                        }>update</button>
                        </span>
                        :
                         <span><span>{todo.status?<strike>{todo.task}</strike>: todo.task}</span><span>
                             <button onClick={()=>this.props.deleteTask({taskId: todo.id})}>X</button>
                             <button onClick={() =>this.setState({editingTask : tasks[i]})}>edit</button>
                         <button onClick={() =>this.props.completedTask({taskId: todo.id})}>Completed</button>
                         </span></span>
                        }</div>
                     ))}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        tasks: state.taskReducer
    }
};

export default connect(mapStateToProps,{deleteTask, editTask, completedTask})(TaskList);