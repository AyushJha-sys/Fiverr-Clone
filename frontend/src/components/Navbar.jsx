import { Link } from "react-router-dom";

export default function Navbar(){

  const token = localStorage.getItem("token");

  const logout = ()=>{
    localStorage.removeItem("token");
    window.location="/login";
  };

  return(

    <nav style={{
      position:"sticky",
      top:0,
      background:"#0a0a0a",
      padding:"15px 40px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      zIndex:1000
    }}>

      <Link to="/" style={{
        color:"#00ffc8",
        fontSize:"22px",
        textDecoration:"none"
      }}>
        FreelanceHub
      </Link>

      <div style={{display:"flex",gap:"20px"}}>

        <Link to="/" style={{color:"white"}}>Home</Link>
        <Link to="/about" style={{color:"white"}}>About</Link>
        <Link to="/services" style={{color:"white"}}>Services</Link>
        <Link to="/features" style={{color:"white"}}>Features</Link>

        {token && (
          <Link to="/dashboard" style={{color:"white"}}>
            Dashboard
          </Link>
        )}

        {token
          ? <button onClick={logout}>Logout</button>
          : <Link to="/login" style={{color:"white"}}>Login</Link>
        }

      </div>

    </nav>
  );
}