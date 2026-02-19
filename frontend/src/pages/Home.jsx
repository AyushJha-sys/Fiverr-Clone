import { useEffect, useState } from "react";
import axios from "axios";
import GigCard from "../components/GigCard";

export default function Home(){

  const [gigs,setGigs]=useState([]);

  useEffect(()=>{

    const fetchGigs = async()=>{

      try{

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/gigs`
        );

        setGigs(res.data);

      }
      catch(err){
        console.error(err);
      }

    };

    fetchGigs();

  },[]);

  return(

    <div style={{
      background:"#0f0f0f",
      minHeight:"100vh",
      padding:"40px"
    }}>

      <h1 style={{
        color:"#00ffc8"
      }}>
        Explore Freelance Services
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
        gap:"20px",
        marginTop:"30px"
      }}>

        {gigs.map(gig=>(
          <GigCard key={gig._id} gig={gig}/>
        ))}

      </div>

    </div>

  );
}