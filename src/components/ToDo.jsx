import React, { useState } from "react";
import styles from "./styles/todo.module.css";
import axios from "axios";

function ToDo({ data, removeToDo, getTodos, finishToDo }) {
  const [isDone, setIsDone] = useState();
  const [error, setError] = useState("");

  function handleRemove() {
    const id = data.id;
    removeToDo(id);
  }

  function handleFinished() {
    const id = data.id;
    finishToDo(id);
  }

  async function finishToDo(id) {
    try {
      const res = await axios.patch(`http://localhost:4000/todos/${id}`, {
        isDone: isDone ? false : true,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsDone(!isDone);
      getTodos();
    }
  }

  return error ? (
    <h1>{error.message}</h1>
  ) : (
    <div className={styles.todo}>
      <p style={{ textDecoration: data.isDone ? "line-through" : "none" }}>
        {data.todo}
      </p>
      <button className={styles.button} onClick={handleFinished}>
        {data.isDone ? 'Not done' : 'Done'}
      </button>
      <button className={styles.button} onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default ToDo;
