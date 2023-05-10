import React, { useState,useEffect } from "react";
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
import Selection from "../../components/Selection/Selection";
import Header from "../../components/Header/Header";

function Principal_page() {

  const [data,setData] = useState([]);

  /*useEffect(()=>{
    Axios.get("https://localhost:3000/api/profile")
    

  }, []);*/

  return (
    
    <div className="principalPageContainer">
      <div className="header">
        <Header textInsert={`Bienvenido: ${name}`} />
      </div>
      <div className="selectionsContainer">
        <div className="selectionContainer">
          <Selection route={"/principal/directory"} linkName={"Directorio"} />
        </div>
        <div className="selectionContainer">
          <Selection
            route={"/principal/create_dir"}
            linkName={"Crear Directorio"}
          />
        </div>
        <div className="selectionContainer">
          <Selection route={"/"} linkName={"Acerca de nosotros"} />
        </div>
      </div>
    </div>
  );
}

export default Principal_page;
