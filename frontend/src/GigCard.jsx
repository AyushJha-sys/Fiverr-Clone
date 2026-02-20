import { Link } from "react-router-dom";

export default function GigCard({ gig }) {

  const fallback =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500";

  return (

    <Link to={`/gig/${gig._id}`} style={{textDecoration:"none"}}>

      <div style={{
        background:"#111",
        color:"white",
        padding:"15px",
        borderRadius:"10px"
      }}>

        <img
          src={gig.image || fallback}
          style={{
            width:"100%",
            height:"200px",
            objectFit:"cover"
          }}
        />

        <h3>{gig.title}</h3>

        <p>
          {gig.desc || "No description"}
        </p>

        <h4 style={{color:"#00ffc8"}}>
          ₹{gig.price}
        </h4>

      </div>

    </Link>

  );
}