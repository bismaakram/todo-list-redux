import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = props => {
  return (
    <ListGroup>
      <TransitionGroup className="todo-list">
        {props.todos.map(({ id, todo }) => {
          return (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  style={{ marginRight: "2rem" }}
                  onClick={() => props.onDeleteClick(id)}
                >
                  &times;
                </Button>
                {todo}
              </ListGroupItem>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </ListGroup>
  );
};

export default Todo;
