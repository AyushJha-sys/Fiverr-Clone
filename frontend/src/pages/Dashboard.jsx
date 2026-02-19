import { useState } from "react";
import axios from "axios";

export default function Dashboard(){

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [image,setImage]=useState("");
  const [qrCode,setQrCode]=useState("");

  const createGig = async()=>{

    await axios.post(
      `${import.meta.env.VITE_API_URL}/gigs`,
      { title, description, price, image, qrCode }
    );

    alert("Gig created");
  };

  return(

    <div style={{padding:"40px"}}>

      <h2>Create Gig</h2>

      <input placeholder="Title"
        onChange={e=>setTitle(e.target.value)} />

      <input placeholder="Description"
        onChange={e=>setDescription(e.target.value)} />

      <input placeholder="Price"
        onChange={e=>setPrice(e.target.value)} />

      <input placeholder="Image URL"
        onChange={e=>setImage(e.target.value)} />

      <input placeholder="QR Code URL"
        onChange={e=>setQrCode(e.target.value)} />

      <button onClick={createGig}>
        Create
      </button>

    </div>
  );
}