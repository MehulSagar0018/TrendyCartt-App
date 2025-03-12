
import { Outlet } from 'react-router-dom'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import ChatBot from './components/help/ChatBot'


const App = () => {
  return (
    <>
    <Navbar/>
    <ChatBot />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App




