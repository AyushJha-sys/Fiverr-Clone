import { useState } from "react";
import axios from "axios";

export default function Dashboard(){

  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [price,setPrice]=useState("");
  const [image,setImage]=useState("");
  const [qrCode,setQrCode]=useState("");

  const createGig = async()=>{

    try{

      await axios.post(
        `${import.meta.env.VITE_API_URL}/gigs`,
        {
          title,
          desc,
          price,
          image,
          qrCode,
          userId:"demoUser"
        }
      );

      alert("Gig created successfully");

      setTitle("");
      setDesc("");
      setPrice("");
      setImage("");
      setQrCode("");

    }
    catch(err){

      console.error(err);
      alert("Error creating gig");

    }

  };

  return(

    <div style={{
      padding:"60px",
      background:"#0f0f0f",
      minHeight:"100vh",
      color:"white"
    }}>

      <h1 style={{color:"#00ffc8"}}>
        Dashboard - Create Gig
      </h1>

      <div style={{
        marginTop:"30px",
        display:"flex",
        flexDirection:"column",
        width:"300px",
        gap:"10px"
      }}>

        <input
          placeholder="Gig Title"
          value={title}
          onChange={e=>setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          value={desc}
          onChange={e=>setDesc(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={e=>setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={e=>setImage(e.target.value)}
        />

        <input
          placeholder="QR Code Image URL"
          value={qrCode}
          onChange={e=>setQrCode(e.target.value)}
        />

        <button
          onClick={createGig}
          style={{
            padding:"10px",
            background:"#00ffc8",
            border:"none",
            cursor:"pointer"
          }}
        >
          Create Gig
        </button>

      </div>

    </div>

  );

}