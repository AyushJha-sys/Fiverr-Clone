import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function GigDetails() {

  const { id } = useParams();

  const [gig, setGig] = useState(null);

  useEffect(() => {

    const loadGig = async () => {

      try {

        const res = await fetch(
          `http://localhost:5000/api/gigs`
        );

        const data = await res.json();

        const foundGig = data.find(g => g._id === id);

        setGig(foundGig);

      } catch (error) {

        console.error(error);

      }

    };

    loadGig();

  }, [id]);

  if (!gig)
    return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  return (

    <div style={{ padding: "40px" }}>

      <h1>{gig.title}</h1>

      <img
        src={gig.image || "https://picsum.photos/500/300"}
        style={{
          width: "500px",
          marginTop: "20px"
        }}
      />

      <p style={{ marginTop: "20px" }}>
        {gig.desc}
      </p>

      <h2 style={{ color: "#1dbf73" }}>
        ₹{gig.price}
      </h2>

    </div>

  );

}

export default GigDetails;