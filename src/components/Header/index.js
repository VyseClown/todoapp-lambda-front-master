import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container } from "./styles";

const Photo = ({ location }) => {
  const { state = {} } = location;
  const { modal } = state;
  return (
    <div className={modal ? "modal" : undefined}>
      {modal && <Link to="/">Close</Link>}
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <Container>
      <h1>TodoList</h1>
      <Switch>
        <Route path="/photo" component={Photo} />
      </Switch>
      <Link
        to={{
          pathname: "/photo",
          state: { modal: true }
        }}
        className="link"
      >
        View Photo
      </Link>
    </Container>
  );
}
