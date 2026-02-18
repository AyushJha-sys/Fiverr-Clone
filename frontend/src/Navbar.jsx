import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ loggedIn, logout }) {

  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {

    logout();
    navigate("/login");

  };

  return (

    <div style={{
      borderBottom: "1px solid #ddd",
      background: "white"
    }}>

      {/* TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px"
      }}>

        {/* LOGO */}
        <h2
          style={{ color: "#1dbf73", cursor: "pointer" }}
          onClick={()=>navigate("/")}
        >
          fiverr.
        </h2>

        {/* MENU */}
        <div style={{ display: "flex", gap: "20px" }}>

          <span style={{cursor:"pointer"}} onClick={()=>navigate("/")}>
            Home
          </span>

          <span>About</span>

          <span>Services</span>

          <span>Contact</span>

        </div>

        {/* PROFILE */}
        {loggedIn ? (

          <div style={{ position: "relative" }}>

            <img
              src="https://i.pravatar.cc/40"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer"
              }}
              onClick={()=>setProfileOpen(!profileOpen)}
            />

            {profileOpen && (

              <div style={{
                position: "absolute",
                right: 0,
                background: "white",
                border: "1px solid #ddd",
                padding: "10px"
              }}>

                <div onClick={()=>navigate("/profile")}>
                  Profile
                </div>

                <div onClick={()=>navigate("/dashboard")}>
                  Dashboard
                </div>

                <div onClick={handleLogout}>
                  Logout
                </div>

              </div>

            )}

          </div>

        ) : (

          <button
            onClick={()=>navigate("/login")}
            style={{
              background:"#1dbf73",
              color:"white",
              border:"none",
              padding:"10px 20px",
              cursor:"pointer"
            }}
          >
            Login
          </button>

        )}

      </div>

    </div>

  );

}

export default Navbar;