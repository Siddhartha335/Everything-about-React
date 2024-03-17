import { createContext,useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems:[],
    handleNewItem:()=> {},
    handleDeleteItem:()=> {}
})

const todoItemsReducer = (todoItems, action) => {
    let newItems = todoItems;
    if (action.type === "NEW_ITEM") {
      newItems = [
        { todo: action.payload.todo, date: action.payload.duedate },
        ...todoItems,
      ];
    } else if (action.type === "DELETE_ITEM") {
      newItems = todoItems.filter((item, index) => {
        return index !== action.payload.id;
      });
    }
    return newItems;
  };

const TodoItemsContextProvider = ({children})=> {
    // const todoItems =['Buy Snacks','Go to College']
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] =        useReducer(todoItemsReducer, []);

  const handleNewItem = (todo, duedate) => {
    // console.log(todo,duedate);
    // setTodoItems((todoItems) => {
    //   return [{ todo: todo, date: duedate }, ...todoItems];
    // });
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todo,
        duedate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteItem = (id) => {
    // setTodoItems(
    //   todoItems.filter((item, index) => {
    //     return index !== id;
    //   })
    // );
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        handleNewItem,
        handleDeleteItem,
      }}
    >
    {children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider;