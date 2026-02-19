import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GigDetails from "./pages/GigDetails";

import About from "./pages/About";
import Services from "./pages/Services";
import Features from "./pages/Features";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
}

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/gig/:id" element={<GigDetails />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/features" element={<Features />} />

      </Routes>

      <Footer />
    </>
  );
}