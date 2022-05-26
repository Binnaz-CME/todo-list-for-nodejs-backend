import React, { useEffect, useState } from "react";
import List from "./components/List";
import Input from "./components/Input";
import axios from "axios";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [error, setError] = useState("");

  async function getTodos() {
    try {
      const res = await axios.get("http://localhost:4000/todos");
      setToDos(res.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  async function addToDo(title) {
    try {
      const res = await axios.post("http://localhost:4000/todos", {
        todo: title,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      getTodos();
    }
  }

  async function removeToDo(id) {
    try {
      const res = await axios.delete(`http://localhost:4000/todos/${id}`);
    } catch (error) {
      setError(error.message);
    } finally {
      getTodos();
    }
  }

  return (
    <main className="App">
      <h1 className="title">My To-Do List</h1>
      <Input addToDo={addToDo} />
      {error ? (
        <h1>{error}</h1>
      ) : (
        <List toDos={toDos} removeToDo={removeToDo} getTodos={getTodos} />
      )}
    </main>
  );
}

export default App;
