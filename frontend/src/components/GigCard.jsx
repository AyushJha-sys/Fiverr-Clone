import { Link } from "react-router-dom";

function GigCard({ gig }) {

  if (!gig)
    return null;

  return (

    <Link
      to={`/gig/${gig._id}`}
      style={{
        textDecoration: "none",
        color: "black"
      }}
    >

      <div style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        background: "white",
        cursor: "pointer"
      }}>

        <img
          src={gig.image || "https://picsum.photos/300/200"}
          alt="gig"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover"
          }}
        />

        <div style={{ padding: "15px" }}>

          <h3>{gig.title}</h3>

          <p>{gig.desc}</p>

          <h4 style={{ color: "#1dbf73" }}>
            ₹{gig.price}
          </h4>

        </div>

      </div>

    </Link>

  );

}

export default GigCard;