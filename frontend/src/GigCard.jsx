import { Link } from "react-router-dom";

function GigCard({ gig }) {

  return (

    <Link to={`/gig/${gig._id}`} style={{textDecoration:"none"}}>

      <div style={{
        width:"280px",
        border:"1px solid #ddd",
        borderRadius:"8px",
        overflow:"hidden",
        background:"white",
        transition:"0.3s"
      }}>

        <img
          src={gig.image || "https://picsum.photos/300/200"}
          style={{
            width:"100%",
            height:"180px",
            objectFit:"cover"
          }}
        />

        <div style={{padding:"10px"}}>

          <h4 style={{color:"#333"}}>
            {gig.title}
          </h4>

          <p style={{color:"#777"}}>
            {gig.desc}
          </p>

          <h3 style={{color:"#1dbf73"}}>
            ₹{gig.price}
          </h3>

        </div>

      </div>

    </Link>

  );

}

export default GigCard;