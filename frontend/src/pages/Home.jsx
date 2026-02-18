import { useEffect, useState } from "react";
import { getGigs } from "../api/api";
import GigCard from "../components/GigCard";

function Home() {

  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchGigs = async () => {

      try {

        const data = await getGigs();

        setGigs(data);

      } catch (error) {

        console.error("Failed to load gigs:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchGigs();

  }, []);

  if (loading)
    return (
      <div style={{ padding: "40px" }}>
        <h2>Loading gigs...</h2>
      </div>
    );

  return (

    <div style={{ padding: "40px" }}>

      <h1>Website Development</h1>

      <p>Create, build, and develop your website</p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px"
      }}>

        {gigs.length > 0 ? (

          gigs.map((gig) => (

            <GigCard key={gig._id} gig={gig} />

          ))

        ) : (

          <p>No gigs available</p>

        )}

      </div>

    </div>

  );

}

export default Home;