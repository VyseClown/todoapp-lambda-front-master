import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  //yep, it's working!

  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
