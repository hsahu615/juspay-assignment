import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/juspay-assignment">
      <Home/>
    </BrowserRouter>
  )
}

export default App
