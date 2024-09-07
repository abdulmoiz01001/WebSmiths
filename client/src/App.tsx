
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from './pages/HomeLayout';
import AdminLayout from './pages/AdminLayout';
import RegistrationPage from './pages/RegistrationPage';
import OtpVerifyPage from './pages/OtpVerifyPage';
import LoginPage from './pages/LoginPage';
import StatisticsPage from './pages/StatisticsPage';
import DoctorsPage from './pages/DoctorsPage';
import PatientsPage from "./pages/PatientsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import RegistrationRequestsPage from "./pages/RegistrationRequestsPage";
import MedicalRecordsPage from "./pages/MedicalRecordsPage";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/otp-verify" element={<OtpVerifyPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/register' element={<RegistrationPage />} />
      <Route path="/" element={<HomeLayout />} >
      </Route>
      <Route path="/admin" element={<AdminLayout />} >
      <Route path="statistics" element={<StatisticsPage />} />
      <Route path="doctors" element={<DoctorsPage />} />
      <Route path="patients" element={<PatientsPage />} />
      <Route path="appointments" element={<AppointmentsPage />} />
      <Route path="registration-Requests" element={<RegistrationRequestsPage />} />
      <Route path="medical-records" element={<MedicalRecordsPage />} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
