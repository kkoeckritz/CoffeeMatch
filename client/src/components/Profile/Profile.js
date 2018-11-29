import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''

        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
        })
    }

    render(){
        return (
            <div className="container">
                <ul class="collection with-header">
        <li class="collection-header"><h3 className="center">Profile</h3></li>
        <li class="collection-item">{this.state.first_name + " " + this.state.last_name}</li>
        <li class="collection-item">{this.state.email}</li>
      </ul>
            

            </div>
        )
    }
}

export default Profile