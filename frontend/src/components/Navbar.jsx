import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      borderBottom: "1px solid #ddd",
      background: "white"
    }}>

      {/* LOGO */}
      <h2
        style={{
          color: "#1dbf73",
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      >
        fiverr.
      </h2>

      {/* NAV LINKS */}
      <div style={{
        display: "flex",
        gap: "20px"
      }}>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/about")}
        >
          About
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/contact")}
        >
          Contact
        </span>

        {token && (

          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </span>

        )}

      </div>

      {/* AUTH BUTTONS */}
      <div style={{
        display: "flex",
        gap: "10px"
      }}>

        {token ? (

          <>
            <button
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>

            <button
              onClick={logout}
              style={{
                background: "#1dbf73",
                color: "white",
                border: "none",
                padding: "8px 15px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>

        ) : (

          <>
            <button
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              style={{
                background: "#1dbf73",
                color: "white",
                border: "none",
                padding: "8px 15px",
                cursor: "pointer"
              }}
            >
              Register
            </button>
          </>

        )}

      </div>

    </div>

  );

}

export default Navbar;