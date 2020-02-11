import React, { useState, useRef } from "react";
import { Container } from "./styles";
import { MdEdit, MdUpdate, MdDelete } from "react-icons/md";

function TodoItem({ item, editItem, deleteItem }) {
  const [editMode, setEditMode] = useState(false);
  const inputElement = useRef();

  function toggleEdit(e) {
    //e.preventDefault();
    console.log('entrou no toggle');
    setEditMode(!editMode);
  }

  function callUpdateAPI(e, title) {
    e.preventDefault();
    if (e.keyCode === 13) {
      editItem(inputElement, item._id);
      toggleEdit(e);
      console.log('entrou no callUpdateAPI');
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
            maxLength="11"
            defaultValue={item.title}
            ref={inputElement}
            onKeyUp={e => callUpdateAPI(e, e.target.value)}
          />
        )}
        {!editMode ? (
          <button type="submit" onClick={e => toggleEdit(e)}>
            <MdEdit />
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => {
              editItem(inputElement, item._id);
              e => toggleEdit(e);
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
