import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GigDetails(){

  const { id } = useParams();
  const [gig,setGig]=useState(null);

  useEffect(()=>{

    axios.get(`${import.meta.env.VITE_API_URL}/gigs/${id}`)
      .then(res=>setGig(res.data));

  },[id]);

  if(!gig) return <div style={{color:"white"}}>Loading...</div>;

  return(

    <div style={{
      background:"#0f0f0f",
      minHeight:"100vh",
      padding:"40px",
      color:"white"
    }}>

      <h1 style={{color:"#00ffc8"}}>
        {gig.title}
      </h1>

      <img
        src={gig.image}
        style={{
          width:"500px",
          borderRadius:"15px",
          marginTop:"20px"
        }}
      />

      <p style={{marginTop:"20px"}}>
        {gig.description}
      </p>

      <h2 style={{color:"#00ffc8"}}>
        ₹{gig.price}
      </h2>

      <h3>Scan QR to Pay</h3>

      <img src={gig.qrCode} width="200"/>

    </div>

  );

}