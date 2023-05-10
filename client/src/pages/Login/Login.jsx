import React from "react";
import Login_container from "../../components/Login_container/Login_container";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

function Login() {
  return (
    <div className="block_div">
      <div className="header">
        <Header textInsert={'Login'}/>
        <Button route={'/'}/>
      </div>
      <div className="formContainer">
        <Login_container />
      </div>
    </div>
  );
}

export default Login;
