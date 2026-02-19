import GigCard from "../components/GigCard";
import { useEffect,useState } from "react";
import axios from "axios";

export default function Home(){

const [gigs,setGigs]=useState([]);

useEffect(()=>{

axios.get(`${import.meta.env.VITE_API_URL}/gigs`)
.then(res=>setGigs(res.data));

},[]);

return(

<div style={{color:"white"}}>

{/* Hero */}

<div style={{
padding:"80px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"50px",
color:"#00ffc8"
}}>
Build Your Freelance Future 🚀
</h1>

<p>
Hire professionals. Grow your business.
</p>

</div>

<img
src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
style={{width:"100%"}}
/>

{/* Section */}

<div style={{padding:"60px"}}>

<h2 style={{color:"#00ffc8"}}>
Why Choose FreelanceHub
</h2>

<p>

FreelanceHub provides a powerful ecosystem for freelancers and clients.

With secure payments, professional dashboards, and modern UI,
FreelanceHub empowers digital professionals.

</p>

</div>

<img
src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
style={{width:"100%"}}
/>

{/* Gigs */}

<div style={{padding:"60px"}}>

<h2 style={{color:"#00ffc8"}}>
Explore Services
</h2>

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

<img
src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200"
style={{width:"100%"}}
/>

{/* Startup section */}

<div style={{padding:"60px"}}>

<h2 style={{color:"#00ffc8"}}>
Join the Startup Revolution 💡
</h2>

<p>

Thousands of freelancers are building their careers using platforms
like FreelanceHub.

Start today. Build your future.

</p>

</div>

</div>

);

}