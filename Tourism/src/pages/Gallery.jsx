import React, { useState } from "react";
import "../App.css";

const galleryImages = [
  { src: "/BGHAWAII.JPG", title: "Hawaii Beach" },
  { src: "/BGINDIA.JPG", title: "Indian Heritage" },
  { src: "/BGROME.jpg", title: "Rome Ruins" },
  { src: "/BGLOS.JPG", title: "Los Angeles City" },
  { src: "/BGJUMP.JPG", title: "Bungee Adventure" },
  { src: "/BORABORA.JPG", title: "Bora Bora Paradise" },
  { src: "/BGPARIS.JPG", title: "Paris Landmarks" },
  { src: "/BGOD7WONDERSOFWORLD.JPG", title: "Wonders of the World" },
  { src: "/BGDUBAI.JPG", title: "Dubai Skyline" },
  { src: "/BGGREECE.JPG", title: "Greece Islands" },
  { src: "/ADVENTURE.jpg", title: "Adventure" },
  { src: "/beachday.jpg", title: "Beach Day" },
  { src: "/trekking.jpg", title: "Trekking" },
  { src: "/rafting.jpg", title: "Rafting" },
  { src: "/riverrafting.jpg", title: "River Rafting" },
  { src: "/natureimg.jpg", title: "Nature" },
  { src: "/mountainholiday.jpg", title: "Mountain Holiday" },
  { src: "/IMG1.JPG", title: "Swiss Alps" },
  { src: "/IMG2.JPG", title: "Santorini Cliffs" },
  { src: "/IMG3.JPG", title: "Safari Adventure" },
  { src: "/IMG4.JPG", title: "Venice Canals" },
  { src: "/IMG5.JPG", title: "Himalayan Trek" },
  { src: "/IMG6.JPG", title: "Maldives Beach" },
  { src: "/IMG7.JPG", title: "Grand Canyon" },
  { src: "/IMG8.JPG", title: "Paris Streets" },
  { src: "/IMG9.JPG", title: "Dubai Desert" },
  { src: "/IMG10.JPG", title: "London Bridge" },
  { src: "/IMG11.JPG", title: "New York Skyline" },
  { src: "/ballonholidays.jpg", title: "Balloon Holidays" },
  { src: "/Kayakingandcanoeing.jpg", title: "Kayaking & Canoeing" },
  { src: "/bgnewzealand.jpg", title: "New Zealand" },
];

const categories = [
  "All",
  "Beach",
  "Adventure",
  "City",
  "Nature",
  "Mountain",
  "Rafting",
  "Balloon",
];

function getCategory(title) {
  if (/beach/i.test(title)) return "Beach";
  if (/adventure|bungee|trek|rafting/i.test(title)) return "Adventure";
  if (/city|paris|rome|london|new york|los angeles/i.test(title)) return "City";
  if (/nature|island|greece|new zealand/i.test(title)) return "Nature";
  if (/mountain/i.test(title)) return "Mountain";
  if (/raft/i.test(title)) return "Rafting";
  if (/balloon/i.test(title)) return "Balloon";
  return "Other";
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);
  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => getCategory(img.title) === selectedCategory);

  return (
    <main>
      <section className="hero">
        <h1>LETS EXPLORE !</h1>
        <p>Enjoy our travel gallery and relive the best moments from our adventures around the world!</p>
      </section>
      <div style={{display:'flex',gap:'1rem',margin:'1.5rem 0',flexWrap:'wrap',justifyContent:'center'}}>
        {categories.map(cat => (
          <button key={cat} onClick={()=>setSelectedCategory(cat)} style={{background:selectedCategory===cat?'#14375a':'#fffbe6',color:selectedCategory===cat?'#fff':'#14375a',border:'none',borderRadius:'8px',padding:'8px 18px',fontWeight:'700',fontSize:'1em',cursor:'pointer',boxShadow:'0 2px 8px rgba(20,55,90,0.08)',transition:'background 0.2s'}}>{cat}</button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredImages.map((img) => (
          <div className="gallery-item" key={img.src} onClick={()=>setLightboxImg(img)} style={{cursor:'pointer'}}>
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0 4px 18px rgba(0,0,0,0.13)"
              }}
              onError={e => { e.target.src = "/default.jpg"; }}
            />
            <div className="gallery-overlay">{img.title}</div>
          </div>
        ))}
      </div>
      {lightboxImg && (
        <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(20,55,90,0.18)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setLightboxImg(null)}>
          <div style={{background:'#fff',borderRadius:'18px',boxShadow:'0 8px 32px rgba(20,55,90,0.18)',padding:'2rem',maxWidth:'700px',width:'90%',position:'relative'}} onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setLightboxImg(null)} style={{position:'absolute',top:'18px',right:'18px',background:'none',border:'none',fontSize:'1.5em',color:'#14375a',cursor:'pointer'}}>×</button>
            <img src={lightboxImg.src} alt={lightboxImg.title} style={{width:'100%',maxHeight:'60vh',objectFit:'contain',borderRadius:'12px'}} />
            <div style={{marginTop:'1rem',fontWeight:'700',fontSize:'1.2em',color:'#14375a'}}>{lightboxImg.title}</div>
          </div>
        </div>
      )}
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          padding: 2.5rem 1rem;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.13);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .gallery-item:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 32px rgba(0,0,0,0.16);
        }
        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(90deg, #14375a 60%, #3a5a7c 100%);
          color: #fff;
          font-size: 1.18rem;
          font-weight: 600;
          padding: 1rem 1.2rem;
          opacity: 0.92;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
          transition: background 0.2s;
        }
        .gallery-item:hover .gallery-overlay {
          background: linear-gradient(90deg, #3a5a7c 60%, #14375a 100%);
        }
        @media (max-width: 1200px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (max-width: 800px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .gallery-item img {
            height: 180px !important;
          }
        }
      `}</style>
    </main>
  );
}
