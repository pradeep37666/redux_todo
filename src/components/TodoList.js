import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
     const state = useSelector(state => state.todos.data)
     console.log("my state",state);
    
    return (
        
         <>
          {state.map(c=><TodoItem task={c.task} id={c.id} key={c.id} /> )}
         </>
        
    )
}

export default TodoList
