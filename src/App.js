import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Todo from "./components/Todo";
import { format } from "date-fns";
import { v4 } from "uuid";
import { COMPLETED, UNCOMPLETED } from "./constants";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  addTodo = (content, category) => {
    let todo = {
      id: v4(),
      content,
      category,
      status: UNCOMPLETED,
      startDate: format(new Date(), "dd/MM/yyyy"),
    };
    this.state.todos.push(todo);
    this.setState({
      todos: this.state.todos,
    });
  };

  updateStatus = (id) => {
    let todo = this.state.todos.find((td) => td.id === id);
    if (todo.status === COMPLETED) {
      todo.status = UNCOMPLETED;
      todo.endDate = undefined;
    } else {
      todo.status = COMPLETED;
      todo.endDate = format(new Date(), "dd/MM/yyyy");
    }

    this.setState({
      todos: this.state.todos,
    });
  };

  deleteTodo = (id) => {
    let todoIndex = this.state.todos.findIndex((td) => td.id === id);
    this.state.todos.splice(todoIndex, 1);
    this.setState({
      todos: this.state.todos,
    });
  };
  render() {
    console.log(format(new Date(), "hh:mm:ss dd/MM/yyyy"));
    return (
      <div className="App">
        <Header addTodo={this.addTodo} />
        <Todo
          todos={this.state.todos}
          updateStatus={this.updateStatus}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
