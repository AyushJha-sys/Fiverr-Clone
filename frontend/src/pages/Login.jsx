import axios from "axios";
import { useState } from "react";

export default function Login(){

  const [isRegister,setIsRegister]=useState(false);

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [message,setMessage]=useState("");

  const handleSubmit = async()=>{

    try{

      if(isRegister){

        await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/register`,
          { name, email, password }
        );

        setMessage("Registration successful. Please login.");
        setIsRegister(false);

      }
      else{

        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/login`,
          { email, password }
        );

        localStorage.setItem("token",res.data.token);

        window.location="/";

      }

    }
    catch(err){

      console.error(err);
      setMessage("Something went wrong");

    }

  };

  return(

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#0f0f0f",
      color:"white"
    }}>

      <div style={{
        background:"#111",
        padding:"40px",
        borderRadius:"10px",
        width:"300px"
      }}>

        <h2>
          {isRegister ? "Register" : "Login"}
        </h2>

        {isRegister && (

          <input
            placeholder="Name"
            onChange={e=>setName(e.target.value)}
            style={{width:"100%",marginBottom:"10px"}}
          />

        )}

        <input
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
          style={{width:"100%",marginBottom:"10px"}}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
          style={{width:"100%",marginBottom:"10px"}}
        />

        <button
          onClick={handleSubmit}
          style={{
            width:"100%",
            padding:"10px",
            background:"#00ffc8",
            border:"none",
            cursor:"pointer"
          }}
        >
          {isRegister ? "Register" : "Login"}
        </button>

        <p style={{marginTop:"10px"}}>

          {isRegister
            ? "Already have an account?"
            : "New user?"
          }

          <span
            onClick={()=>setIsRegister(!isRegister)}
            style={{
              color:"#00ffc8",
              cursor:"pointer",
              marginLeft:"5px"
            }}
          >
            {isRegister ? "Login" : "Register"}
          </span>

        </p>

        {message && (
          <p style={{color:"orange"}}>
            {message}
          </p>
        )}

      </div>

    </div>

  );

}