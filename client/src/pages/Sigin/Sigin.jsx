import React from "react";
import Register_container from "../../components/Register_container/Register_container";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

function Sigin() {
  return (
    <div className="block_div">
      <div className="header">
        <Header textInsert={"Sigin"} />
        <Button route={"/"} />
      </div>
      <div className="formContainer">
        <Register_container />
      </div>
    </div>
  );
}

export default Sigin;
