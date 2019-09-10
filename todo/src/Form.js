import React, { Component } from 'react'
import "./Form.css"
import uuid from "uuid/v4"

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        console.log(evt.target.value);
        this.setState({task: evt.target.value});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        let item = { ...this.state, id: uuid() };
        this.props.addTodoItem(item);
    }

    render() {
        return (
            <form className="Form form-group" onSubmit={this.handleSubmit}>
                
                <label
                    id="taskLabel"
                    htmlFor="newTask">New Todo</label>
        
                <hr></hr>

                <input
                    type="text"
                    onChange={this.handleChange}
                    className="form-control"
                    name="newTask"
                    id="newTask"
                    placeholder="Task..."
                    />
                <button
                    type="submit"
                    id="submit"
                    className="btn btn-primary">Add</button>
            </form>
        )
    }
}
