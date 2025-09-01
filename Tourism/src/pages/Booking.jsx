import React, { useState } from "react";
import "../App.css";

const services = [
  {
    title: "Adventure Tours",
    img: "/ADVENTURE.jpg",
    desc: "Thrilling experiences in exotic locations, guided by experts.",
    icon: "🌄"
  },
  {
    title: "Mountain Holidays",
    img: "/mountainholiday.jpg",
    desc: "Escape to serene mountain retreats and enjoy breathtaking views.",
    icon: "🏔️"
  },
  {
    title: "Balloon Rides",
    img: "/ballonholidays.jpg",
    desc: "Soar above breathtaking landscapes in hot air balloons.",
    icon: "🎈"
  },
  {
    title: "Bungee Jumping",
    img: "/Bungee_Jumping-1.jpg",
    desc: "Leap into adventure with safe, exhilarating jumps.",
    icon: "🤸"
  },
  {
    title: "Deep Sea Fishing",
    img: "/Deepseafishing.JPG",
    desc: "Catch the big one with our expert-led fishing trips.",
    icon: "🎣"
  },
  {
    title: "River Rafting",
    img: "/rafting.jpg",
    desc: "Navigate wild rivers for an adrenaline rush.",
    icon: "🚣"
  },
  {
    title: "Scuba Diving",
    img: "/scobadiving.JPG",
    desc: "Explore vibrant underwater worlds with certified guides.",
    icon: "🤿"
  },
  {
    title: "Kayaking & Canoeing",
    img: "/Kayakingandcanoeing.jpg",
    desc: "Paddle through scenic waters and discover hidden gems.",
    icon: "🛶"
  },
  {
    title: "Jungle Safari",
    img: "/JUNGLESAFARI.JPG",
    desc: "Witness wildlife in their natural habitat on guided safaris.",
    icon: "🦁"
  },
  {
    title: "City Tours",
    img: "/LOSANGELES.JPG",
    desc: "Discover the culture and sights of world-famous cities.",
    icon: "🏙️"
  },
  {
    title: "Hotel Booking",
    img: "/HOTEL.JPG",
    desc: "Stay in top-rated hotels with exclusive deals.",
    icon: "🏨"
  },
  {
    title: "Travel Insurance",
    img: "/SAFE.JPG",
    desc: "Travel worry-free with comprehensive insurance plans.",
    icon: "🛡️"
  }
];

