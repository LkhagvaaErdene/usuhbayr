import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Surgalt from "./pages/Surgalt"
import Haais from "./pages/Haais"
import UdirdahZuvlul from "./pages/UdirdahZuvlul"
import ErdemShinjilgee from "./pages/ErdemShinjilgee"
import HogjliinBodlogo from "./pages/HogjliinBodlogo"
import HamtynAjillagaa from "./pages/HamtynAjillagaa"
import Oyutan from "./pages/Oyutan"
import Rektor from "./pages/Rektor"
import HolbooBarih from "./pages/HolbooBarih"
import StudentForm from "./pages/StudentForm"
import StudentList from "./Components/StudentList"

function App() {
  return (
    <BrowserRouter>
      <div className="website">
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haais" element={<Haais />} />
          <Route path="/udirdah-zuvlul" element={<UdirdahZuvlul />} />
          <Route path="/surgalt" element={<Surgalt />} />
          <Route path="/erdem-shinjilgee" element={<ErdemShinjilgee />} />
          <Route path="/hogjliin-bodlogo" element={<HogjliinBodlogo />} />
          <Route path="/hamtyn-ajillagaa" element={<HamtynAjillagaa />} />
          <Route path="/oyutan" element={<Oyutan />} />
          <Route path="/rektor" element={<Rektor />} />
          <Route path="/holboo-barih" element={<HolbooBarih />} />
          <Route path="/burtgeh" element={<StudentForm />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>

        <Footer />
        <div className="copyright">
          © 2026 Хөдөө аж ахуйн их сургууль
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App