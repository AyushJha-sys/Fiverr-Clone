import { useEffect,useState } from "react";
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

        console.log(res.data);

        setGigs(res.data);

      }
      catch(err){
        console.error(err);
      }

    };

    fetchGigs();

  },[]);

  return(

    <div style={{padding:"40px"}}>

      <h1 style={{color:"#00ffc8"}}>
        Explore Gigs
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>

        {gigs.map(gig=>(
          <GigCard key={gig._id} gig={gig}/>
        ))}

      </div>

    </div>

  );

}