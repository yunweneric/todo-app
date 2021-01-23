// import logo from './logo.svg';
import "./App.css";
import { Component } from "react";
import Todos from "./Todos";
import Form from "./form";
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Cook food" },
      { id: 2, content: "Study on programming hub" },
      { id: 3, content: "Finish the lesson on nodejs" },
    ],
  };
  getid = (id) => {
    const todosfinale = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todosfinale,
    });
  };
  Addtodo = (newtodo) => {
    newtodo.id = Math.random() * 100;
    let finaletodo = [...this.state.todos, newtodo];
    this.setState({
      todos: finaletodo,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path ='/' component={Home}/>
          <Route path ='/about' component={About}/>
          <Route path ='/contact' component={Contact}/>
          <div className="App container py">
            <h1 className="center blue-text">Todos</h1>
            <Todos todos={this.state.todos} deletetodo={this.getid} />
            <Form Addtodo={this.Addtodo} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
