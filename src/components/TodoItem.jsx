import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    //Changing the todos List by removing the deleted todo item
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    // Change the status of the todo item to Opposite
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, doneStatus: !todo.doneStatus } : todo
      )
    );
  }

  // If todo status is completed, assign .completed className
  const completedClass = item.doneStatus ? styles.completed : "";

  return (
    // Create a new todo item for each element
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={() => handleClick(item.name)} className={completedClass}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
