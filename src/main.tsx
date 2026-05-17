import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard.tsx'
import Header from './Components/Header/Header.tsx'
import AddJob from './Components/AddJob/AddJob.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Dashboard/>} path='/'/>
      <Route element={<AddJob/>} path='/editJob/:id'/>
      <Route element={<AddJob/>} path='/addJob'/>

    </Routes>
      <App />
    </BrowserRouter>
    </StrictMode>,
)
