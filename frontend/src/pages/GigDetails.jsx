import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GigDetails(){

  const { id } = useParams();

  const [gig,setGig]=useState(null);

  useEffect(()=>{

    const fetchGig = async()=>{

      try{

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/gigs/${id}`
        );

        setGig(res.data);

      }
      catch(err){
        console.error(err);
      }

    };

    fetchGig();

  },[id]);

  if(!gig)
    return <div style={{color:"white"}}>Loading...</div>;

  const fallbackImage =
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500";

  const imageUrl =
    gig.image && gig.image.trim() !== ""
      ? gig.image
      : fallbackImage;

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
        src={imageUrl}
        style={{
          width:"400px",
          marginTop:"20px",
          borderRadius:"10px"
        }}
      />

      <p style={{marginTop:"20px"}}>
        {gig.desc || "No description available"}
      </p>

      <h2 style={{color:"#00ffc8"}}>
        ₹{gig.price}
      </h2>

      {gig.qrCode && (

        <>
          <h3>Scan QR to Pay</h3>

          <img
            src={gig.qrCode}
            width="200"
          />

        </>
      )}

    </div>

  );
}