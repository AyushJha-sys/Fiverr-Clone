import { Link } from "react-router-dom";

export default function Navbar(){

  const logout = ()=>{

    localStorage.removeItem("token");

    window.location="/login";
  };

  return(

    <div style={{
      background:"#000",
      padding:"15px 40px",
      display:"flex",
      justifyContent:"space-between"
    }}>

      <Link to="/" style={{
        color:"#00ffc8",
        textDecoration:"none"
      }}>
        FreelanceHub
      </Link>

      <button onClick={logout}>
        Logout
      </button>

    </div>

  );
}