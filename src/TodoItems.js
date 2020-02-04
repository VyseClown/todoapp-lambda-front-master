import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoItems({ entries, editItem, deleteItem }) {
  function renderItems() {
    if (!Boolean(entries.length)) return null;

    return entries.map(item => {
      console.log(item._id);
      return (
        <TodoItem
          key={item._id}
          item={item}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      );
    });
  }

  return <ul>{renderItems()}</ul>;
}

export default TodoItems;
