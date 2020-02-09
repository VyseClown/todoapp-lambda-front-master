import React, { useState, useRef } from "react";
import { Container } from "./styles";
import { MdEdit, MdUpdate, MdDelete } from "react-icons/md";

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
    <Container>
      <li key={item._id}>
        {!editMode ? (
          <span>{item.title}</span>
        ) : (
          <input
            defaultValue={item.title}
            ref={inputElement}
            onKeyUp={() => callUpdateAPI(e, e.target.value)}
          />
        )}
        {!editMode ? (
          <button type="submit" onClick={() => toggleEdit()}>
            <MdEdit />
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => {
              editItem(inputElement, item._id);
              toggleEdit(e);
            }}
          >
            <MdUpdate />
          </button>
        )}{" "}
        <button type="submit" onClick={() => deleteItem(item._id)}>
          <MdDelete />
        </button>
      </li>
    </Container>
  );
}

export default TodoItem;
