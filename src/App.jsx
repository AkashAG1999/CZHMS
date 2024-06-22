import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Banner from './Pages/Banner';
import Footer from './Pages/Footer';
import News from './Pages/News';
import ErrorPage from './Pages/ErrorPage';
import AppointmentForm from './Pages/AppointmentForm';
import Features from './Pages/Features';
import Why from './Pages/Why';
import Contact from './Pages/Contact';
import HealthCheckup from './Pages/HealthCheckup';
import CardiacSciences from './Pages/Components/CardiacSciences';
import Cardiology from './Pages/Components/Cardiology/Cardiology';
import Diabetes from './Pages/Components/Diabetes/Diabetes';
import OurDoctors from './Pages/OurDoctors';
import LoginForm from './Pages/LoginForm';
import RegisterForm from './Pages/RegisterForm';
import DashBoard from './Pages/DashBoard/DashBoard';

import ProtectedRotes from './Pages/DashBoard/ProtectedRotes';
import PublicRoute from './Pages/DashBoard/PublicRoute';
import ApplyDoctor from './Pages/DashBoard/ApplyDoctor';
import VideoConf from './Pages/DashBoard/VideoConf';
import Users from './Pages/DashBoard/Users';
import ChatAdmin from './Pages/DashBoard/ChatAdmin';
import ChatUser from './Pages/DashBoard/ChatUser';
import Meetings from './Pages/DashBoard/Meetings';
import MeetingRoom from './Pages/DashBoard/MeetingRoom';

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Services />
            <Features />
            <HealthCheckup />
            <Why />
            <News />
            <Contact />
            <Footer />
          </>
        }
        />

        <Route path="/services" element={<Services />} />
        <Route path="/specialities/cardiac-science" element={<CardiacSciences />} />
        <Route path="/specialities/cardiac-science/cardiology" element={<Cardiology />} />
        <Route path="/specialities/diabetes" element={<Diabetes />} />
        <Route path="/blogs" element={<News />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/health_checkup" element={<HealthCheckup />} />
        <Route path="/doctors" element={<OurDoctors />} />
        <Route path="/specialities" element={<Features />} />
        <Route path='/bookappointment' element={<AppointmentForm />} />
        <Route path="*" element={< ErrorPage />} />

        <Route path='/dashboard' element={
          <ProtectedRotes>
            <DashBoard />
          </ProtectedRotes>
        } />

        <Route path='/hospital-doctors' element={
          <ProtectedRotes>
            <ApplyDoctor />
          </ProtectedRotes>
        } />

        <Route path='/users' element={
          <ProtectedRotes>
            <Users />
          </ProtectedRotes>
        } />

        <Route path='/chat/admin' element={
          <ProtectedRotes>
            <ChatAdmin />
          </ProtectedRotes>
        } />

        <Route path='/chat/user' element={
          <ProtectedRotes>
            <ChatUser />
          </ProtectedRotes>
        } />

        <Route path="/video-consultation" element={
          <ProtectedRotes>
            <VideoConf />
          </ProtectedRotes>
        } />

        <Route path='/login' element={
          <PublicRoute>
            <LoginForm />
          </PublicRoute>
        } />

        <Route path='/cz/meetings' element={
          <ProtectedRotes>
            <Meetings />
          </ProtectedRotes>
        } />

        <Route path="/cz/meetings/meeting-room" element={
          <ProtectedRotes>
            <MeetingRoom />
          </ProtectedRotes>
        } />

        <Route path='/register' element={
          <PublicRoute>
            <RegisterForm />
          </PublicRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}
export default App
