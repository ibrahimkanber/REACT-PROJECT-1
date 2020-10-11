import React, { Component } from 'react'


export default class FormDemo1 extends Component {

    state = {
        username: "",
        city: ""
    }
    changeHandler = (event) => {
        event.preventDefault();
        // this.setState({ username: event.target.value });
        let name = event.target.name;
        let value = event.target.value;
        console.log(name,value)
        this.setState({[name]: value })


    }

    submitHandler = (event) => {
        console.log("hello");
        event.preventDefault()

    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <div>
                        <label for="user">User Name</label>
                        <div>
                            <input name="username"  type="text" id="user" onChange={this.changeHandler}></input>
                            <h3>{this.state.username}</h3>
                        </div>
                        <label for="city">City</label>
                        <div>
                            <input name="city" type="text" id="city" onChange={this.changeHandler}></input>
                            <h3>{this.state.city}</h3>
                        </div>


                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>


                </form>
            </div>
        )
    }
}
