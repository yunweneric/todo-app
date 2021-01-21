// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Todos  from './Todos';
import Form from './form'

class App extends Component {
  state ={
    todos:[
      {id:1, content: "Cook food"},
      {id:2, content: "Study on programming hub"},
      {id:3, content:"Finish the lesson on nodejs"}
    ]
  }
  getid = (id)=>{
    const todosfinale = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos: todosfinale
    })
  }
  addtodo = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
    // console.log('todo added');
  }
  Senddata =()=>{
    let todos = [...this.state.todos
    ]
    // console.log(todos);
  }
 render(){
    return (
    <div className="App container py">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos = {this.state.todos} deletetodo = {this.getid}/>
      <Form addtodo = {this.addtodo} Senddata = {this.Senddata}/>
    </div>
  );
 }
}

export default App;
