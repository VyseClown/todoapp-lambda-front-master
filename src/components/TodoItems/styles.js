import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  ul {
    margin-top: 30px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;
