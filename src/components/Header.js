import React from "react";
import { listCategories } from "../data";

const Header = (props) => {
  return (
    <header>
      <h1>TodoList</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let content = event.target.todo.value;
          let category = event.target.category.value;
          props.addTodo(content, category);
        }}
      >
        <input name="todo" type="text" />
        <div className="group">
          <select name="category">
            {listCategories.map((category) => {
              return (
                <option key={category.id} value={category.name_category}>
                  {category.name_category}
                </option>
              );
            })}
          </select>
          <button>Add</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
