import TodoItems from "./components/TodoItems";
import TodoContainter from "./components/TodoContainter";
import TodoItemsContextProvider from "./store/todo-items-store";
 
function App() {
  return (
      <TodoItemsContextProvider>
        <div className="container">
          <TodoContainter />
          <TodoItems />
        </div>
      </TodoItemsContextProvider>
  );
}

export default App;
