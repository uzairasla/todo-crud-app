import React, { useState } from "react";
import { Button } from "@material-ui/core";

const TekeInput = () => {
  let value;

  const [todo, setTodo] = useState([
    { task: "let me help you", id: 1 },
    { task: "lets play", id: 2 },
  ]);

  const handleChange = (e) => {
    value = e.target.value;
    setTodo({ ...todo, task: value });
  };

  return (
    <>
      <div className=" d-flex mt-3  col-6 mx-auto">
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Enter Todo"
        />
        <Button className="ml-2 w-50" variant="contained" color="primary">
          Add Todo
        </Button>
      </div>
      <div className="mt-2 col-6 mx-auto">
        <p className="lead"></p>
      </div>
    </>
  );
};
export default TekeInput;
