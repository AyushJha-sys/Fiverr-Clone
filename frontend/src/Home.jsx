import { useEffect, useState } from "react";
import axios from "axios";
import GigCard from "../components/GigCard";

export default function Home() {

  const [gigs, setGigs] = useState([]);

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}/gigs`)
      .then(res => setGigs(res.data))
      .catch(err => console.log(err));

  }, []);

  return (

    <div style={{
      background: "linear-gradient(135deg,#0f0f0f,#1a1a2e)",
      minHeight: "100vh",
      padding: "40px"
    }}>

      <h1 style={{
        color: "#00ffc8",
        fontSize: "42px",
        marginBottom: "10px"
      }}>
        Freelance Marketplace
      </h1>

      <p style={{
        color: "#aaa",
        marginBottom: "40px"
      }}>
        Hire elite freelancers. Pay securely. Scale faster.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "25px"
      }}>

        {gigs.map(gig => (
          <GigCard gig={gig} key={gig._id} />
        ))}

      </div>

    </div>
  );
}