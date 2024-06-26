import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // Create State variables
  const [todo, setTodo] = useState({ name: "", doneStatus: false });

  function handleSubmit(e) {
    // Prevent default form submission
    e.preventDefault();

    // Add new todo to the todos array
    setTodos([...todos, todo]);

    setTodo({ name: "", doneStatus: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, doneStatus: false })}
          placeholder="Enter todo Item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
