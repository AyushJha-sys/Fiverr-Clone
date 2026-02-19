export default function Features(){

const features = [

"🚀 Create and publish gigs instantly",
"🔐 Secure login and registration system",
"💳 QR code based payments",
"🧠 Dynamic gig loading from database",
"⚡ Fast performance using React",
"🌐 Global freelance marketplace",
"📊 Personal dashboard for gig management",
"📱 Fully responsive modern design",
"🖼️ Image support for gigs",
"🔎 Easy browsing of services",
"🧾 Professional portfolio showcase",
"💼 Perfect for freelancers and clients",
"🎯 Built using MERN stack technology"

];

return(

<div style={{
padding:"60px",
color:"white",
minHeight:"100vh"
}}>

<h1 style={{color:"#00ffc8"}}>
Platform Features
</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"20px",
marginTop:"40px"
}}>

{features.map((feature,index)=>(

<div key={index}
style={{
background:"#111",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 0 15px rgba(0,255,200,0.2)"
}}>

{feature}

</div>

))}

</div>

</div>

);

}