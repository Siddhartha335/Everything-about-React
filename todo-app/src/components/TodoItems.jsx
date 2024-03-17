import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/todo-items-store'

const TodoItems = () => {
  const {todoItems} = useContext (TodoItemsContext)
  return (
    <>
        {todoItems.map((item,index)=> (
         <TodoItem item={item.todo} date={item.date} key={index} id={index}/>
    ))}
    </>
  )
}

export default TodoItems