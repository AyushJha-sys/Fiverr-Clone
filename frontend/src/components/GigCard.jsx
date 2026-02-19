export default function GigCard({ gig }){

  return(

    <div style={{
      background:"#111",
      borderRadius:"10px",
      overflow:"hidden"
    }}>

      <img
        src={gig.image}
        style={{
          width:"100%",
          height:"200px",
          objectFit:"cover"
        }}
      />

      <div style={{padding:"15px",color:"white"}}>

        <h3>{gig.title}</h3>

        <p style={{
          color:"#aaa",
          height:"60px",
          overflow:"hidden"
        }}>
          {gig.description}
        </p>

        <h4 style={{color:"#00ffc8"}}>
          ₹{gig.price}
        </h4>

      </div>

    </div>

  );
}