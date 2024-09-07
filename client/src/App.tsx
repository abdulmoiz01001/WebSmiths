import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from './pages/HomeLayout';
import AdminLayout from './pages/AdminLayout';
import OtpVerifyPage from './pages/OtpVerifyPage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/otp-verify" element={<OtpVerifyPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomeLayout />} >

      </Route>
      <Route path="/admin" element={<AdminLayout />} >

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
