import { useState } from "react";

function Dashboard(){

  const [title,setTitle]=useState("");
  const [price,setPrice]=useState("");
  const [image,setImage]=useState(null);

  const createGig=async()=>{

    const token=localStorage.getItem("token");

    await fetch(
      "http://localhost:5000/api/gigs",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":token
        },
        body:JSON.stringify({
          title,
          desc:"Sample gig",
          price,
          image
        })
      }
    );

    alert("Gig created");

  };

  const upload=(e)=>{

    const file=e.target.files[0];

    setImage(URL.createObjectURL(file));

  };

  return(

    <div style={{padding:"40px"}}>

      <h2>Create Gig</h2>

      <input placeholder="Title"
        onChange={(e)=>setTitle(e.target.value)}
      />

      <br/><br/>

      <input placeholder="Price"
        onChange={(e)=>setPrice(e.target.value)}
      />

      <br/><br/>

      <input type="file" onChange={upload}/>

      <br/><br/>

      <button onClick={createGig}>
        Create Gig
      </button>

    </div>

  );

}

export default Dashboard;