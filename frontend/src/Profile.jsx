import { useState } from "react";

function Profile(){

  const [image,setImage]=useState(null);

  const upload=(e)=>{

    const file=e.target.files[0];

    setImage(URL.createObjectURL(file));

  };

  return(

    <div style={{padding:"40px"}}>

      <h2>Profile</h2>

      <img
        src={image || "https://i.pravatar.cc/150"}
        style={{
          width:"150px",
          height:"150px",
          borderRadius:"50%"
        }}
      />

      <br/><br/>

      <input type="file" onChange={upload}/>

    </div>

  );

}

export default Profile;