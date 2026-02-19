export default function Footer(){

  return(

    <footer style={{
      background:"#000",
      padding:"40px",
      marginTop:"50px",
      textAlign:"center"
    }}>

      <h3 style={{color:"#00ffc8"}}>
        Ayush Jha Freelance Marketplace
      </h3>

      <p style={{color:"#aaa"}}>
        Connect with me
      </p>

      <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>

        <a href="https://www.linkedin.com/in/ayush-jha-457144252" target="_blank">
          LinkedIn
        </a>

        <a href="https://github.com/AyushJha-sys" target="_blank">
          GitHub
        </a>

        <a href="https://www.instagram.com/ayush_kashyap.__?igsh=cjd4YWZlMWtrcDJ2" target="_blank">
          Instagram
        </a>

      </div>

    </footer>
  );
}