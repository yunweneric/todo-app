import "./App";
// import { Component } from 'react';

const Todos = ({ todos, deletetodo }) => {
  const Todolist = todos.length ? (
      todos.map((data) => {
        return (
          <div className="collection-item" key={data.id}>
            <div className="content">
            <span>{data.content}</span>
            </div>
            <div className="action">
            <span onClick = {()=>deletetodo(data.id)}><button  className="waves-effect waves-light btn-small blue"><i className="material-icons left"></i>Done</button></span>
            </div>
          </div>
        );
      })
    )
    : (
        <p className = 'center'>Hurray! ): No more todo Today!</p>
    );

  return <div className="todos collection ">{Todolist}</div>;
};

export default Todos;
