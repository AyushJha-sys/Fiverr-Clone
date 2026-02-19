import axios from "axios";
import { useState } from "react";

export default function Login(){

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

  const handleLogin = async()=>{

    try{

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email, password }
      );

      localStorage.setItem("token",res.data.token);

      window.location="/";

    }
    catch(err){

      console.error("Login error:", err);

      setError("Invalid email or password");

    }
  };

  return(

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#0f0f0f"
    }}>

      <div style={{
        background:"#111",
        padding:"40px",
        borderRadius:"10px",
        color:"white",
        minWidth:"300px"
      }}>

        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
          style={{display:"block",margin:"10px 0",width:"100%"}}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={e=>setPassword(e.target.value)}
          style={{display:"block",margin:"10px 0",width:"100%"}}
        />

        <button 
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"10px",
            background:"#00ffc8",
            border:"none",
            cursor:"pointer"
          }}
        >
          Login
        </button>

        {error && <p style={{color:"red"}}>{error}</p>}

      </div>

    </div>
  );
}