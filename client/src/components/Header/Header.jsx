import React from "react";

function Header({ textInsert}) {

  return (
    <header className="headerContainer">
      <div className="titleContainer">
        <h1 className="title">{textInsert}</h1>
      </div>
    </header>
  );
}

export default Header;
