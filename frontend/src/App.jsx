import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import GigDetails from "./pages/GigDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/gig/:id"
          element={
            <ProtectedRoute>
              <GigDetails />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;