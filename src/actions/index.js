import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from './types'


export const addTodo = (message) =>({
    type:ADD_TODO,
    message
})

export const deleteTodo = (id) =>({
    type:DELETE_TODO,
    id
})

export const updateTodo = ({message,id}) =>({
    type:UPDATE_TODO,
    message,
    id
})