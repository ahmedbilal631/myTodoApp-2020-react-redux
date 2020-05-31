import React, { Component } from 'react';

import {connect} from 'react-redux';
import {createProject} from '../../redux/actions/projectAction';

class CreateProject extends Component {
    state={
        title: '',
        content: ''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e);
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        createProject(this.state);        
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h3 className="grey-text text-darken-3">Create Project</h3>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink z-depth-0 lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {createProject})(CreateProject)
