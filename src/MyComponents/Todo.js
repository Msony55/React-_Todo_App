import React from "react";
import { TodoList } from "./TodoList";

export const Todo = (props) => {
  let Notodostyle = {
    textAlign : "center",
    color: "red",
    fontSize: "200%"

  }
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3><hr />
      {props.todos.length === 0 ? (
        <div>
        <p style = {Notodostyle}>No todos to Display</p>
        </div>
      ) : (
        <div className="container">
          <div className="row g-4 my-3">
            {props.todos.map((todo) => {
              console.log(todo.sno)
              return (
                <>
                  <TodoList todo={todo} key ={todo.sno} onDelete={props.onDelete} />
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
