import React, { useState } from "react";

import style from "./newtodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  console.log(todo);
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <div className="container">
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="desc">Description: </label>
          <textarea
            rows="6"
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default NewTodo;
