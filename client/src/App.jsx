import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Sigin from './pages/Sigin/Sigin'
import Principal_page from './pages/Principal_page/Principal_page'
import Login from './pages/Login/Login'
import DirectoryP from './pages/Directory/DirectoryP'
import CreateDirectoryP from './pages/CreateDirectory/CreateDirectoryP'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element={<Sigin/>}/>
        <Route path='/principal' element={<Principal_page/>}/>
        <Route path='/principal/directory' element = {<DirectoryP/>}/>
        <Route path='/principal/create_dir' element = {<CreateDirectoryP/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
