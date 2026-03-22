"use client";
import { useState, useEffect } from "react";

const countries = [
  { flag: "🇺🇸", name: "United States", count: "3,200+", bg: "#e8f0fb" },
  { flag: "🇬🇧", name: "United Kingdom", count: "130+", bg: "#fce8e8" },
  { flag: "🇩🇪", name: "Germany", count: "380+", bg: "#fff8e6" },
  { flag: "🇨🇦", name: "Canada", count: "96+", bg: "#e8f5f1" },
  { flag: "🇦🇺", name: "Australia", count: "42+", bg: "#fef3e8" },
  { flag: "🇫🇷", name: "France", count: "250+", bg: "#f0e8fe" },
  { flag: "🇯🇵", name: "Japan", count: "780+", bg: "#fce8f0" },
  { flag: "🇸🇬", name: "Singapore", count: "18+", bg: "#e8fef0" },
  { flag: "🇳🇱", name: "Netherlands", count: "55+", bg: "#e8f0fb" },
  { flag: "🇸🇪", name: "Sweden", count: "40+", bg: "#fff8e6" },
  { flag: "🇨🇭", name: "Switzerland", count: "12+", bg: "#e8f5f1" },
  { flag: "🇰🇷", name: "South Korea", count: "190+", bg: "#fce8e8" },
  { flag: "🇮🇹", name: "Italy", count: "90+", bg: "#fef3e8" },
  { flag: "🇪🇸", name: "Spain", count: "80+", bg: "#f0e8fe" },
  { flag: "🇨🇳", name: "China", count: "2,900+", bg: "#fce8f0" },
  { flag: "🇮🇳", name: "India", count: "1,000+", bg: "#fff8e6" },
  { flag: "🇧🇷", name: "Brazil", count: "200+", bg: "#e8fef0" },
  { flag: "🇿🇦", name: "South Africa", count: "26+", bg: "#fef3e8" },
  { flag: "🇦🇪", name: "UAE", count: "70+", bg: "#e8f0fb" },
  { flag: "🇳🇿", name: "New Zealand", count: "18+", bg: "#e8f5f1" },
  { flag: "🇲🇾", name: "Malaysia", count: "60+", bg: "#fce8f0" },
  { flag: "🇵🇹", name: "Portugal", count: "35+", bg: "#fff8e6" },
  { flag: "🇦🇹", name: "Austria", count: "22+", bg: "#f0e8fe" },
  { flag: "🇧🇪", name: "Belgium", count: "30+", bg: "#e8fef0" },
];

