import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GigDetails from "./pages/GigDetails";
import About from "./pages/About";
import Services from "./pages/Services";
import Features from "./pages/Features";

export default function App(){

  return(

    <div style={{
      display:"flex",
      flexDirection:"column",
      minHeight:"100vh",
      background:"#0f0f0f"
    }}>

      <Navbar/>

      <div style={{flex:1}}>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/gig/:id" element={<GigDetails/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/features" element={<Features/>}/>

        </Routes>

      </div>

      <Footer/>

    </div>

  );

}