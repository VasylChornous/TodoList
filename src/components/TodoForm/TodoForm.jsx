import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todosSlice";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const todo = {
      text,
      id: uuidv4(),
      isCompleted: false,
    };
    if (text) {
      dispatch(addTodo(todo));
    }
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="submit"
          title="Submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
