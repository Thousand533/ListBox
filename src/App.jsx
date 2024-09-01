import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './TodoList'
import Navbar from './NavBar'
function App() {
  return (
    <>
      <Navbar />
      <CssBaseline/>
      <TodoList/>
    </>
  )
}

export default App
