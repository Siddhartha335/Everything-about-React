import React,{useContext} from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import {TodoItemsContext} from "../store/todo-items-store"

const TodoItem = ({item,date,id}) => {
    const {handleDeleteItem} = useContext(TodoItemsContext)
  return (
    <div className="row mt-5">
        <div className="col-4 text-center">
            <h2>{item}</h2>
        </div>
        <div className="col-4 text-center">
            <h2>{date}</h2>
        </div>
        <div className="col-3 text-center">
            <button className="btn btn-danger float-end" onClick={()=> handleDeleteItem(id)}>Delete <AiOutlineDelete /></button>
        </div>
     </div>
  )
}

export default TodoItem