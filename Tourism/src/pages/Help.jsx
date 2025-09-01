import React, { useState } from "react";

export default function Help() {
  const [faqOpen, setFaqOpen] = useState([false, false, false]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleFaq = idx => {
    setFaqOpen(faqOpen.map((open, i) => (i === idx ? !open : open)));
  };
  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    setFormError('');
    if (!form.name || !form.email || !form.message) {
      setFormError('Please fill all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSuccess('Message sent! Our support team will contact you soon.');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setFormSuccess(''), 3000);
    }, 1500);
  };
  return (
    <main>
      <section className="hero">
        <h1>Help & Support</h1>
        <p>Need assistance? Browse our help resources or contact our support team for quick answers to your travel questions.</p>
      </section>
      <div className="help-content">
        <h2 style={{textAlign:'center',color:'#14375a',marginBottom:'1.2rem'}}>Frequently Asked Questions</h2>
        <div className="faq-section" style={{maxWidth:'600px',margin:'0 auto 2rem auto'}}>
          <div style={{marginBottom:'1rem',borderRadius:'8px',background:'#f7f7f7',boxShadow:'0 1px 4px rgba(0,0,0,0.05)'}}>
            <button onClick={()=>toggleFaq(0)} style={{width:'100%',textAlign:'left',padding:'12px',fontWeight:'700',background:'none',border:'none',fontSize:'1.1em',color:'#14375a',cursor:'pointer'}} aria-expanded={faqOpen[0]}>How do I book a tour?</button>
            {faqOpen[0] && <div style={{padding:'12px',color:'#444'}}>You can book online from our Services page, call us, or WhatsApp for instant booking and support.</div>}
          </div>
          <div style={{marginBottom:'1rem',borderRadius:'8px',background:'#f7f7f7',boxShadow:'0 1px 4px rgba(0,0,0,0.05)'}}>
            <button onClick={()=>toggleFaq(1)} style={{width:'100%',textAlign:'left',padding:'12px',fontWeight:'700',background:'none',border:'none',fontSize:'1.1em',color:'#14375a',cursor:'pointer'}} aria-expanded={faqOpen[1]}>What payment methods are accepted?</button>
            {faqOpen[1] && <div style={{padding:'12px',color:'#444'}}>We accept credit/debit cards, UPI, net banking, and cash on arrival.</div>}
          </div>
          <div style={{marginBottom:'1rem',borderRadius:'8px',background:'#f7f7f7',boxShadow:'0 1px 4px rgba(0,0,0,0.05)'}}>
            <button onClick={()=>toggleFaq(2)} style={{width:'100%',textAlign:'left',padding:'12px',fontWeight:'700',background:'none',border:'none',fontSize:'1.1em',color:'#14375a',cursor:'pointer'}} aria-expanded={faqOpen[2]}>Is my booking refundable?</button>
            {faqOpen[2] && <div style={{padding:'12px',color:'#444'}}>Most bookings are refundable up to 48 hours before departure. Contact us for details.</div>}
          </div>
        </div>
        <h2 style={{textAlign:'center',color:'#14375a',marginBottom:'1.2rem'}}>Contact Support</h2>
        <form className="help-form" style={{margin:'0 auto',maxWidth:'400px',display:'flex',flexDirection:'column',gap:'1rem'}} onSubmit={handleFormSubmit}>
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleFormChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleFormChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleFormChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc',minHeight:'80px'}} />
          {formError && <div style={{color:'red',fontWeight:'600'}}>{formError}</div>}
          {loading ? (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div className="spinner" style={{width:'38px',height:'38px',border:'5px solid #eaf7ff',borderTop:'5px solid #25D366',borderRadius:'50%',animation:'spin 1s linear infinite'}}></div>
            </div>
          ) : (
            <button type="submit" style={{background:'#14375a',color:'#fff',fontWeight:'700',borderRadius:'8px',padding:'12px'}}>Send Message</button>
          )}
          {formSuccess && <div style={{color:'#25D366',fontWeight:'700',marginTop:'8px'}}>{formSuccess}</div>}
        </form>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .hero {
          text-align: center;
          padding: 2.5rem 1rem 1.5rem 1rem;
        }
        .hero h1 {
          font-size: 2.2rem;
          color: #1a3556;
          margin-bottom: 0.7rem;
        }
        .hero p {
          font-size: 1.15rem;
          color: #3a5a7c;
        }
        .help-content {
          max-width: 600px;
          margin: 2rem auto;
          background: rgba(255,255,255,0.85);
          border-radius: 14px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          padding: 2rem 1.5rem;
        }
        .help-content ul {
          list-style: disc inside;
          font-size: 1.1rem;
          color: #444;
          padding-left: 0;
        }
        .help-content li {
          margin-bottom: 0.7rem;
        }
        @media (max-width: 700px) {
          .help-content {
            padding: 1.2rem 0.7rem;
            margin: 1.2rem auto;
          }
          .hero h1 {
            font-size: 1.5rem;
          }
          .hero p {
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          .help-content {
            padding: 0.7rem 0.2rem;
          }
          .hero {
            padding: 1.2rem 0.2rem 0.7rem 0.2rem;
          }
        }
      `}</style>
    </main>
  );
}
