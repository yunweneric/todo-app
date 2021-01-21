// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Todos  from './Todos';

class App extends Component {
  state ={
    todos:[
      {id:0, content: "Cook food"},
      {id:1, content: "Study on programming hub"},
      {id:2, content:"Finish the lesson on nodejs"}
    ]
  }
  getid = (id)=>{
    let finale = this.state.todos;
    finale.pop(id);
    console.log(finale);
    // const todosfinale = this.state.todos.filter(todo =>{
    //   return todo.id !== id
    // });
    // this.setState({
    //   todos: todosfinale
    // })
  //  console.log(todos.content);


  }
 render(){
    return (
    <div className="App container py">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos = {this.state.todos} deletetodo = {this.getid}/>
    </div>
  );
 }
}

export default App;
