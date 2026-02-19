import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GigDetails(){

const {id}=useParams();

const [gig,setGig]=useState(null);

useEffect(()=>{

const fetchGig = async () => {

  try{

    const res = await axios.get(
      `http://localhost:5000/api/gigs/${id}`
    );

    setGig(res.data);

  }
  catch(err){

    console.error(err);

  }

};

fetchGig();

},[id]);

if(!gig) return <div>Loading...</div>;

return(

<div style={{padding:"40px"}}>

<h1>{gig.title}</h1>

<img src={gig.image} width="400"/>

<p>{gig.description}</p>

<h2>₹{gig.price}</h2>

<h3>Scan to Pay</h3>

<img src={gig.qrCode} width="200"/>

</div>

);

}