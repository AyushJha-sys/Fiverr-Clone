import { Link } from "react-router-dom";

export default function GigCard({ gig }) {

  const fallbackImage =
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500";

  const imageUrl =
    gig.image && gig.image.trim() !== ""
      ? gig.image
      : fallbackImage;

  return (

    <Link
      to={`/gig/${gig._id}`}
      style={{ textDecoration: "none" }}
    >

      <div style={{
        background: "#111",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 0 15px rgba(0,255,200,0.15)",
        transition: "0.3s",
        cursor: "pointer"
      }}

      onMouseEnter={(e)=>{
        e.currentTarget.style.transform="scale(1.03)";
      }}

      onMouseLeave={(e)=>{
        e.currentTarget.style.transform="scale(1)";
      }}

      >

        <img
          src={imageUrl}
          alt={gig.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />

        <div style={{
          padding: "15px",
          color: "white"
        }}>

          <h3 style={{margin:"0"}}>
            {gig.title}
          </h3>

          <p style={{
            color:"#aaa",
            marginTop:"8px",
            height:"50px",
            overflow:"hidden"
          }}>
            {gig.desc || "No description provided"}
          </p>

          <h4 style={{
            color:"#00ffc8",
            marginTop:"10px"
          }}>
            ₹{gig.price}
          </h4>

        </div>

      </div>

    </Link>

  );
}