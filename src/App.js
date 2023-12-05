import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [selectTodo, setSelectedTodo] = useState({ id: null, text: '' })


  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column"> Folders</div>
        <div className="app-right-column">
          <TodoForm selectTodo={selectTodo} setSelectedTodo={setSelectedTodo} />
          <TodoList setSelectedTodo={setSelectedTodo} />
        </div>
      </main>
    </div>
  );
}

export default App;
