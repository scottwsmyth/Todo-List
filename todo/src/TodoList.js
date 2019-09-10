import React, { Component } from 'react'
import Form from "./Form"
import "./TodoList.css"
import TodoItem from './TodoItem'

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {Todos:[{id: "", task: ""}]};
        this.addTodoItem = this.addTodoItem.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.editTodoItem = this.editTodoItem.bind(this);
    }

    addTodoItem(item) {
        this.setState({ Todos: [...this.state.Todos, item] });
    }

    deleteTodoItem(id) {
        let newTodos = this.state.Todos.filter(todo => todo.id !== id)
        this.setState({ Todos: newTodos });
    }

    editTodoItem(id, task) {
        let newTodos = this.state.Todos.map(todo => {
            if (todo.id === id) {
                return {...todo, task: task}
            }
            return todo;
        });

        this.setState({Todos: newTodos})
    }
    
    render() {

        let taskArr = this.state.Todos.filter(task => task.id !== "").map(task => (<TodoItem
            key={task.id}
            id={task.id}
            task={task.task}
            deleteTodoItem={this.deleteTodoItem}
            editTodoItem={this.editTodoItem}/>));
    
            return (
                <div className="card">
                    <div className="card-body">
                        <h1>ToDo List</h1>
                        <h5>Tasks</h5>
                        <hr></hr>
                        <ul className="list">
                        {taskArr}
                        </ul>
                        <Form addTodoItem={this.addTodoItem}/>
                    </div>
                </div>
            )
    }
}

export default TodoList;

