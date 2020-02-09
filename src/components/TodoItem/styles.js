import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);

  input {
    width: 150px !important;
    margin: 0 5 !important;
  }

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  span {
    margin-right: 100px;
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }
  button {
    position: relative;
    right: -0px;
    top: 5px;
    width: 42px;
    height: 42px;
    border-radius: 18px;
    background: #3b5dfd;
    border: 0;
    cursor: pointer;
  }
`;
export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;
