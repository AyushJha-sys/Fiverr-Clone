export default function About(){

  return(

    <div style={{
      padding:"60px",
      background:"#0f0f0f",
      minHeight:"100vh",
      color:"white"
    }}>

      <h1 style={{color:"#00ffc8"}}>
        About This Platform
      </h1>

      <p style={{marginTop:"20px",lineHeight:"1.6"}}>

        This is a modern freelance marketplace built by Ayush Jha using
        React, Node.js, MongoDB, and Express.

        This platform allows freelancers to create gigs and clients to
        hire services securely using QR-based payments.

      </p>

      <h2 style={{marginTop:"40px",color:"#00ffc8"}}>
        About Me
      </h2>

      <p style={{marginTop:"20px",lineHeight:"1.6"}}>

        I am Ayush Jha, a Full Stack Developer specializing in modern
        web applications.

        I build scalable, secure, and high-performance applications
        using MERN stack and modern deployment tools like Vercel and Render.

      </p>

    </div>

  );

}