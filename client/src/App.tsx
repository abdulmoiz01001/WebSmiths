import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from './pages/HomeLayout';
import AdminLayout from './pages/AdminLayout';
import RegistrationPage from './pages/RegistrationPage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeLayout />} >
      <Route path='/register' element={<RegistrationPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />} >

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
