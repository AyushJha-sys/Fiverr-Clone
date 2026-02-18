import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GigDetails from "./pages/GigDetails";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const logout = () => {

    localStorage.removeItem("token");
    setLoggedIn(false);

  };

  return (

    <div>

      <Navbar loggedIn={loggedIn} logout={logout} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login"
          element={<Login setLoggedIn={setLoggedIn} />}
        />

        <Route path="/register"
          element={<Register />}
        />

        <Route path="/profile"
          element={<Profile />}
        />

        <Route path="/dashboard"
          element={<Dashboard />}
        />

        <Route path="/about"
          element={<About />}
        />

        <Route path="/contact"
          element={<Contact />}
        />

        <Route path="/gig/:id"
          element={<GigDetails />}
        />

      </Routes>

    </div>

  );

}

export default App;