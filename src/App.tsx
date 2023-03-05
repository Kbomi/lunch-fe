import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/restaurant/register'
import Layout from './components/common/Layout'
import { createTheme } from '@mui/material'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/register" element={<Register />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
