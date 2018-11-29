import React, { Component } from 'react'
// import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''

        }
    }

    // componentDidMount() {
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //         first_name: decoded.first_name,
    //         last_name: decoded.last_name,
    //         email: decoded.email,
    //     })
    // }

    render() {
        return (
            <div className="container">
                {/* <ul className="collection with-header">
                    <li className="collection-header"><h3 className="center">Profile</h3></li>
                    <li className="collection-item">{this.state.first_name + " " + this.state.last_name}</li>
                    <li className="collection-item">{this.state.email}</li>
                </ul> */}
                <h1>Welcome</h1>
        {/* <a href="/admin"><p><i className="material-icons">mode_edit</i>Go to admin</p></a> */}
            </div>
        )
    }
}

export default Profile