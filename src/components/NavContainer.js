import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark fixed-top bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <h2 className="">{props.click}</h2>
      <p className="navbar-brand">Score: {props.count}  |  Top Score: {props.score}</p>
    </nav>
  );
}

export default Nav;
