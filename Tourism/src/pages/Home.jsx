
import React, { useState } from "react";
import { Link } from "react-router-dom";

const featuredDestinations = [
  {img:'/WONDERSOFTHEWORLD.JPG',title:'Wonders of the World',desc:'See the most iconic wonders on earth with our curated tours.'},
  {img:'/AIRTRAVELLING.JPG',title:'Air Travelling',desc:'Fly in comfort and style to your dream destinations.'},
  {img:'/ADVENTURE.jpg',title:'Adventure',desc:'Experience thrilling adventures and outdoor activities.'},
  {img:'/BGHAWAII.JPG',title:'Hawaii',desc:'Relax on the world’s most beautiful beaches.'},
  {img:'/BGINDIA.JPG',title:'India',desc:'Explore vibrant culture and history.'}
];

const galleryPreview = [
  {src:'/BORABORA.JPG', name:'Bora Bora'},
  {src:'/BGPARIS.JPG', name:'Paris'},
  {src:'/BGROME.jpg', name:'Rome'},
  {src:'/BGLOS.JPG', name:'Los Angeles'},
  {src:'/BGJUMP.JPG', name:'Bungee Jump'},
  {src:'/BGHAWAII.JPG', name:'Hawaii'},
  {src:'/BGINDIA.JPG', name:'India'},
  {src:'/WONDERSOFTHEWORLD.JPG', name:'Wonders of the World'},
  {src:'/AIRTRAVELLING.JPG', name:'Air Travelling'},
  {src:'/ADVENTURE.jpg', name:'Adventure'}
];

