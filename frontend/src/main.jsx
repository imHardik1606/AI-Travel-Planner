import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import CreateTrip from "./create-trip/index"
import Header from './components/custom/Header';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path='/create-trip' element={<CreateTrip/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
