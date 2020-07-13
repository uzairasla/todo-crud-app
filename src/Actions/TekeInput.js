import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
const TekeInput = () => {
  const [todo, setTodo] = useState([
    { task: "Hello, Enter a todo", id: uuidv4() },
    { task: "Apples are delicious", id: uuidv4() },
  ]);
  const [input, setInput] = useState("");

  const deleteItem = (id) => {
    setTodo(
      todo.filter((todoitem) => {
        return todoitem.id !== id;
      })
    );
  };
  return (
    <>
      <div className=" d-flex mt-3  col-6 mx-auto">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Enter Todo"
        />
        <Button
          disabled={!input ? true : false}
          className="ml-3 w-50"
          variant="contained"
          color="primary"
          onClick={() => {
            setTodo([...todo, { task: input, id: uuidv4() }]);
          }}
        >
          Add Todo
        </Button>
      </div>

      {todo.map((todo) => {
        return <Task todo={todo} deleteTodo={deleteItem} />;
      })}
    </>
  );
};
export default TekeInput;
