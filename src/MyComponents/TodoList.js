import React from "react";

export const TodoList = ({ todo , onDelete}) => {
  return (
    <>
          <div className="col-4">
            <div className="p-3 border bg-light">
              <div className="card-body">
                <h5 className="card-title" name="idDone">
                  {todo.title}
                </h5>
                <p className="card-text" name="idDone">
                  {todo.desc}
                </p>
                <button className="btn btn-primary">Edit</button> &nbsp;&nbsp;
                <button className="btn btn-danger my-2" onClick = {()=>{onDelete(todo)}}>Delete</button>
              </div>
            </div>
          </div>
    </>
  );
};
