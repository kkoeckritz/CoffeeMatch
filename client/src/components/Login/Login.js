import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
        <div className="container style-form">
             <form action="/login" method="post">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <br/>   
                <button type="submit" className="btn waves-effect waves-light red darken-2 btn-lg btn-block">Login</button>
            </form>


            {/* <p>Need an account? <a href="/signup">Sign Up</a></p>
            <p>Facebook Login? <a href="/login/facebook">Connect with Facebook</a></p>
            <p>Or go <a href="/">home</a>.</p> */}
        </div>
   
 
    )
  }
}

export default Login;