export default function Booking() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', people: '', requests: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
    setForm({ name: '', email: '', phone: '', date: '', people: '', requests: '' });
    setSuccess('');
    setError('');
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.name || !form.email || !form.phone || !form.date || !form.people) {
      setError('Please fill all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: selectedService?.title })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Booking successful! We will contact you soon.');
        setForm({ name: '', email: '', phone: '', date: '', people: '', requests: '' });
      } else {
        setError(data.message || 'Booking failed.');
      }
    } catch (err) {
      setError('Booking failed. Please try again.');
    }
    setLoading(false);
  };
  return (
    <main>
      <section className="hero">
        <h1>BOOK YOUR PLACE </h1>
        <p>Explore our wide range of travel experiences designed for every adventurer.</p>
      </section>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <img
              src={service.img}
              alt={service.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}
              onError={e => { e.target.src = "/default.jpg"; }}
            />
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'0.5rem',marginTop:'0.5rem'}}>
              {idx < 3 && <span className="badge" style={{background:'#f7b731',color:'#14375a',borderRadius:'6px',padding:'2px 10px',fontWeight:'700',fontSize:'0.95em'}}>Popular</span>}
              <span style={{color:'#ffb400',fontSize:'1.1em'}}>★ ★ ★ ★ ☆</span>
            </div>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <button className="service-btn" style={{marginTop:'1rem',background:'#14375a',color:'#fff',border:'none',borderRadius:'8px',padding:'10px 22px',fontWeight:'700',fontSize:'1em',cursor:'pointer',boxShadow:'0 2px 8px rgba(20,55,90,0.08)',transition:'background 0.2s'}} onClick={() => openModal(service)}>Book Now</button>
          </div>
        ))}
      </div>
      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay" style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(20,55,90,0.18)',zIndex:999,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className="modal-content" style={{background:'#fff',borderRadius:'18px',boxShadow:'0 8px 32px rgba(20,55,90,0.18)',padding:'2.5rem 2rem',maxWidth:'420px',width:'100%',position:'relative'}}>
            <button onClick={closeModal} style={{position:'absolute',top:'18px',right:'18px',background:'none',border:'none',fontSize:'1.5em',color:'#14375a',cursor:'pointer'}}>×</button>
            <h2 style={{textAlign:'center',color:'#14375a',marginBottom:'1rem'}}>Book: {selectedService?.title}</h2>
            <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
              <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
              <input name="phone" type="tel" placeholder="Your Phone" value={form.phone} onChange={handleChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
              <input name="date" type="date" placeholder="Date" value={form.date} onChange={handleChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
              <input name="people" type="number" min="1" placeholder="Number of People" value={form.people} onChange={handleChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
              <textarea name="requests" placeholder="Special Requests (optional)" value={form.requests} onChange={handleChange} style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc',minHeight:'60px'}} />
              {error && <div style={{color:'red',fontWeight:'600'}}>{error}</div>}
              {loading ? (
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <div className="spinner" style={{width:'38px',height:'38px',border:'5px solid #eaf7ff',borderTop:'5px solid #25D366',borderRadius:'50%',animation:'spin 1s linear infinite'}}></div>
                </div>
              ) : (
                <button type="submit" style={{background:'#14375a',color:'#fff',fontWeight:'700',borderRadius:'8px',padding:'12px',marginTop:'8px'}}>Submit Booking</button>
              )}
              {success && <div style={{color:'#25D366',fontWeight:'700',marginTop:'8px'}}>{success}</div>}
            </form>
          </div>
        </div>
      )}
      {/* ...existing testimonials and styles... */}
      <div className="testimonials-slider" style={{margin:'3rem auto 2rem auto',maxWidth:'900px',background:'#fff',borderRadius:'18px',boxShadow:'0 4px 24px rgba(20,55,90,0.08)',padding:'2rem'}}>
        <h2 style={{textAlign:'center',color:'#14375a',marginBottom:'1.5rem'}}>What Our Customers Say</h2>
        <div style={{display:'flex',gap:'2rem',justifyContent:'center',flexWrap:'wrap'}}>
          <div style={{background:'#f7f7f7',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1.2rem',textAlign:'center',width:'220px'}}>
            <div style={{fontWeight:'700',fontSize:'1.1em',color:'#3a5a7c'}}>&quot;Amazing adventure tours! Highly recommended.&quot;</div>
            <div style={{fontSize:'0.95em',color:'#14375a',marginTop:'8px'}}>- Priya S.</div>
          </div>
          <div style={{background:'#f7f7f7',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1.2rem',textAlign:'center',width:'220px'}}>
            <div style={{fontWeight:'700',fontSize:'1.1em',color:'#3a5a7c'}}>&quot;Best hotel deals and friendly staff!&quot;</div>
            <div style={{fontSize:'0.95em',color:'#14375a',marginTop:'8px'}}>- Amit R.</div>
          </div>
          <div style={{background:'#f7f7f7',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1.2rem',textAlign:'center',width:'220px'}}>
            <div style={{fontWeight:'700',fontSize:'1.1em',color:'#3a5a7c'}}>&quot;Loved the river rafting experience!&quot;</div>
            <div style={{fontSize:'0.95em',color:'#14375a',marginTop:'8px'}}>- Khushal M.</div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          padding: 2rem 1rem;
        }
        .service-card {
          background: rgba(255,255,255,0.95);
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(20,55,90,0.10);
          padding: 2rem 1.2rem;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 12px 36px rgba(20,55,90,0.18);
        }
        .badge {
          box-shadow: 0 2px 8px rgba(247,183,49,0.12);
        }
        .service-btn {
          box-shadow: 0 2px 8px rgba(20,55,90,0.08);
        }
        .service-icon {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }
        .service-card h2 {
          margin: 1rem 0 0.5rem;
          font-size: 1.25rem;
          color: #1a3556;
        }
        .service-card p {
          font-size: 1rem;
          color: #444;
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.2rem;
            padding: 1.2rem 0.5rem;
          }
          .service-card {
            padding: 1rem 0.5rem;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 0.5rem;
          }
          .service-card {
            padding: 0.7rem 0.2rem;
          }
          .service-card h2 {
            font-size: 1.1rem;
          }
          .service-icon {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </main>
  );
}
