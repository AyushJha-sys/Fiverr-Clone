import { Link } from "react-router-dom";

export default function GigCard({ gig }) {

  return (
    <Link to={`/gig/${gig._id}`} style={{ textDecoration: "none" }}>

      <div style={{
        background: "#111",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0,255,200,0.15)",
        transition: "0.3s",
        cursor: "pointer"
      }}

      onMouseEnter={e=>{
        e.currentTarget.style.transform="scale(1.03)";
        e.currentTarget.style.boxShadow="0 0 30px rgba(0,255,200,0.4)";
      }}

      onMouseLeave={e=>{
        e.currentTarget.style.transform="scale(1)";
        e.currentTarget.style.boxShadow="0 0 20px rgba(0,255,200,0.15)";
      }}

      >

        <img
          src={gig.image}
          alt={gig.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />

        <div style={{ padding: "15px", color: "white" }}>

          <h3 style={{ margin: "0 0 10px 0" }}>
            {gig.title}
          </h3>

          <p style={{
            color: "#00ffc8",
            fontWeight: "bold"
          }}>
            ₹{gig.price}
          </p>

        </div>

      </div>

    </Link>
  );
}