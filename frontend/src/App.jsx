import React from 'react'
import SideBar from './components/Sidebar/SideBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <SideBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App