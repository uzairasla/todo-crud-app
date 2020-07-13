import React from "react";

const Task = ({ todo, deleteTodo }) => {
  return (
    <>
      <div key={todo.id} className="mt-3 col-6 mx-auto">
        <p className="lead">
          {todo.task} {"   "}
          <i
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="fa fa-trash"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    </>
  );
};

export default Task;
