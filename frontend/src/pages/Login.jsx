import axios from "axios";
import { useState } from "react";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login = async()=>{

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{email,password}
);

localStorage.setItem("token",res.data.token);

window.location="/";

};

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh"
}}>

<div style={{
border:"1px solid #ddd",
padding:"40px",
borderRadius:"10px"
}}>

<h2>Login</h2>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<br/>

<input
placeholder="Password"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<br/>

<button onClick={login}>
Login
</button>

</div>

</div>

);

}