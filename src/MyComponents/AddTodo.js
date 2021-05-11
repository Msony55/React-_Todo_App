import React from "react";
import {useState} from 'react';

export const AddTodo = ({addTodo}) => {

    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank");
        }
        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }


  return (
    <>
        <div className="container">
        <form onSubmit={submit}>
          <div className="mb-3">
          
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              type="text" value={title} onChange = {(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
              id="title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              type="text" value = {desc} onChange = {(e) => setDesc(e.target.value)}
              id="desc"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          </form>
        </div>
      
      <hr />
    </>
  );
};
