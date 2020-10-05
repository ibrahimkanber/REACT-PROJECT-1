import React, { Component } from 'react';
import axios from 'axios';

export default class Axios extends Component {
    constructor(props){
        super(props);
        this.state={
            userList:[]
        }
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(result=>{
            this.setState({userList:result.data.data})
        })
    }

    getUser(){
        return(
            this.state.userList.length>0 ?
            this.state.userList.map((user)=>{
               return(
               <h5 key={user.id}>{user.first_name} {user.last_name} ------{user.email} </h5>
               )
            }) : <h3>loading...</h3>
        )
    }
    render() {
        return (
            <div>
              {this.getUser()}  
            </div>
        )
    }
}
