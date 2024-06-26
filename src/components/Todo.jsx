import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]); // State containing All todo items

  return (
    <div>
      {/** Todo input component */}
      <Form todos={todos} setTodos={setTodos} />

      {/** Todo List component */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
