import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from  '../actions/index'
import cuid from 'cuid'

const AddTodo = () => {
    const [task,setTask] =useState('')
     const dispatch = useDispatch()

    const handleInputChange =(e)=>{
        setTask(e.target.value)
     }
    const handleSubmit =(e)=>{
        e.preventDefault()
      const rd = dispatch(addTodo({task:task,id:cuid()}))
      console.log(`retun message ${rd.message.task}`);
        e.target.userInput.value=""
        setTask("")
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
                <input type="text" name="userInput" onChange={ (e) =>handleInputChange(e)}/>
                <h4>{task}</h4>
                <button  type="submit"> Add item</button>

            </form>
        </>
    )
}

export default AddTodo
