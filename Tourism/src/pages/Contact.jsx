import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState([false, false, false]);
  const [lang, setLang] = useState('en');

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
      setFormSuccess('Message sent! We will contact you soon.');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setFormSuccess(''), 3000);
    }, 1500);
  };
  const toggleFaq = idx => {
    setFaqOpen(faqOpen.map((open, i) => (i === idx ? !open : open)));
  };

  return (
    <main>
      {/* SEO Meta Tags */}
      <head>
        <title>Contact | Aspire to Inspire Tours</title>
        <meta name="description" content="Contact Aspire to Inspire Tours for travel bookings, support, and information." />
      </head>
      <section className="hero">
        <h1>{lang === 'en' ? 'Contact Us' : 'संपर्क करें'}</h1>
        <p>{lang === 'en' ? 'Have questions or want to book your next adventure? Reach out to our team and we’ll be happy to help!' : 'प्रश्न हैं या यात्रा बुक करना चाहते हैं? हमारी टीम से संपर्क करें!'}</p>
        <button style={{marginTop:'10px',padding:'6px 18px',borderRadius:'6px',background:'#14375a',color:'#fff',fontWeight:'600',border:'none',cursor:'pointer'}} onClick={()=>setLang(lang==='en'?'hi':'en')}>{lang==='en'?'हिंदी':'English'}</button>
      </section>
      <div className="contact-content" style={{maxWidth:'900px',margin:'2rem auto',background:'#fff',borderRadius:'18px',boxShadow:'0 4px 24px rgba(20,55,90,0.08)',padding:'2.5rem 2rem',position:'relative'}}>
        {/* Social Proof Badges */}
        <div style={{display:'flex',justifyContent:'center',gap:'1.5rem',marginBottom:'2rem',flexWrap:'wrap'}}>
          <span style={{background:'#25D366',color:'#fff',fontWeight:'700',borderRadius:'8px',padding:'8px 22px',boxShadow:'0 2px 8px rgba(37,211,102,0.12)',fontSize:'1.08em'}}>Trusted by 10,000+ travelers</span>
          <span style={{background:'#f7b731',color:'#14375a',fontWeight:'700',borderRadius:'8px',padding:'8px 22px',boxShadow:'0 2px 8px rgba(247,183,49,0.12)',fontSize:'1.08em'}}>Award-winning Service</span>
          <span style={{background:'#14375a',color:'#fff',fontWeight:'700',borderRadius:'8px',padding:'8px 22px',boxShadow:'0 2px 8px rgba(20,55,90,0.12)',fontSize:'1.08em'}}>100% Satisfaction Guarantee</span>
        </div>
        <ul>
          <li><strong>Email:</strong> info@aspiretoinspire.com</li>
          <li><strong>Phone:</strong> <a href="tel:+911234567890" style={{color:'#14375a'}}>+91-12345-67890</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/911234567890" target="_blank" rel="noopener" style={{color:'#25D366'}}>Chat Now</a></li>
          <li><strong>Address:</strong> 123, Dream Street, Travel City</li>
        </ul>
        {/* Loading Spinner */}
        {loading && (
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'2rem 0'}}>
            <div className="spinner" style={{width:'48px',height:'48px',border:'6px solid #eaf7ff',borderTop:'6px solid #25D366',borderRadius:'50%',animation:'spin 1s linear infinite'}}></div>
          </div>
        )}
        <form className="contact-form" style={{marginTop:'2rem',display:'flex',flexDirection:'column',gap:'1rem'}} onSubmit={handleFormSubmit}>
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleFormChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleFormChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc'}} />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleFormChange} required style={{padding:'12px',borderRadius:'8px',border:'1px solid #ccc',minHeight:'80px'}} />
          {formError && <div style={{color:'red',fontWeight:'600'}}>{formError}</div>}
          <button type="submit" style={{background:'#f7b731',color:'#14375a',fontWeight:'700',borderRadius:'8px',padding:'12px'}} disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          {formSuccess && <div style={{color:'#14375a',fontWeight:'700',marginTop:'8px'}}>{formSuccess}</div>}
        </form>
        <div className="contact-social" style={{marginTop:'2rem',textAlign:'center'}}>
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" style={{margin:'0 10px'}}><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#14375a"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff">f</text></svg></a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" style={{margin:'0 10px'}}><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#f7b731"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#14375a">i</text></svg></a>
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" style={{margin:'0 10px'}}><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#25D366"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff">t</text></svg></a>
        </div>
        <div className="contact-map" style={{marginTop:'2rem',textAlign:'center'}}>
          <iframe
            title="Travel City Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.2090%2C28.6139%2C77.2190%2C28.6239&amp;layer=mapnik"
            style={{width:'100%',height:'220px',border:'none',borderRadius:'12px'}}
            allowFullScreen
          ></iframe>
        </div>
        <div className="team-section" style={{marginTop:'2.5rem'}}>
          <h2 style={{textAlign:'center',color:'#14375a'}}>Meet Our Team</h2>
          <div style={{display:'flex',gap:'1.5rem',justifyContent:'center',flexWrap:'wrap',marginTop:'1rem'}}>
            <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1rem',textAlign:'center',width:'140px'}}>
              <img src="/ati.jpg" alt="Priya S." style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',marginBottom:'8px'}} />
              <div style={{fontWeight:'700'}}>Priya S.</div>
              <div style={{fontSize:'0.95em',color:'#3a5a7c'}}>Travel Expert</div>
            </div>
            <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1rem',textAlign:'center',width:'140px'}}>
              <img src="/logoati.jpg" alt="Amit R." style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',marginBottom:'8px'}} />
              <div style={{fontWeight:'700'}}>Amit R.</div>
              <div style={{fontSize:'0.95em',color:'#3a5a7c'}}>Adventure Guide</div>
            </div>
            <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1rem',textAlign:'center',width:'140px'}}>
              <img src="/abt.jpg" alt="Khushal M." style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',marginBottom:'8px'}} />
              <div style={{fontWeight:'700'}}>Khushal M.</div>
              <div style={{fontSize:'0.95em',color:'#3a5a7c'}}>Customer Care</div>
            </div>
          </div>
        </div>
        <div className="faq-section" style={{marginTop:'2.5rem'}}>
          <h2 style={{textAlign:'center',color:'#14375a'}}>FAQs</h2>
          <div style={{maxWidth:'600px',margin:'1rem auto'}}>
            <div style={{marginBottom:'1rem',borderRadius:'8px',background:'#f7f7f7',boxShadow:'0 1px 4px rgba(0,0,0,0.05)'}}>
              <button onClick={()=>toggleFaq(0)} style={{width:'100%',textAlign:'left',padding:'12px',fontWeight:'700',background:'none',border:'none',fontSize:'1.1em',color:'#14375a',cursor:'pointer'}} aria-expanded={faqOpen[0]}>How do I book a tour?</button>
              {faqOpen[0] && <div style={{padding:'12px',color:'#444'}}>You can book online, call us, or WhatsApp for instant booking and support.</div>}
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
        </div>
        <div className="newsletter-section" style={{marginTop:'2.5rem',textAlign:'center'}}>
          <h2 style={{color:'#14375a'}}>Subscribe to Our Newsletter</h2>
          <form style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',maxWidth:'400px',margin:'0 auto'}}>
            <input type="email" placeholder="Your email address" required style={{padding:'10px',borderRadius:'8px',border:'1px solid #ccc',width:'100%'}} />
            <button type="submit" style={{background:'#f7b731',color:'#14375a',fontWeight:'700',borderRadius:'8px',padding:'10px',width:'100%'}}>Subscribe</button>
          </form>
        </div>
        <div className="testimonials-section" style={{marginTop:'2.5rem'}}>
          <h2 style={{textAlign:'center',color:'#14375a'}}>What Our Customers Say</h2>
          <div style={{display:'flex',gap:'1.5rem',justifyContent:'center',flexWrap:'wrap',marginTop:'1rem'}}>
            <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1rem',textAlign:'center',width:'220px'}}>
              <div style={{fontWeight:'700',fontSize:'1.1em',color:'#3a5a7c'}}>&quot;The best travel experience ever! Everything was perfectly organized.&quot;</div>
              <div style={{fontSize:'0.95em',color:'#14375a',marginTop:'8px'}}>- Priya S.</div>
            </div>
            <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1rem',textAlign:'center',width:'220px'}}>
              <div style={{fontWeight:'700',fontSize:'1.1em',color:'#3a5a7c'}}>&quot;Amazing destinations and friendly staff. Highly recommended!&quot;</div>
              <div style={{fontSize:'0.95em',color:'#14375a',marginTop:'8px'}}>- Amit R.</div>
            </div>
            <div style={{background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',padding:'1rem',textAlign:'center',width:'220px'}}>
              <div style={{fontWeight:'700',fontSize:'1.1em',color:'#3a5a7c'}}>&quot;I loved the adventure package! Will book again.&quot;</div>
              <div style={{fontSize:'0.95em',color:'#14375a',marginTop:'8px'}}>- Khushal M.</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        main {
          background: linear-gradient(120deg, #eaf7ff 0%, #f5f7fa 100%);
          min-height: 100vh;
        }
        .hero {
          text-align: center;
          padding: 2.5rem 1rem 1.5rem 1rem;
        }
        .hero h1 {
          font-size: 2.6rem;
          color: #14375a;
          margin-bottom: 0.7rem;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .hero p {
          font-size: 1.18rem;
          color: #3a5a7c;
          margin-bottom: 0.7rem;
        }
        .hero button {
          background: #f7b731;
          color: #14375a;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          padding: 8px 22px;
          font-size: 1.08em;
          box-shadow: 0 2px 8px rgba(247,183,49,0.10);
          transition: background 0.2s;
        }
        .hero button:hover {
          background: #14375a;
          color: #fff;
        }
        .contact-content {
          max-width: 700px;
          margin: 2.5rem auto;
          background: rgba(255,255,255,0.98);
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(10,61,98,0.10);
          padding: 2.5rem 2rem;
        }
        .contact-content ul {
          list-style: none;
          font-size: 1.15rem;
          color: #14375a;
          padding-left: 0;
          margin-bottom: 2rem;
        }
        .contact-content li {
          margin-bottom: 1rem;
        }
        .contact-form input, .contact-form textarea {
          font-size: 1.08em;
          border: 1.5px solid #f7b731;
          background: #f9f9f9;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border: 1.5px solid #14375a;
          box-shadow: 0 2px 8px rgba(20,55,90,0.10);
          outline: none;
        }
        .contact-form button {
          font-size: 1.15em;
          cursor: pointer;
          background: #f7b731;
          color: #14375a;
          font-weight: 700;
          border-radius: 8px;
          border: none;
          padding: 12px;
          box-shadow: 0 2px 8px rgba(247,183,49,0.10);
          transition: background 0.2s;
        }
        .contact-form button:hover {
          background: #14375a;
          color: #fff;
        }
        .contact-social {
          margin-top: 2rem;
          text-align: center;
        }
        .contact-social a {
          display: inline-block;
          margin: 0 10px;
          transition: transform 0.2s;
        }
        .contact-social a:hover {
          transform: scale(1.15);
        }
        .contact-map {
          margin-top: 2rem;
          text-align: center;
        }
        .contact-map iframe {
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(20,55,90,0.10);
        }
        .team-section h2, .faq-section h2, .newsletter-section h2, .testimonials-section h2 {
          color: #14375a;
          font-size: 1.5em;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .team-section {
          margin-top: 2.5rem;
        }
        .team-section > div {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .team-section img {
          box-shadow: 0 2px 8px rgba(20,55,90,0.10);
        }
        .faq-section {
          margin-top: 2.5rem;
        }
        .faq-section button {
          background: none;
          border: none;
          font-size: 1.08em;
          color: #14375a;
          font-weight: 700;
          padding: 12px;
          width: 100%;
          text-align: left;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .faq-section button:hover {
          background: #eaf7ff;
        }
        .faq-section > div > div {
          background: #fff;
          color: #444;
          padding: 12px;
          border-radius: 8px;
        }
        .newsletter-section {
          margin-top: 2.5rem;
          text-align: center;
        }
        .newsletter-section form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          max-width: 400px;
          margin: 0 auto;
        }
        .newsletter-section input {
          padding: 10px;
          border-radius: 8px;
          border: 1.5px solid #f7b731;
          width: 100%;
          font-size: 1.08em;
        }
        .newsletter-section button {
          background: #f7b731;
          color: #14375a;
          font-weight: 700;
          border-radius: 8px;
          padding: 10px;
          width: 100%;
          font-size: 1.08em;
          border: none;
          box-shadow: 0 2px 8px rgba(247,183,49,0.10);
          transition: background 0.2s;
        }
        .newsletter-section button:hover {
          background: #14375a;
          color: #fff;
        }
        .testimonials-section {
          margin-top: 2.5rem;
        }
        .testimonials-section > div {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .testimonials-section > div > div {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(20,55,90,0.10);
          padding: 1rem;
          text-align: center;
          width: 220px;
        }
        /* Floating Live Chat Button */
        a[title="Live Chat"] {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 99;
          background: #25D366;
          color: #fff;
          border-radius: 50%;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(37,211,102,0.18);
          font-size: 2em;
          text-decoration: none;
          transition: background 0.2s;
        }
        a[title="Live Chat"]:hover {
          background: #14375a;
        }
        @media (max-width: 900px) {
          .contact-content {
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
        @media (max-width: 600px) {
          .contact-content {
            padding: 0.7rem 0.2rem;
          }
          .hero {
            padding: 1.2rem 0.2rem 0.7rem 0.2rem;
          }
        }
        main {
          background: linear-gradient(120deg, #eaf7ff 0%, #f7b731 100%);
          min-height: 100vh;
        }
        .hero {
          text-align: center;
          padding: 2.5rem 1rem 1.5rem 1rem;
        }
        .hero h1 {
          font-size: 2.6rem;
          color: #14375a;
          margin-bottom: 0.7rem;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .hero p {
          font-size: 1.18rem;
          color: #3a5a7c;
          margin-bottom: 0.7rem;
        }
        .hero button {
          background: #f7b731;
          color: #14375a;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          padding: 8px 22px;
          font-size: 1.08em;
          box-shadow: 0 2px 8px rgba(247,183,49,0.10);
          transition: background 0.2s;
        }
        .hero button:hover {
          background: #14375a;
          color: #fff;
        }
        .contact-content {
          max-width: 700px;
          margin: 2.5rem auto;
          background: rgba(255,255,255,0.98);
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(10,61,98,0.10);
          padding: 2.5rem 2rem;
        }
        .contact-content ul {
          list-style: none;
          font-size: 1.15rem;
          color: #14375a;
          padding-left: 0;
          margin-bottom: 2rem;
        }
        .contact-content li {
          margin-bottom: 1rem;
        }
        .contact-form input, .contact-form textarea {
          font-size: 1.08em;
          border: 1.5px solid #f7b731;
          background: #f9f9f9;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border: 1.5px solid #14375a;
          box-shadow: 0 2px 8px rgba(20,55,90,0.10);
          outline: none;
        }
        .contact-form button {
          font-size: 1.15em;
          cursor: pointer;
          background: #f7b731;
          color: #14375a;
          font-weight: 700;
          border-radius: 8px;
          border: none;
          padding: 12px;
          box-shadow: 0 2px 8px rgba(247,183,49,0.10);
          transition: background 0.2s;
        }
        .contact-form button:hover {
          background: #14375a;
          color: #fff;
        }
        .contact-social {
          margin-top: 2rem;
          text-align: center;
        }
        .contact-social a {
          display: inline-block;
          margin: 0 10px;
          transition: transform 0.2s;
        }
        .contact-social a:hover {
          transform: scale(1.15);
        }
        .contact-map {
          margin-top: 2rem;
          text-align: center;
        }
        .contact-map iframe {
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(20,55,90,0.10);
        }
        .team-section h2, .faq-section h2, .newsletter-section h2, .testimonials-section h2 {
          color: #14375a;
          font-size: 1.5em;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .team-section {
          margin-top: 2.5rem;
        }
        .team-section > div {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .team-section img {
          box-shadow: 0 2px 8px rgba(20,55,90,0.10);
        }
        .faq-section {
          margin-top: 2.5rem;
        }
        .faq-section button {
          background: none;
          border: none;
          font-size: 1.08em;
          color: #14375a;
          font-weight: 700;
          padding: 12px;
          width: 100%;
          text-align: left;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .faq-section button:hover {
          background: #eaf7ff;
        }
        .faq-section > div > div {
          background: #fff;
          color: #444;
          padding: 12px;
          border-radius: 8px;
        }
        .newsletter-section {
          margin-top: 2.5rem;
          text-align: center;
        }
        .newsletter-section form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          max-width: 400px;
          margin: 0 auto;
        }
        .newsletter-section input {
          padding: 10px;
          border-radius: 8px;
          border: 1.5px solid #f7b731;
          width: 100%;
          font-size: 1.08em;
        }
        .newsletter-section button {
          background: #f7b731;
          color: #14375a;
          font-weight: 700;
          border-radius: 8px;
          padding: 10px;
          width: 100%;
          font-size: 1.08em;
          border: none;
          box-shadow: 0 2px 8px rgba(247,183,49,0.10);
          transition: background 0.2s;
        }
        .newsletter-section button:hover {
          background: #14375a;
          color: #fff;
        }
        .testimonials-section {
          margin-top: 2.5rem;
        }
        .testimonials-section > div {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .testimonials-section > div > div {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(20,55,90,0.10);
          padding: 1rem;
          text-align: center;
          width: 220px;
        }
        /* Floating Live Chat Button */
        a[title="Live Chat"] {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 99;
          background: #25D366;
          color: #fff;
          border-radius: 50%;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(37,211,102,0.18);
          font-size: 2em;
          text-decoration: none;
          transition: background 0.2s;
        }
        a[title="Live Chat"]:hover {
          background: #14375a;
        }
        @media (max-width: 900px) {
          .contact-content {
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
        @media (max-width: 600px) {
          .contact-content {
            padding: 0.7rem 0.2rem;
          }
          .hero {
            padding: 1.2rem 0.2rem 0.7rem 0.2rem;
          }
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
        .contact-content {
          max-width: 600px;
          margin: 2rem auto;
          background: rgba(255,255,255,0.85);
          border-radius: 14px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          padding: 2rem 1.5rem;
        }
        .contact-content ul {
          list-style: none;
          font-size: 1.1rem;
          color: #444;
          padding-left: 0;
        }
        .contact-content li {
          margin-bottom: 0.7rem;
        }
        .contact-form input, .contact-form textarea {
          font-size: 1rem;
        }
        .contact-form button {
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .contact-form button:hover {
          background: #14375a;
          color: #fff;
        }
        .contact-social span:hover {
          color: #f7b731;
        }
        @media (max-width: 700px) {
          .contact-content {
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
          .contact-content {
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
