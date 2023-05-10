import axios from 'axios';
import qs from 'querystring';

export const register = newUser => {
  return axios
    .post('http://localhost:3000/api/register',qs.stringify({
      name: newUser.name,
      email: newUser.email,
      pass: newUser.pass,
    }))
    .then(response => {
      console.log('Usuario registrado')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:3000/api/login', {
      email: user.email,
      pass: user.pass,
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.error(err)
    })
}
