import { useEffect, useState } from "react";
import axios from "axios";
import GigCard from "../components/GigCard";

export default function Home(){

const [gigs,setGigs]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/gigs")
.then(res=>setGigs(res.data));

},[]);

return(

<div>

<div style={{
padding:"50px",
background:"#f5f5f5"
}}>

<h1>Find the perfect freelance service</h1>

<p>
FreelanceHub connects businesses with talented freelancers worldwide.
</p>

</div>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px",
padding:"40px"
}}>

{gigs.map(gig=>(
<GigCard gig={gig} key={gig._id}/>
))}

</div>

</div>

);

}