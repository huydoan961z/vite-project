import TodoData from './components/todo/Todo-data'
import TodoInput from './components/todo/Todo-input'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './layout/header'
import { Outlet } from 'react-router-dom'

const App = () => {





  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App