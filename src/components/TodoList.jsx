import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.listContainer}>
      {/**Loop through each todo item and create an item */}
      {todos.map((item, index) => (
        <TodoItem item={item} key={index} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
