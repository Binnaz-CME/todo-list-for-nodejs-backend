import React from "react";
import ToDo from "./ToDo";
import styles from "./styles/todo.module.css";

function List({ isDone, removeToDo, toDos, finishToDo, getTodos }) {
  
  return (
    <section>
      {toDos.map((toDo) => {
        return (
          <ToDo
            className={styles.toDo}
            key={toDo.id}
            data={toDo}
            isDone={isDone}
            removeToDo={removeToDo}
            finishToDo={finishToDo}
            getTodos={getTodos}
          />
        );
      })}
    </section>
  );
}

export default List;
