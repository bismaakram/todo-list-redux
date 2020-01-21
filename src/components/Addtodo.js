import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import uuid from "uuid";
import { addTodo } from "../actions/todoActions";
import { connect } from "react-redux";

class Addtodo extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    return this.setState({
      modal: !this.state.modal
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    const newTodo = { id: uuid(), todo: this.state.todo };

    this.props.addTodo(newTodo);
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          onClick={this.toggle}
        >
          Add Todo
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Todo List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="todo">Todo</Label>
                <Input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Add Todo"
                  onChange={this.onChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Todo
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, { addTodo })(Addtodo);
