import React, { useState } from "react";
import styles from "./styles/input.module.css";

function Input({ addToDo }) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setInputText(value);
  }

  return (
    <section>
      <input
        className={styles.input}
        type="text"
        placeholder="Write your to-do"
        onChange={handleChange}
        value={inputText}
      />
      <button className={styles.button} onClick={() => addToDo(inputText)}>
        Add To-Do
      </button>
    </section>
  );
}

export default Input;
