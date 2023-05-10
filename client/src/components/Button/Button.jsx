import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({route}) {
    const navigate = useNavigate();
    function back() {
        navigate(route);
    }

  return (
    <div className="buttonContainer">
        <button className="button_back" onClick={back}>
          Regresar
        </button>
    </div>
  )
}


export default Button