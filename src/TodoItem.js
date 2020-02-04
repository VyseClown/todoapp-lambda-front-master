import React, { Component, useState, useRef } from "react";

function TodoItem({ item }) {
  const [editMode, setEditMode] = useState(false);
  const inputElement = useRef();

  function toggleEdit(e) {
    e.preventDefault();
    setEditMode({ editMode: !editMode });
  }

  function callUpdateAPI(e, title) {
    e.preventDefault();
    if (e.keyCode === 13) {
      editItem(title, item._id);
      toggleEdit(e);
    }
  }

  //const item = this.props.item;
  return (
    <li key={item._id}>
      {!editMode ? (
        <span>{item.title}</span>
      ) : (
        <input
          defaultValue={item.title}
          ref={inputElement}
          onKeyUp={callUpdateAPI(e, e.target.value)}
        />
      )}
      {!editMode ? (
        <button type="submit" onClick={() => toggleEdit()}>
          Edit Task
        </button>
      ) : (
        <button
          type="submit"
          onClick={e => {
            editItem(inputElement, item._id);
            toggleEdit(e);
          }}
        >
          Update
        </button>
      )}{" "}
      <button type="submit" onClick={() => deleteItem(item._id)}>
        Delete Task
      </button>
    </li>
  );
}

export default TodoItem;
