import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import qs from "querystring";

function Login_container() {

  const [data, setData] = useState({ email: "", pass: "" });
  const navigate = useNavigate();
  //const [auth, setAuth] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submit = Axios.post(
      "http://localhost:3000/api/login",
      qs.stringify({
        email: data.email,
        pass: data.pass,
      })
    )
      .then(() => {
        navigate('/principal')
        //setAuth(true);
      })
      .catch((error) => {
        console.error(error);
        alert('Usuario o contraseña incorrectos')
      });
      
  };

  /*function handleButton() {
    if(auth){
      navigate('/')
    } 
  }*/

  return (
    <div className="div_form">
      <form className="form" onSubmit={handleSubmit}>
        <p className="pContainer">Ingrese su Email</p>
        <input
          type="email"
          className="input_entry"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <p className="pContainer">Ingrese su Contraseña</p>
        <input
          type="password"
          className="input_entry"
          name="pass"
          value={data.pass}
          onChange={handleChange}
        />
        <p className="pContainer">
          <button
            type="submit"
            className="input_button"
            >
            Aceptar
          </button>
          <input type="reset" value="Limpiar" className="input_button" />
        </p>
      </form>
    </div>
  );
}

export default Login_container;
