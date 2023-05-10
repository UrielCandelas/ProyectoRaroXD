  import React, {useState,useEffect} from 'react'
  import { useNavigate } from 'react-router-dom';
  import {register} from '../UserFunctions.js';
  import Axios from 'axios';
  import qs from 'querystring';

  function Register_container() {
      
      /*const[name,setName] = useState('');
      const[email,setEmail] = useState('');
      const[pass,setPass] = useState('');*/

      const [data,setData] = useState({name:'', email:'', pass:''});
      const navigate = useNavigate();

      /*const submit = Axios.post(
        'http://localhost:3000/api/register',qs.stringify({
          name: name,
          email:email,
          pass:pass
        }))
        .then((res)=>{
          console.log(res.data);
        })
        .catch((error)=>{
          console.error(error);
        })*/
        /*const handleChangeName = (event) => {
          const { name, value } = event.target;
          setName((prevState) => ({ ...prevState, [name]: value }));
        };
        const handleChangeEmail = (event) => {
          const { name, value } = event.target.value;
          setEmail((prevState) => ({ ...prevState, [name]: value }));
        };
        const handleChangePass = (event) => {
          const { name, value } = event.target.value;
          setPass((prevState) => ({ ...prevState, [name]: value }));
        };*/

        const handleChange = (event) => {
          const { name, value } = event.target;
          setData((prevState) => ({ ...prevState, [name]: value }));
        };

        const handleSubmit = (event) => {
          event.preventDefault();
          const submit = Axios.post(
            'http://localhost:3000/api/register',qs.stringify({
              name: data.name,
              email: data.email,
              pass: data.pass
            }))
            .then((res)=>{
              console.log(res.data);
              navigate('/');
            })
            .catch((error)=>{
              console.error(error);
            })
        };

        const handleButton = (event)=>{
          navigate('/');
        }

    return (
      <div className="div_form">
          <form className='form' onSubmit={handleSubmit}>
              <p className="pContainer">Ingrese su Nombre</p>
              <input type="text" className='input_entry' name='name' value={data.name}onChange={handleChange}/>
              <p className="pContainer">Ingrese su Email</p>
              <input type="email" className='input_entry' name ='email' value={data.email} onChange={handleChange}/>
              <p className="pContainer">Ingrese su Contraseña</p>
              <input type="password" className='input_entry' name = 'pass' value={data.pass} onChange={handleChange}/>
              <p className="pContainer">
                  <button type="submit" className='input_button' /*onClick={handleButton}*/> Aceptar</button>
              </p>
          </form>
      </div>
    )
  }

  export default Register_container