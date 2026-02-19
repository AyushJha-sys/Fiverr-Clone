import { Link } from "react-router-dom";

export default function Navbar(){

  return(

    <div style={{
      background:"#000",
      padding:"15px 40px",
      display:"flex",
      justifyContent:"space-between"
    }}>

      <Link to="/" style={{
        color:"#00ffc8",
        fontSize:"22px",
        textDecoration:"none"
      }}>
        FreelanceHub
      </Link>

    </div>

  );

}