

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

export function AnimatedWelcomePopup() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(20,55,90,0.18)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fffbe6',borderRadius:'22px',boxShadow:'0 4px 32px rgba(10,61,98,0.18)',padding:'48px 32px',textAlign:'center',animation:'popupIn 0.8s cubic-bezier(.68,-0.55,.27,1.55)'}}>
        <h2 style={{color:'#14375a',fontWeight:'900',fontSize:'2.2em',marginBottom:'12px'}}>Welcome to Tourism!</h2>
        <p style={{color:'#3a5a7c',fontSize:'1.15em',marginBottom:'18px'}}>Discover your next adventure. Special offers available now!</p>
        <span style={{fontSize:'2.5em'}}>🌍✨</span>
      </div>
      <style>{`
        @keyframes popupIn {
          0% { opacity:0; transform:scale(0.7); }
          100% { opacity:1; transform:scale(1); }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatedWelcomePopup />
  <header className="main-header" style={{background:'#fffbe6',boxShadow:'0 2px 18px rgba(10,61,98,0.08)',borderRadius:'22px 22px 0 0',position:'relative',marginBottom:'24px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 32px',height:'90px',width:'100vw',maxWidth:'100vw',overflow:'hidden'}}>
        <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle'}}>
            <circle cx="19" cy="19" r="18" fill="#f7b731" stroke="#14375a" strokeWidth="2" />
            <path d="M12 24C14 18 24 18 26 24" stroke="#14375a" strokeWidth="2" strokeLinecap="round" />
            <circle cx="19" cy="16" r="4" fill="#fffbe6" stroke="#14375a" strokeWidth="2" />
          </svg>
          <span style={{fontWeight:'900',fontSize:'2em',color:'#14375a',letterSpacing:'-2px',fontFamily:'Montserrat, sans-serif'}}>Tourism</span>
        </span>
        <button className="nav-toggle" aria-label="Toggle navigation" style={{display:'none',position:'absolute',top:'24px',right:'24px',background:'none',border:'none',cursor:'pointer',zIndex:1001}} onClick={()=>{
          const nav = document.querySelector('.navbar');
          if(nav.style.display==='block') nav.style.display='none';
          else nav.style.display='block';
        }}>
          <span style={{display:'block',width:'28px',height:'4px',background:'#14375a',margin:'6px 0',borderRadius:'2px'}}></span>
          <span style={{display:'block',width:'28px',height:'4px',background:'#14375a',margin:'6px 0',borderRadius:'2px'}}></span>
          <span style={{display:'block',width:'28px',height:'4px',background:'#14375a',margin:'6px 0',borderRadius:'2px'}}></span>
        </button>
        <nav className="navbar" style={{background:'none',boxShadow:'none',width:'100%'}}>
          <ul className="nav-list" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'32px',margin:0,padding:0,listStyle:'none',width:'100%'}}>
            <li><Link to="/" style={{fontWeight:'600',fontSize:'1.08em',color:'#14375a',textDecoration:'none',padding:'8px 18px',borderRadius:'6px',transition:'background 0.2s'}}>Home</Link></li>
            <li><Link to="/booking" style={{fontWeight:'600',fontSize:'1.08em',color:'#14375a',textDecoration:'none',padding:'8px 18px',borderRadius:'6px',transition:'background 0.2s'}}>Booking</Link></li>
            <li><Link to="/gallery" style={{fontWeight:'600',fontSize:'1.08em',color:'#14375a',textDecoration:'none',padding:'8px 18px',borderRadius:'6px',transition:'background 0.2s'}}>Gallery</Link></li>
            <li><Link to="/contact" style={{fontWeight:'600',fontSize:'1.08em',color:'#14375a',textDecoration:'none',padding:'8px 18px',borderRadius:'6px',transition:'background 0.2s'}}>Contact</Link></li>
            <li><Link to="/help" style={{fontWeight:'600',fontSize:'1.08em',color:'#14375a',textDecoration:'none',padding:'8px 18px',borderRadius:'6px',transition:'background 0.2s'}}>Help</Link></li>
          </ul>
        </nav>
        <style>{`
          @media (max-width: 900px) {
            .navbar .nav-list {
              flex-direction: column;
              gap: 0;
              background: #fffbe6;
              box-shadow: 0 2px 18px rgba(10,61,98,0.08);
              border-radius: 0 0 22px 22px;
              position: absolute;
              top: 90px;
              right: 0;
              width: 100vw;
              padding: 24px 0;
              display: none;
              z-index: 1000;
            }
            .nav-toggle {
              display: block !important;
            }
            .main-header {
              flex-direction: column;
              height: auto;
              padding: 0 12px;
            }
          }
          @media (max-width: 600px) {
            .main-header {
              padding: 0 4px;
            }
            .navbar .nav-list {
              padding: 18px 0;
            }
            .nav-list li a {
              font-size: 1em;
              padding: 8px 8px;
            }
          }
          body, html, #root {
            width: 100vw;
            max-width: 100vw;
            overflow-x: hidden;
          }
        `}</style>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
  <footer style={{background:'#f7f7fa',color:'#14375a',padding:'32px 0 18px 0',marginTop:'48px',textAlign:'center',borderRadius:'22px 22px 0 0',boxShadow:'0 -2px 18px rgba(10,61,98,0.08)',width:'100vw',maxWidth:'100vw'}}>
        <div style={{marginBottom:'12px'}}>
          <a href="#" style={{margin:'0 12px',color:'#14375a'}}>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" style={{width:'22px',height:'22px',verticalAlign:'middle'}} />
          </a>
          <a href="#" style={{margin:'0 12px',color:'#14375a'}}>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" style={{width:'22px',height:'22px',verticalAlign:'middle'}} />
          </a>
          <a href="#" style={{margin:'0 12px',color:'#14375a'}}>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" style={{width:'22px',height:'22px',verticalAlign:'middle'}} />
          </a>
        </div>
        <div style={{fontSize:'1.08em'}}>&copy; 2025 Aspire to Inspire. All rights reserved.</div>
      </footer>
    </Router>
  );
}

export default App;
