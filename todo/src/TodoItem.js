import React, { Component } from 'react'
import "./TodoItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'



export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.updateTask = this.updateTask.bind(this);
        this.handleEditInput = this.handleEditInput.bind(this);
        this.handleEditItem = this.handleEditItem.bind(this);
        this.state = { editState: false, 
            task: "" };
            
    }
    
    handleDeleteItem() {
        this.props.deleteTodoItem(this.props.id);
    }

    updateTask(evt) {
        this.setState({...this.state, task: evt.target.value})
    }

    handleEditItem() {
        this.setState({ editState: true });
    }

    handleEditInput() {
        let id = this.props.id;
        let task = this.state.task;
        this.props.editTodoItem(id, task);
        this.setState({ editState: false });
    }

    render() {

        if (this.state.editState === true) {
            return (
                <div>
                    <form action="">
                        <div className="form-group">
                            <input
                                style={{ width: "50%", display:"inline-block"}}
                                type="text"
                                className="form-control"
                                onChange={this.updateTask}
                                name="editTask"
                                id="editTask"
                                placeholder="New task..." />
                            <button onClick={this.handleEditInput} style={{display: "inline-block"}} type="button" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>)
            
        } else {
            return (
                <li style={{ display: "block" }}>
                    <div className="listItem" >{this.props.task}
                        <div className="flexToEnd">
                        <FontAwesomeIcon
                            onClick={this.handleEditItem}
                            icon={faPen}
                            className="pen" />
                        <FontAwesomeIcon 
                            onClick={() => this.handleDeleteItem()}
                            icon={faTrash} />
                        </div>
                    </div>
                </li>
            )
        }
    }
}
