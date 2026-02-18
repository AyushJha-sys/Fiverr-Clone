import GigCard from "./GigCard";
import { useEffect, useState } from "react";

function Home() {

  const [gigs,setGigs]=useState([]);

  useEffect(()=>{

    fetch("http://localhost:5000/api/gigs")
      .then(res=>res.json())
      .then(data=>setGigs(data));

  },[]);

  return(

    <div>

      {/* HERO */}
      <div style={{
        background:"#f5f5f5",
        padding:"40px"
      }}>

        <h1>Website Development</h1>

        <p>Create, build, and develop your website</p>

      </div>

      {/* FILTER BAR */}
      <div style={{
        padding:"20px",
        display:"flex",
        gap:"10px"
      }}>

        <button>Service Options</button>
        <button>Seller Details</button>
        <button>Budget</button>
        <button>Delivery Time</button>

      </div>

      {/* GIG GRID */}
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"20px",
        padding:"20px"
      }}>

        {gigs.map(gig=>(
          <GigCard key={gig._id} gig={gig}/>
        ))}

      </div>

    </div>

  );

}

export default Home;