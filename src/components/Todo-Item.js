import React from "react";
import { UNCOMPLETED, COMPLETED } from "../constants";
const TodoItem = (props) => {
  return (
    <div>
      <li className="todo-item">
        <input
          onClick={() => {
            props.updateStatus(props.id);
          }}
          type="checkbox"
          name="status"
          id="status"
        />
        <p className="content">{props.content} </p>
        <div className="body-todo">
          <div className="info">
            <div className="tags">
              <span className="tag-item">{props.category} </span>
              <span
                style={{
                  backgroundColor:
                    props.status === UNCOMPLETED ? "red" : "#198754",
                }}
                className="tag-item"
              >
                {props.status}{" "}
              </span>
            </div>
            <div className="time">
              <span className="start">{props.startDate} </span>
              <span className="end">{props.endDate} </span>
            </div>
          </div>
          <div className="action">
            <img
              onClick={() => {
                props.deleteTodo(props.id);
              }}
              className="delete"
              alt="delete"
              src="https://img.icons8.com/fluency/48/000000/delete-forever.png"
            />
            <img
              className="edit"
              alt="edit"
              src="https://img.icons8.com/fluency/48/000000/edit-property--v1.png"
            />
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
