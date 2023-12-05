import { useDispatch, useSelector, folderId } from "react-redux";
import {
  deleteTodo,
  selectTodo,
  toggleCompleted,
} from "../../redux/slices/todosSlice";
import { FaCheck } from "react-icons/fa";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import styles from "./TodoList.module.css";

const TodoList = ({ setSelectedTodo }) => {
  const todos = useSelector(selectTodo);

  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div
          className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ""
            }`}
          key={todo.id}
        >
          <RiTodoFill className={styles.todoIcon} />
          <div className={styles.todoText}>{todo.text}</div>

          <RiDeleteBin2Line
            className={styles.deleteIcon}
            onClick={() => handleDeleteTodo(todo.id)}
          />
          <FaCheck
            className={styles.checkIcon}
            onClick={() => handleToggleCompleted(todo.id)}
          />
          <div
            className={styles.checkIcon}
            onClick={() => setSelectedTodo({ id: todo.id, text: todo.text })}
          >
            Edit
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
