import React, { Component } from "react";
import Todo from "./Todo";
import uuid from "uuid";
import { Container } from "reactstrap";
import Addtodo from "./Addtodo";
import { connect } from "react-redux";
import { getTodos, deleteTodo } from "../actions/todoActions";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  onDeleteClick = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const { todos } = this.props.todo;
    return (
      <div>
        <Addtodo></Addtodo>
        <Todo todos={todos} onDeleteClick={this.onDeleteClick}></Todo>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoList);
