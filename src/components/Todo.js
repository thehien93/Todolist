import React from "react";
import TodoItem from "./Todo-Item";
const Todo = (props) => {
  console.log(props.todos);
  return (
    <main>
      <ul id="todo">
        {props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              content={todo.content}
              category={todo.category}
              status={todo.status}
              startDate={todo.startDate}
              endDate={todo.endDate}
              updateStatus={props.updateStatus}
              deleteTodo={props.deleteTodo}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Todo;
