import React, { useState, useEffect, useRef } from "react";
import TodoItems from "../TodoItems";
import fetch from "isomorphic-fetch";
import { MdAdd } from "react-icons/md";

import { Container } from "./styles";

export default function Board() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const inputElement = useRef();

  useEffect(() => {
    async function loadTodos() {
      const response = await fetch(
        "https://8svnnrxmvk.execute-api.us-east-1.amazonaws.com/dev/api/todos",
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "todo"
          },
          method: "GET"
        }
      );
      const json = await response.json();
      //console.log(json);
      setItems(json);
    }

    loadTodos();
  }, []);

  function handleInput(e) {
    const itemText = e.target.value;
    setCurrentItem(itemText);
  }

  async function addItem(e) {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem !== "") {
      const response = await fetch(
        "https://8svnnrxmvk.execute-api.us-east-1.amazonaws.com/dev/api/todos",
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "todo"
          },
          body: JSON.stringify({ title: newItem }),
          method: "POST"
        }
      );
      const json = await response.json();
      console.log(json);
      setItems(currentState => [...currentState, json]);
      setCurrentItem("");
    }
  }

  async function editItem(title, id) {
    //console.log(title.current.value);
    const response = await fetch(
      `https://8svnnrxmvk.execute-api.us-east-1.amazonaws.com/dev/api/todos/${id}`,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "todo"
        },
        body: JSON.stringify({title:title.current.value}),
        method: "PUT"
      }
    );
    console.log(response);
    const json = await response.json();
    //console.log(json);
    setItems(currentState => [
      ...currentState.map(item => {
        if (Boolean(item._id === json._id)) {
          //console.log("chegou");
          //item.title = json.title;
          return json;
        }
        return item;
      })
    ]);
  }

  async function deleteItem(id) {
    const filteredItems = items.filter(item => {
      return item._id !== id;
    });
    const response = await fetch(
      `https://8svnnrxmvk.execute-api.us-east-1.amazonaws.com/dev/api/todos/${id}`,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "todo"
        },
        method: "DELETE"
      }
    );
    const json = await response.json();
    if (json.deletedCount === 1) {
      setItems(filteredItems);
    }
  }
  return (
    <Container>
      <div>
        <div>
          <div>
            <input
              placeholder="Enter Task"
              ref={inputElement}
              value={currentItem}
              onChange={handleInput}
              maxLength="11"
            />
            <button onClick={addItem}>
              <MdAdd />
            </button>
          </div>
        </div>
        <TodoItems
          entries={items}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      </div>
    </Container>
  );
}