const testimonials = [
  {text:'“The best travel experience ever! Everything was perfectly organized.”',author:'Priya S.'},
  {text:'“Amazing destinations and friendly staff. Highly recommended!”',author:'Amit R.'},
  {text:'“I loved the adventure package! Will book again.”',author:'Khushal M.'}
];

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [newsletterMsg, setNewsletterMsg] = useState("");

  // Carousel logic
  const nextTestimonial = () => setTestimonialIdx((testimonialIdx+1)%testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((testimonialIdx-1+testimonials.length)%testimonials.length);

  // Newsletter logic
  const handleNewsletter = e => {
    e.preventDefault();
    setNewsletterMsg("Thank you for subscribing!");
    setTimeout(()=>setNewsletterMsg(""), 3000);
  };

  return (
  <main style={{backgroundImage: "url('/index1.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundAttachment: "fixed", backgroundSize: "cover", margin:0, position:'relative', padding:0, boxSizing:'border-box', minHeight:'100vh', width:'100vw'}}>
      {/* Animated gradient background */}
      <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:-1,pointerEvents:'none'}}>
        <div className="animated-bg" style={{width:'100vw',height:'100vh',background:'linear-gradient(120deg,rgba(247,183,49,0.18) 0%,rgba(10,61,98,0.12) 100%)'}}></div>
      </div>
      {/* Hero Section */}
      <section className="hero" style={{position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'60vh'}}>
        <div style={{background:'rgba(255,255,255,0.22)',backdropFilter:'blur(12px)',borderRadius:'24px',padding:'48px 32px',boxShadow:'0 4px 32px rgba(10,61,98,0.12)',maxWidth:'700px',width:'100%',textAlign:'center',marginTop:'48px'}}>
          <h1 style={{animation:'fadeInDown 1s cubic-bezier(.68,-0.55,.27,1.55)',fontSize:'3.2em',fontWeight:'800',color:'#14375a',letterSpacing:'-2px'}}>Welcome, Explorer!</h1>
          <p style={{animation:'fadeInUp 1.2s cubic-bezier(.68,-0.55,.27,1.55)',fontSize:'1.35em',maxWidth:'600px',margin:'0 auto 18px auto',color:'#3a5a7c'}}>Your adventure starts here. We make travel easy, safe, and unforgettable. Browse our curated experiences and let us help you create memories for a lifetime!</p>
          <Link to="/services" className="cta-btn" style={{animation:'fadeInUp 1.5s cubic-bezier(.68,-0.55,.27,1.55)',fontSize:'1.2em',background:'#f7b731',color:'#14375a',padding:'14px 38px',borderRadius:'8px',fontWeight:'700',boxShadow:'0 2px 12px rgba(247,183,49,0.12)',textDecoration:'none',marginTop:'18px',display:'inline-block',transition:'background 0.2s'}}>
            <span style={{marginRight:'10px',fontSize:'1.3em'}}>🌍</span>Start Your Journey
          </Link>
        </div>
        <div style={{position:'absolute',top:'-60px',right:'-60px',width:'180px',height:'180px',background:'radial-gradient(circle,#f7b731 60%,#fff0 100%)',borderRadius:'50%',zIndex:0,animation:'popIn 1.2s cubic-bezier(.68,-0.55,.27,1.55)'}}></div>
        {/* Stats with social proof badges */}
        <div style={{display:'flex',justifyContent:'center',gap:'38px',marginTop:'48px'}}>
          {[{label:'Trips Organized',value:'120+'},{label:'Happy Customers',value:'500+'},{label:'Destinations',value:'35+'}].map((stat,i)=>(
            <div key={stat.label} style={{background:'rgba(255,255,255,0.22)',backdropFilter:'blur(8px)',borderRadius:'16px',padding:'22px 38px',boxShadow:'0 2px 12px rgba(10,61,98,0.07)',textAlign:'center',minWidth:'160px',animation:`fadeInUp ${1.2+i*0.1}s cubic-bezier(.68,-0.55,.27,1.55)`}}>
              <span style={{fontSize:'2.4em',fontWeight:800,color:'#f7b731',letterSpacing:'-1px'}}>{stat.value}</span><br/>
              <span style={{fontSize:'1.15em',color:'#14375a',fontWeight:'600'}}>{stat.label}</span>
              {stat.label==='Happy Customers' && <span style={{display:'block',marginTop:'8px',fontSize:'0.98em',color:'#0a3d62',fontWeight:'700',background:'#eaf7ff',borderRadius:'6px',padding:'2px 8px'}}>Trusted by 500+ customers</span>}
            </div>
          ))}
        </div>
      </section>
      {/* Featured Destinations Carousel */}
  <section className="features" id="featured-destinations" style={{marginTop:'56px',display:'flex',gap:'32px',justifyContent:'center',flexWrap:'wrap',overflowX:'auto',alignItems:'flex-end'}}>
        {featuredDestinations.map((f,i)=>(
          <div key={f.title} className="feature-card" style={{animation:`fadeInUp ${1.1+i*0.1}s cubic-bezier(.68,-0.55,.27,1.55)`,background:'rgba(255,255,255,0.22)',backdropFilter:'blur(8px)',borderRadius:'18px',padding:'18px',boxShadow:'0 2px 12px rgba(10,61,98,0.07)',width:'260px',minWidth:'260px',height:'370px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',textAlign:'center',transition:'transform 0.2s',cursor:'pointer',marginBottom:'18px'}}>
            <img 
              src={f.img} 
              alt={f.title} 
              className="feature-img" 
              style={{width:'220px',height:'150px',objectFit:'cover',borderRadius:'14px',marginBottom:'12px'}} 
              loading="lazy" 
              onError={e => {
                if (f.title === 'Adventure') {
                  e.target.onerror = null;
                  e.target.src = '/default-adventure.jpg'; // fallback image, place in public folder
                }
              }}
            />
            <Link to="/gallery" className="feature-link" style={{fontWeight:'700',fontSize:'1.15em',color:'#14375a',textDecoration:'none'}}>{f.title}</Link>
            <p style={{fontSize:'0.98em',color:'#14375a',marginTop:'8px'}}>{f.desc}</p>
          </div>
        ))}
      </section>
      {/* Gallery Preview */}
      <section style={{maxWidth:'1100px',margin:'56px auto 0 auto',textAlign:'center',background:'rgba(255,255,255,0.18)',backdropFilter:'blur(6px)',borderRadius:'22px',boxShadow:'0 4px 24px rgba(10,61,98,0.10)',padding:'32px 0'}}>
        <h2 style={{color:'#0a3d62',marginBottom:'28px',fontSize:'2em',fontWeight:'800',letterSpacing:'-1px'}}>Gallery Preview</h2>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
          gap:'28px',
          justifyContent:'center',
          alignItems:'center',
          padding:'0 32px',
          marginBottom:'18px'
        }}>
          {galleryPreview.map((img,i)=>(
            <div key={img.src} className="gallery-card" style={{
              background:'rgba(255,255,255,0.18)',
              borderRadius:'16px',
              boxShadow:'0 2px 16px rgba(10,61,98,0.10)',
              padding:'0',
              transition:'box-shadow 0.2s',
              cursor:'pointer',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              position:'relative',
              overflow:'hidden',
              minHeight:'180px'
            }}>
              <img src={img.src} alt={img.name} style={{width:'220px',height:'140px',objectFit:'cover',borderRadius:'14px',boxShadow:'0 2px 8px rgba(10,61,98,0.08)',margin:'16px 0 8px 0',transition:'transform 0.25s'}} loading="lazy" />
              <span className="gallery-float-name" style={{
                position:'absolute',
                left:'50%',
                bottom:'18px',
                transform:'translateX(-50%)',
                background:'rgba(20,55,90,0.82)',
                color:'#fff',
                fontWeight:'600',
                fontSize:'1em',
                padding:'7px 18px',
                borderRadius:'12px',
                opacity:0,
                transition:'opacity 0.3s',
                boxShadow:'0 2px 8px rgba(10,61,98,0.10)',
                pointerEvents:'none',
                letterSpacing:'0.5px'
              }}>{img.name}</span>
            </div>
          ))}
        </div>
        <Link to="/gallery" style={{display:'inline-block',marginTop:'18px',fontWeight:'700',color:'#f7b731',fontSize:'1.18em',textDecoration:'none',background:'#14375a',padding:'10px 32px',borderRadius:'8px',boxShadow:'0 2px 12px rgba(10,61,98,0.10)',transition:'background 0.2s'}}>View All</Link>
      </section>
      {/* Testimonials Slider */}
      <section style={{maxWidth:'900px',margin:'48px auto 0 auto'}}>
        <h2 style={{textAlign:'center',color:'#0a3d62',marginBottom:'24px'}}>What Our Customers Say</h2>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'18px'}}>
          <button aria-label="Previous" onClick={prevTestimonial} style={{background:'none',border:'none',fontSize:'2em',color:'#14375a',cursor:'pointer'}}>&#8592;</button>
          <div style={{background:'rgba(255,255,255,0.22)',backdropFilter:'blur(8px)',borderRadius:'14px',padding:'18px 22px',boxShadow:'0 2px 12px rgba(10,61,98,0.07)',maxWidth:'320px',animation:'fadeInUp 1.2s cubic-bezier(.68,-0.55,.27,1.55)'}}>
            <p style={{fontSize:'1.08em',color:'#14375a'}}>{testimonials[testimonialIdx].text}</p>
            <span style={{fontWeight:700,color:'#f7b731'}}>- {testimonials[testimonialIdx].author}</span>
          </div>
          <button aria-label="Next" onClick={nextTestimonial} style={{background:'none',border:'none',fontSize:'2em',color:'#14375a',cursor:'pointer'}}>&#8594;</button>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section style={{maxWidth:'700px',margin:'48px auto 0 auto',textAlign:'center'}}>
        <h2 style={{color:'#0a3d62'}}>Subscribe to Our Newsletter</h2>
        <form style={{display:'flex',flexDirection:'column',gap:'14px',alignItems:'center',marginTop:'18px'}} onSubmit={handleNewsletter}>
          <input type="email" placeholder="Your email address" style={{padding:'12px',width:'80%',borderRadius:'8px',border:'1px solid #ccc'}} required />
          <button type="submit" className="cta-btn" style={{width:'85%',marginTop:'10px',background:'#f7b731',color:'#14375a',fontWeight:'700',borderRadius:'8px'}}>Subscribe</button>
        </form>
        {newsletterMsg && <div style={{marginTop:'12px',color:'#0a3d62',fontWeight:'700',fontSize:'1.08em'}}>{newsletterMsg}</div>}
      </section>
  {/* Footer removed. Only global footer in App.jsx remains. */}
      {/* Floating Contact Button */}
      <Link to="/contact" style={{position:'fixed',bottom:'32px',right:'32px',zIndex:99,background:'#f39c12',color:'#fff',borderRadius:'50%',width:'62px',height:'62px',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 18px rgba(243,156,18,0.18)',fontSize:'2em',textDecoration:'none',transition:'background 0.2s'}} title="Contact Us" aria-label="Contact Us">&#9993;</Link>
      <style>{`
        @media (max-width: 900px) {
          main {
            padding: 0 !important;
            min-width: 100vw;
          }
          .hero > div {
            padding: 32px 12px !important;
            max-width: 98vw !important;
          }
          .features {
            gap: 18px !important;
          }
          .feature-card {
            width: 98vw !important;
            min-width: 220px !important;
            max-width: 98vw !important;
            height: auto !important;
            margin-bottom: 18px !important;
            padding: 12px !important;
          }
          .feature-img {
            width: 98vw !important;
            max-width: 320px !important;
            height: 120px !important;
          }
          .gallery-card {
            min-width: 180px !important;
            max-width: 98vw !important;
            margin: 0 auto 18px auto !important;
          }
          .gallery-card img {
            width: 98vw !important;
            max-width: 320px !important;
            height: 100px !important;
          }
          .gallery-float-name {
            font-size: 0.98em !important;
            padding: 6px 10px !important;
          }
          section {
            padding: 0 4px !important;
          }
        }
        @media (max-width: 600px) {
          .hero > div {
            padding: 18px 2px !important;
            font-size: 1em !important;
          }
          h1 {
            font-size: 2em !important;
          }
          .features {
            gap: 8px !important;
          }
          .feature-card {
            min-width: 160px !important;
            max-width: 98vw !important;
            padding: 8px !important;
          }
          .feature-img {
            width: 98vw !important;
            max-width: 220px !important;
            height: 80px !important;
          }
          .gallery-card img {
            width: 98vw !important;
            max-width: 220px !important;
            height: 70px !important;
          }
          .gallery-float-name {
            font-size: 0.88em !important;
            padding: 4px 6px !important;
          }
          section {
            padding: 0 2px !important;
          }
        }
        .gallery-card:hover .gallery-float-name {
          opacity: 1;
        }
        .gallery-card:hover img {
          transform: scale(1.04);
          filter: brightness(0.97) saturate(1.1);
        }
        @keyframes fadeInDown {
          0% { opacity:0; transform:translateY(-40px); }
          100% { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity:0; transform:translateY(40px); }
          100% { opacity:1; transform:translateY(0); }
        }
        @keyframes popIn {
          0% { opacity:0; transform:scale(0.5); }
          100% { opacity:1; transform:scale(1); }
        }
        .animated-bg {
          animation: gradientMove 8s ease-in-out infinite alternate;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </main>
  );
}
