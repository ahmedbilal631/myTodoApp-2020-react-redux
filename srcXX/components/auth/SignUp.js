import React, { Component } from 'react'

class SignUp extends Component {
    state={
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h3 className="grey-text text-darken-3">Sign up</h3>
                    <div className="input-field">
                        <label htmlFor="firstName">First-name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last-name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink z-depth-0 lighten-1">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp