import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";


export default class FormDemo2 extends Component {
    state = {
        email: "",
        password: "",
        city: "",
        desc: ""

    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success("Changes added to database")

    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">E-Mail Adress</Label>
                        <Input type="email" id="email" name="email" placeholder="Enter your e-mail.." onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                       
                        <Input type="select" id="city" name="city"  onChange={this.handleChange}>
                            <option>Weimar</option>
                            <option>Halle</option>
                            <option>Leipzig</option>
                            <option>Hannover</option>
                            <option>Erfurt</option>
                        </Input>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" id="description" name="desc" placeholder="Enter description" onChange={this.handleChange} />
                    </FormGroup>

                    <Button type="submit">Save</Button>
                    
                </Form>
            </div>
        )
    }
}
