import React, { Component } from 'react';
import './registration.css';

class registration extends Component {
    users = [];
    constructor(props){
        super(props);
        this.state = {
            users:[],
            user:{
                username:"",
                email:"",
                level:""
            }
        }
    }
    render() {
        return (
            <div className="registration">
                <h1>registration</h1>
                {this.state.users}
            </div>
        );
    }
    componentDidMount(){
        console.log("i got here")
        fetch("http://localhost:8080/user/allUsers")
        .then(data => data.json())
        .then(data => {
            for(let user of data){
                user = (
                    <div key= {user.id}>
                        <h5>{user.username}</h5>
                        <h5>{user.email}</h5>
                    </div>
                )
                this.users.push(user) 
            }
            this.setState({
                users: this.users
            });
        })
        .catch(err => console.log(err))
    }
}

export default registration;