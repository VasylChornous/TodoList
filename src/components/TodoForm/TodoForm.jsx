import { useEffect, useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../redux/slices/todosSlice";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ selectTodo, setSelectedTodo }) {
  
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (selectTodo.id) {
      dispatch(editTodo({ id: selectTodo.id, text: text }));
      setText('')
      setSelectedTodo({ id: null, text: '' })
    } else {
      const todo = {

        text,
        id: uuidv4(),
        isCompleted: false,
      };
      if (text.trim()) {
        dispatch(addTodo(todo));
      }
      setText("");
    }
  };

  useEffect(() => {
    setText(selectTodo.text)
  }, [selectTodo.id])


  const textButton = selectTodo.id ? 'Edit' : "Submit"

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
          {textButton}
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
