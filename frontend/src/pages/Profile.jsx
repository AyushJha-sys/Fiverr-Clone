import { useState } from "react";

function Profile() {

  const [image, setImage] = useState(null);

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

      <h1>Profile</h1>

      <img
        src={image || "https://i.pravatar.cc/200"}
        style={{
          width: "200px",
          borderRadius: "50%"
        }}
      />

      <br /><br />

      <input
        type="file"
        onChange={handleImage}
      />

    </div>

  );

}

export default Profile;