const slides = [
  { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1800&q=90", uni: "Harvard University", rank: "#3", country: "🇺🇸 USA", desc: "Harvard University — Founded 1636" },
  { url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1800&q=90", uni: "MIT", rank: "#1", country: "🇺🇸 USA", desc: "Massachusetts Institute of Technology" },
  { url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1800&q=90", uni: "University of Oxford", rank: "#2", country: "🇬🇧 UK", desc: "University of Oxford — Founded 1096" },
  { url: "https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=90", uni: "University of Cambridge", rank: "#4", country: "🇬🇧 UK", desc: "King's College — Cambridge" },
  { url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1800&q=90", uni: "Stanford University", rank: "#5", country: "🇺🇸 USA", desc: "Stanford University — Silicon Valley" },
  { url: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1800&q=90", uni: "Imperial College London", rank: "#7", country: "🇬🇧 UK", desc: "Imperial College — South Kensington" },
  { url: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1800&q=90", uni: "ETH Zurich", rank: "#6", country: "🇨🇭 Switzerland", desc: "ETH Zurich — World Leader in Science" },
  { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=90", uni: "NUS Singapore", rank: "#8", country: "🇸🇬 Singapore", desc: "National University of Singapore" },
  { url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1800&q=90", uni: "TU Berlin", rank: "#9", country: "🇩🇪 Germany", desc: "TU Berlin — Free Tuition for All" },
  { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1800&q=90", uni: "UCLA", rank: "#10", country: "🇺🇸 USA", desc: "University of California Los Angeles" },
  { url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1800&q=90", uni: "University of Oxford", rank: "#2", country: "🇬🇧 UK", desc: "Oxford's Iconic Bodleian Library" },
  { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1800&q=90", uni: "ETH Zurich", rank: "#6", country: "🇨🇭 Switzerland", desc: "ETH Zurich — Main Building" },
  { url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1800&q=90", uni: "University of Cambridge", rank: "#4", country: "🇬🇧 UK", desc: "Cambridge — 800 Years of Excellence" },
  { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1800&q=90", uni: "Stanford University", rank: "#5", country: "🇺🇸 USA", desc: "Stanford — The Quad at Golden Hour" },
  { url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1800&q=90", uni: "MIT", rank: "#1", country: "🇺🇸 USA", desc: "MIT — The Great Dome" },
];

const programs = [
  { icon: "💻", name: "Computer Science", count: "4,200+" },
  { icon: "💼", name: "MBA", count: "2,800+" },
  { icon: "🏥", name: "Medicine", count: "1,900+" },
  { icon: "⚙️", name: "Engineering", count: "5,100+" },
  { icon: "⚖️", name: "Law", count: "1,400+" },
  { icon: "🏛️", name: "Architecture", count: "980+" },
  { icon: "🧠", name: "Psychology", count: "2,200+" },
  { icon: "📊", name: "Data Science", count: "3,400+" },
  { icon: "💹", name: "Finance", count: "2,600+" },
  { icon: "🎨", name: "Design", count: "1,800+" },
  { icon: "🧬", name: "Biotechnology", count: "1,100+" },
  { icon: "📱", name: "Media Studies", count: "1,300+" },
];

const educationLevels = ["High School", "Bachelor's", "Master's", "PhD"];
const gradeOptions = ["A / 90-100%", "B / 75-89%", "C / 60-74%", "Below 60%"];
const fieldOptions = ["Science & Technology", "Business & Commerce", "Arts & Humanities", "Medicine & Health", "Law & Politics", "Engineering", "Education", "Social Sciences"];
const careerGoals = ["Research & Academia", "Tech Industry", "Business & Finance", "Medicine & Healthcare", "Government & Policy", "Entrepreneurship", "Creative Arts", "Non-profit & NGO"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileStep, setProfileStep] = useState(1);
  const [profile, setProfile] = useState({ educationLevel: "", grade: "", field: "", careerGoal: "" });
  const [profileComplete, setProfileComplete] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        setFading(false);
      }, 600);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (i: number) => {
    setFading(true);
    setTimeout(() => { setCurrentSlide(i); setFading(false); }, 300);
  };

  const handleProfileSubmit = () => {
    setProfileComplete(true);
    setShowProfileModal(false);
  };

  const slide = slides[currentSlide];

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f6f1", color: "#1a1a1a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .nav-link { color: rgba(255,255,255,0.88); text-decoration: none; font-size: 14px; transition: color 0.2s; letter-spacing: 0.2px; }
        .nav-link:hover { color: white; }
        .country-card { border-radius: 16px; padding: 22px; cursor: pointer; transition: all 0.25s; border: 1.5px solid transparent; }
        .country-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); border-color: #1a6b5c55; }
        .program-card { background: white; border-radius: 16px; padding: 24px; cursor: pointer; transition: all 0.25s; border: 1px solid rgba(0,0,0,0.06); text-align: center; }
        .program-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); border-color: #1a6b5c44; }
        .search-input { width: 100%; padding: 18px 20px 18px 50px; font-family: 'DM Sans', sans-serif; font-size: 15px; border: none; border-radius: 14px; background: rgba(255,255,255,0.14); color: white; outline: none; backdrop-filter: blur(10px); transition: background 0.2s; }
        .search-input::placeholder { color: rgba(255,255,255,0.5); }
        .search-input:focus { background: rgba(255,255,255,0.22); }
        .select-input { padding: 18px 20px; font-family: 'DM Sans', sans-serif; font-size: 15px; border: none; border-radius: 14px; background: rgba(255,255,255,0.14); color: white; outline: none; cursor: pointer; backdrop-filter: blur(10px); }
        .select-input option { background: #1a2e20; color: white; }
        ::-webkit-scrollbar { height: 0; width: 0; }
        .scroll-x { overflow-x: auto; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 1000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(6px); }
        .modal { background: white; border-radius: 24px; padding: 44px; max-width: 560px; width: 90%; max-height: 90vh; overflow-y: auto; }
        .option-btn { width: 100%; padding: 14px 20px; border: 2px solid rgba(0,0,0,0.08); border-radius: 12px; background: white; font-family: 'DM Sans', sans-serif; font-size: 14px; cursor: pointer; text-align: left; transition: all 0.2s; margin-bottom: 8px; }
        .option-btn:hover, .option-btn.selected { border-color: #1a6b5c; color: #1a6b5c; background: #e8f5f1; }
        .dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; transition: all 0.3s; border: none; padding: 0; flex-shrink: 0; }
        .dot.active { background: white; width: 28px; border-radius: 4px; }
        @keyframes slideUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .slide-anim { animation: slideUp 0.5s ease forwards; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-in-up { animation: fadeInUp 0.7s ease forwards; }
        .tag-pill { padding: 5px 14px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; font-size: 12px; cursor: pointer; color: rgba(255,255,255,0.85); transition: all 0.2s; white-space: nowrap; }
        .tag-pill:hover { background: rgba(255,255,255,0.22); color: white; }
      `}</style>

      {/* ═══ HERO — FULLSCREEN SLIDESHOW ═══ */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, opacity: fading ? 0 : 1, transition: "opacity 0.7s ease" }}>
          <img src={slide.url} alt={slide.uni} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>

        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.72) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)" }} />

        {/* NAV */}
        <nav style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, padding: "22px 56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: "24px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
            Get<span style={{ color: "#c8902a" }}>Universities</span>
          </div>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <a href="#countries" className="nav-link">Countries</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#search-section" className="nav-link">Search</a>
            <a href="#scholarships" className="nav-link">Scholarships</a>
            <button onClick={() => setShowProfileModal(true)} style={{ background: "rgba(200,144,42,0.92)", color: "white", border: "none", padding: "11px 22px", borderRadius: "40px", fontSize: "14px", fontWeight: 500, cursor: "pointer", backdropFilter: "blur(8px)" }}>
              ✦ Get matched
            </button>
            <a href="#" style={{ background: "white", color: "#1a1a1a", padding: "11px 24px", borderRadius: "40px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>Sign up free</a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div style={{ position: "absolute", inset: 0, display: "flex", zIndex: 5, alignItems: "stretch" }}>

          {/* LEFT — quote + stats */}
          <div style={{ flex: "0 0 52%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "100px 56px 100px" }}>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "40px", padding: "7px 18px", marginBottom: "28px", width: "fit-content" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>12,400+ universities · 195 countries</span>
            </div>

            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(46px, 5.5vw, 80px)", fontWeight: 900, lineHeight: 1.0, color: "white", marginBottom: "20px", textShadow: "0 2px 32px rgba(0,0,0,0.25)" }}>
              Your journey to<br />
              the <em style={{ fontStyle: "italic", color: "#c8902a" }}>world's best</em><br />
              universities<br />
              starts here.
            </h1>

            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "44px", fontWeight: 300, maxWidth: "400px" }}>
              Search, compare and apply to top universities worldwide. Get AI-matched to your perfect campus.
            </p>

            <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
              <button onClick={() => setShowProfileModal(true)} style={{ background: "#1a6b5c", color: "white", border: "none", padding: "15px 28px", borderRadius: "12px", fontFamily: "DM Sans, sans-serif", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>
                ✦ Find my universities
              </button>
              <a href="#search-section" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", color: "white", border: "1px solid rgba(255,255,255,0.25)", padding: "15px 28px", borderRadius: "12px", fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center" }}>
                Browse all →
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "36px", marginTop: "36px", paddingTop: "36px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              {[["12,400+", "Universities"], ["195", "Countries"], ["50,000+", "Programs"], ["2.4M", "Students helped"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: "26px", fontWeight: 700, color: "white" }}>{num}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "3px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — university name */}
          <div style={{ flex: "0 0 48%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 56px 100px", alignItems: "flex-start" }}>
            <div key={currentSlide} className="slide-anim">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(200,144,42,0.9)", borderRadius: "40px", padding: "7px 18px", marginBottom: "16px" }}>
                <span style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>{slide.rank} World Ranking</span>
              </div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(32px, 4.5vw, 58px)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "12px", textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}>
                {slide.uni}
              </div>
              <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "8px", fontWeight: 400 }}>{slide.country}</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{slide.desc}</div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "6px", zIndex: 10 }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginRight: "8px" }}>{String(currentSlide + 1).padStart(2, "0")}</span>
          {slides.map((_, i) => (
            <button key={i} className={`dot ${i === currentSlide ? "active" : ""}`} onClick={() => goToSlide(i)} />
          ))}
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginLeft: "8px" }}>{String(slides.length).padStart(2, "0")}</span>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "32px", right: "56px", color: "rgba(255,255,255,0.35)", fontSize: "12px", zIndex: 10, display: "flex", alignItems: "center", gap: "6px" }}>
          Scroll to explore ↓
        </div>
      </section>

      {/* ═══ SEARCH SECTION (appears on scroll) ═══ */}
      <section id="search-section" style={{ background: "#0f2318", padding: "72px 56px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "12px", textAlign: "center" }}>Find your university</p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "42px", fontWeight: 700, color: "white", textAlign: "center", marginBottom: "40px", lineHeight: 1.15 }}>
            Search 12,400+ universities<br />across 195 countries
          </h2>

          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", padding: "24px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
              <div style={{ flex: 1, position: "relative" }}>
                <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}>🔍</span>
                <input className="search-input" placeholder="University, program, or city…" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <select className="select-input" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option>All Countries</option>
                {countries.map(c => <option key={c.name}>{c.flag} {c.name}</option>)}
              </select>
              <button style={{ padding: "18px 32px", background: "#1a6b5c", color: "white", border: "none", borderRadius: "14px", fontFamily: "DM Sans, sans-serif", fontSize: "15px", fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>
                Search
              </button>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>Popular:</span>
              {["MBA", "Free tuition Germany", "Scholarships 2025", "Medicine UK", "Computer Science", "Study in Canada"].map(tag => (
                <span key={tag} className="tag-pill" onClick={() => setSearch(tag)}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick filters */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginTop: "20px" }}>
            {[
              { icon: "💰", label: "Free tuition", sub: "Germany, Norway, France" },
              { icon: "🎓", label: "Scholarships", sub: "Fully funded programs" },
              { icon: "🌍", label: "Study abroad", sub: "Exchange programs" },
              { icon: "⚡", label: "Easy apply", sub: "No IELTS required" },
            ].map(f => (
              <div key={f.label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "16px", cursor: "pointer", transition: "all 0.2s" }}>
                <div style={{ fontSize: "22px", marginBottom: "8px" }}>{f.icon}</div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: "white", marginBottom: "3px" }}>{f.label}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COUNTRIES ═══ */}
      <section id="countries" style={{ padding: "80px 56px", background: "#f8f6f1" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "44px" }}>
          <div>
            <p style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "10px" }}>Study destinations</p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "44px", fontWeight: 700, lineHeight: 1.1 }}>Every country,<br />every campus.</h2>
          </div>
          <a href="#" style={{ color: "#1a6b5c", fontSize: "14px", fontWeight: 500, textDecoration: "none", border: "1.5px solid #1a6b5c", padding: "10px 20px", borderRadius: "40px" }}>View all 195 →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "14px" }}>
          {countries.map((c) => (
            <div key={c.name} className="country-card" style={{ background: c.bg }}>
              <div style={{ fontSize: "34px", marginBottom: "12px" }}>{c.flag}</div>
              <div style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{c.name}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{c.count} universities</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROGRAMS ═══ */}
      <section id="programs" style={{ padding: "80px 56px", background: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "44px" }}>
          <div>
            <p style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "10px" }}>Browse by field</p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "44px", fontWeight: 700, lineHeight: 1.1 }}>50,000+ programs<br />to choose from.</h2>
          </div>
          <a href="#" style={{ color: "#1a6b5c", fontSize: "14px", fontWeight: 500, textDecoration: "none", border: "1.5px solid #1a6b5c", padding: "10px 20px", borderRadius: "40px" }}>All programs →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "14px" }}>
          {programs.map((p) => (
            <div key={p.name} className="program-card">
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{p.icon}</div>
              <div style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px", color: "#1a1a1a" }}>{p.name}</div>
              <div style={{ fontSize: "12px", color: "#999" }}>{p.count} programs</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ STUDENT HELP / PROFILE SECTION ═══ */}
      <section id="scholarships" style={{ padding: "80px 56px", background: "#f8f6f1" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>

          {/* AI Match card */}
          <div style={{ background: "linear-gradient(135deg, #1a6b5c 0%, #0a3d2e 100%)", borderRadius: "24px", padding: "48px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "40px", padding: "6px 14px", marginBottom: "20px" }}>
              <span style={{ fontSize: "14px" }}>🎓</span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>AI-powered matching</span>
            </div>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: "14px" }}>
              Tell us your education.<br />We'll find your match.
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.65, marginBottom: "32px" }}>
              Add your grades, field of study and career goals. Our AI analyzes 50+ factors to find universities where you'll thrive.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {[
                { icon: "📚", label: "Education level", value: profile.educationLevel || "Not set yet" },
                { icon: "⭐", label: "Current grade", value: profile.grade || "Not set yet" },
                { icon: "🎯", label: "Career goal", value: profile.careerGoal || "Not set yet" },
              ].map(item => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "18px" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ fontSize: "13px", color: profileComplete ? "#4ade80" : "rgba(255,255,255,0.75)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => { setShowProfileModal(true); setProfileStep(1); }} style={{ width: "100%", padding: "15px", background: "#c8902a", color: "white", border: "none", borderRadius: "14px", fontFamily: "DM Sans, sans-serif", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>
              {profileComplete ? "✓ Update my profile" : "Set up my profile →"}
            </button>
          </div>

          {/* Right side — two cards stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Scholarships card */}
            <div style={{ background: "#0f2318", borderRadius: "24px", padding: "36px", flex: 1, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(200,144,42,0.08)", pointerEvents: "none" }} />
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>💰</div>
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "10px" }}>Find scholarships</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.65, marginBottom: "24px" }}>
                Discover fully-funded scholarships, grants and bursaries at top universities worldwide. Filter by country, field and eligibility.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                {["Fully funded", "Merit-based", "Need-based", "Country-specific"].map(t => (
                  <span key={t} style={{ padding: "4px 12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>{t}</span>
                ))}
              </div>
              <a href="#" style={{ color: "#c8902a", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>Browse scholarships →</a>
            </div>

            {/* Stats card */}
            <div style={{ background: "white", borderRadius: "24px", padding: "32px", border: "1px solid rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "20px", fontWeight: 700, marginBottom: "20px", color: "#1a1a1a" }}>Students we've helped</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { num: "2.4M", label: "Students matched", color: "#1a6b5c" },
                  { num: "94%", label: "Satisfaction rate", color: "#c8902a" },
                  { num: "180+", label: "Partner universities", color: "#1a3a5c" },
                  { num: "$2.1B", label: "Scholarships found", color: "#6b1a5c" },
                ].map(s => (
                  <div key={s.label} style={{ background: "#f8f6f1", borderRadius: "12px", padding: "16px" }}>
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: 700, color: s.color }}>{s.num}</div>
                    <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "#0a1a0d", color: "rgba(255,255,255,0.4)", padding: "60px 56px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          <div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "14px" }}>
              Get<span style={{ color: "#c8902a" }}>Universities</span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "260px" }}>The world's most complete university discovery platform. Helping 2.4 million students find their perfect university.</p>
          </div>
          {[
            { title: "Explore", links: ["Search Universities", "Rankings", "Scholarships", "Compare"] },
            { title: "Programs", links: ["MBA", "Medicine", "Engineering", "Computer Science"] },
            { title: "Company", links: ["About", "Blog", "For Universities", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "white", marginBottom: "16px" }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map(l => <a key={l} href="#" style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "24px", display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>© 2025 GetUniversities. All rights reserved.</span>
          <span>Made with ❤️ for students worldwide</span>
        </div>
      </footer>

      {/* ═══ PROFILE MODAL ═══ */}
      {showProfileModal && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowProfileModal(false); }}>
          <div className="modal">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <div>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "24px", fontWeight: 700 }}>Your education profile</div>
                <div style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>Step {profileStep} of 4</div>
              </div>
              <button onClick={() => setShowProfileModal(false)} style={{ background: "#f0f0f0", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", fontSize: "16px" }}>✕</button>
            </div>
            <div style={{ height: "4px", background: "#f0f0f0", borderRadius: "4px", marginBottom: "28px" }}>
              <div style={{ height: "100%", background: "#1a6b5c", borderRadius: "4px", width: `${(profileStep / 4) * 100}%`, transition: "width 0.3s" }} />
            </div>
            {profileStep === 1 && (
              <div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "20px", marginBottom: "6px" }}>What's your current education level?</h3>
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>This helps us find universities you're eligible for.</p>
                {educationLevels.map(level => (
                  <button key={level} className={`option-btn ${profile.educationLevel === level ? "selected" : ""}`}
                    onClick={() => { setProfile({ ...profile, educationLevel: level }); setProfileStep(2); }}>
                    {level === "High School" ? "🏫" : level === "Bachelor's" ? "📚" : level === "Master's" ? "🎓" : "🔬"} {level}
                  </button>
                ))}
              </div>
            )}
            {profileStep === 2 && (
              <div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "20px", marginBottom: "6px" }}>What are your current grades?</h3>
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>We'll match you with realistic acceptance chances.</p>
                {gradeOptions.map(grade => (
                  <button key={grade} className={`option-btn ${profile.grade === grade ? "selected" : ""}`}
                    onClick={() => { setProfile({ ...profile, grade }); setProfileStep(3); }}>
                    {grade.startsWith("A") ? "⭐⭐⭐" : grade.startsWith("B") ? "⭐⭐" : grade.startsWith("C") ? "⭐" : "📈"} {grade}
                  </button>
                ))}
              </div>
            )}
            {profileStep === 3 && (
              <div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "20px", marginBottom: "6px" }}>What's your field of interest?</h3>
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>We'll find universities strong in your area.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {fieldOptions.map(field => (
                    <button key={field} className={`option-btn ${profile.field === field ? "selected" : ""}`}
                      onClick={() => { setProfile({ ...profile, field }); setProfileStep(4); }}>
                      {field}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {profileStep === 4 && (
              <div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "20px", marginBottom: "6px" }}>What's your career goal?</h3>
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>We'll match universities with strong alumni in your field.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "24px" }}>
                  {careerGoals.map(goal => (
                    <button key={goal} className={`option-btn ${profile.careerGoal === goal ? "selected" : ""}`}
                      onClick={() => setProfile({ ...profile, careerGoal: goal })}>
                      {goal}
                    </button>
                  ))}
                </div>
                <button onClick={handleProfileSubmit} disabled={!profile.careerGoal}
                  style={{ width: "100%", padding: "16px", background: profile.careerGoal ? "#1a6b5c" : "#ccc", color: "white", border: "none", borderRadius: "14px", fontFamily: "DM Sans, sans-serif", fontSize: "16px", fontWeight: 500, cursor: profile.careerGoal ? "pointer" : "not-allowed" }}>
                  ✦ Find my university matches →
                </button>
              </div>
            )}
            {profileStep > 1 && (
              <button onClick={() => setProfileStep(profileStep - 1)} style={{ marginTop: "12px", background: "none", border: "none", color: "#999", fontSize: "14px", cursor: "pointer", width: "100%", textAlign: "center" }}>← Back</button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
