import { useState } from "react";

function Dashboard() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createGig = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/gigs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`   // ✅ FIXED
          },
          body: JSON.stringify({
            title,
            desc,
            price,
            image
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {

        console.error(data);

        alert("Backend rejected request");

        return;

      }

      alert("Gig created successfully");

      console.log(data);

    } catch (error) {

      console.error(error);

      alert("Error creating gig");

    }

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setImage(reader.result);

    };

    reader.readAsDataURL(file);

  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>Dashboard</h1>

      <h3>Create New Gig</h3>

      <input
        placeholder="Gig title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Gig description"
        onChange={(e) => setDesc(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        onChange={handleImage}
      />

      <br /><br />

      <button onClick={createGig}>
        Create Gig
      </button>

    </div>

  );

}

export default Dashboard;