import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100% - 80px);

  input {
    padding: 12px 20px;
    margin: 8px 5px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 18px;
    background: #3b5dfd;
    border: 0;
    cursor: pointer;
  }
`;
