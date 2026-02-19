import { Link } from "react-router-dom";

const fallback =
"https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800";

export default function GigCard({ gig }) {

  const imageUrl = gig.image && gig.image.trim() !== ""
    ? gig.image
    : fallback;

  return (
    <Link to={`/gig/${gig._id}`} style={{ textDecoration: "none" }}>
      <div style={{
        background: "#111",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0,255,200,0.15)",
        transition: "0.3s"
      }}>

        <img
          src={imageUrl}
          alt={gig.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />

        <div style={{ padding: "15px", color: "white" }}>
          <h3>{gig.title}</h3>
          <p style={{ color: "#00ffc8" }}>₹{gig.price}</p>
        </div>

      </div>
    </Link>
  );
}