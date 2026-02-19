import { Link } from "react-router-dom";

export default function Navbar() {

  const logout = () => {

    localStorage.removeItem("token");
    window.location = "/login";

  };

  return (

    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"15px 40px",
      background:"#1dbf73",
      color:"white"
    }}>

      <Link to="/" style={{color:"white"}}>
        FreelanceHub
      </Link>

      <button onClick={logout}>
        Logout
      </button>

    </div>

  );
}