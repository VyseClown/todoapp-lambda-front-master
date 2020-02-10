import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #303e4d;
  color: #fff;

  display: flex;
  align-items: center;
  h1 {
    cursor: pointer;
  }
  .modal {
    position: fixed;
    top: 150px;
    right: 20px;
    left: 300px;
  }
  a {
    margin-left: 30px;
    background-color: lightblue;
    box-shadow: 0 5px 0 blue;
    color: white;
    padding: 1em 1.5em;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover {
    background-color: darkblue;
    transition: 0.3s;
    cursor: pointer;
  }

  a:active {
    box-shadow: none;
    top: 5px;
  }
`;
