import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column"> Folders</div>
        <div className="app-right-column">
          <TodoForm />
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
