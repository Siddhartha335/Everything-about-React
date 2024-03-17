import React, { useRef,useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store';

const TodoContainter = () => {
  const todoRef = useRef("");
  const dateRef = useRef("");
  const {handleNewItem} = useContext(TodoItemsContext)

  const showOnClick = (event)=> {
    event.preventDefault();
    let todo = todoRef.current.value;
    let date = dateRef.current.value;
    if((todo.length===0) || (date.length===0)) {
      alert("Please fill in the input!!")
    }
    else {
      handleNewItem(todo,date);
      todoRef.current.value="";
      dateRef.current.value="";
    }
    }

  return (
    <>
        <h1 className="d-flex justify-content-center my-4">Todo App</h1>
        <form onSubmit={showOnClick}>
          <div className="row">
            <div className="col-4">
            <input type="text" className="form-control" placeholder="Enter todo here" ref={todoRef} />
            </div>
            <div className="col-4">
            <input type="date" className="form-control" ref={dateRef}/>
            </div>
            <div className="col-3">
              <button className="btn btn-primary float-end" type='submit'>Add</button>
            </div>
          </div>
        </form>
    </>
  )
}

export default TodoContainter