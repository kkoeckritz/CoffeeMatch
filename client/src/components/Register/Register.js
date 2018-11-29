import React, { Component } from 'react';
import './Register.css';
import { register } from '../UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        register(user).then(res => {
                this.props.history.push('/login')
            
        })
    }

  render() {
    return (
        <div className="container style-form">
             <form noValidate onSubmit = {this.onSubmit}>
             <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" 
                    className="form-control" 
                    name="first_name" 
                    placeholder="Enter First Name" 
                    value={this.state.first_name} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" 
                    className="form-control" 
                    name="last_name" 
                    placeholder="Enter Last Name" 
                    value={this.state.last_name} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Enter Email" 
                    value={this.state.email} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="Enter Password" 
                    value={this.state.password} 
                    onChange={this.onChange}/>
                </div>
                <br/>   
                <button type="submit" 
                className="btn waves-effect waves-light red darken-2 btn-lg btn-block">Register</button>
            </form>


            {/* <p>Need an account? <a href="/signup">Sign Up</a></p>
            <p>Facebook Login? <a href="/login/facebook">Connect with Facebook</a></p>
            <p>Or go <a href="/">home</a>.</p> */}
        </div>
   
 
    )
  }
}

export default Register;