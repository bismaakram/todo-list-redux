import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import TodoList from "./components/TodoList";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavbar />
        <Container>
          <TodoList />
        </Container>
      </Provider>
    );
  }
}

export default App;
