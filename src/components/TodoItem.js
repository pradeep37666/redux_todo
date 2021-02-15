import React, { useState,useRef } from "react";
import "./todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo,updateTodo } from "../actions";

const TodoItem = (task) => {
  const [isUpdate, setIsupdate] = useState(false);
  const ref = useRef(null)
  const dispatch = useDispatch();
  const editSubmmit = (e) =>{
      e.preventDefault()
       dispatch(updateTodo({message:ref.current.value,id:task.id}))
       setIsupdate(false)
       ref.current=null

  }

  const renderForm = () => {
    return (
      <form onSubmit={editSubmmit}>
        <input ref={ref} type="text" defaultValue={task.task} />
        <button type="submit">change</button>
      </form>
    );
  };



  return (
      
     <>
     {isUpdate?renderForm():""}

      
       <div className="todoitem">
        <h2>{task.task}</h2>
        <div className="edit">
          <button className="mybutton" onClick={()=>setIsupdate(true)}>Edit</button>
          <button
            className="mybutton"
            onClick={() => dispatch(deleteTodo(task.id))}>
            Delete
          </button>
        </div>
      </div>
      
      
      </>
  )
};

export default TodoItem;
