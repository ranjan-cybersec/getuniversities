"use client";
import { useState } from "react";

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

const universities = [
  { name: "MIT", country: "🇺🇸 Cambridge, USA", rank: "#1", field: "Engineering & Technology", tuition: "$57,986/yr", tag: "STEM", tagColor: "#1a6b5c", acceptance: "4%", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&q=80" },
  { name: "University of Oxford", country: "🇬🇧 Oxford, UK", rank: "#2", field: "Liberal Arts & Sciences", tuition: "$35,000/yr", tag: "Research", tagColor: "#1a3a5c", acceptance: "17%", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80" },
  { name: "Harvard University", country: "🇺🇸 Cambridge, USA", rank: "#3", field: "Business, Law & Medicine", tuition: "$54,000/yr", tag: "Ivy League", tagColor: "#7c1a1a", acceptance: "3%", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80" },
  { name: "ETH Zurich", country: "🇨🇭 Zurich, Switzerland", rank: "#7", field: "Science & Technology", tuition: "$1,500/yr", tag: "Affordable", tagColor: "#1a6b3a", acceptance: "27%", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80" },
  { name: "TU Berlin", country: "🇩🇪 Berlin, Germany", rank: "#148", field: "Engineering & Architecture", tuition: "FREE", tag: "Free Tuition", tagColor: "#1a6b3a", acceptance: "35%", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80" },
  { name: "NUS Singapore", country: "🇸🇬 Singapore", rank: "#8", field: "Business & Computing", tuition: "$28,000/yr", tag: "Asia Top", tagColor: "#6b1a5c", acceptance: "5%", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" },
];

const programs = ["💻 Computer Science", "💼 MBA", "🏥 Medicine", "⚙️ Engineering", "⚖️ Law", "🏛️ Architecture", "🧠 Psychology", "📊 Data Science", "💹 Finance", "🎨 Design", "🏫 Education", "📈 Economics", "🧬 Biotechnology", "📱 Media Studies", "✈️ Aviation"];
const educationLevels = ["High School", "Bachelor's", "Master's", "PhD"];
const gradeOptions = ["A / 90-100%", "B / 75-89%", "C / 60-74%", "Below 60%"];
const fieldOptions = ["Science & Technology", "Business & Commerce", "Arts & Humanities", "Medicine & Health", "Law & Politics", "Engineering", "Education", "Social Sciences"];
const careerGoals = ["Research & Academia", "Tech Industry", "Business & Finance", "Medicine & Healthcare", "Government & Policy", "Entrepreneurship", "Creative Arts", "Non-profit & NGO"];
const testimonials = [
  { name: "Aisha M.", country: "🇳🇬 Nigeria", text: "Found my dream university in Germany with full scholarship through GetUniversities. Couldn't have done it without this platform!", program: "MSc Computer Science, TU Munich", avatar: "A" },
  { name: "Carlos R.", country: "🇧🇷 Brazil", text: "The AI matching saved me weeks of research. It recommended exactly the right universities for my budget and career goals.", program: "MBA, INSEAD France", avatar: "C" },
  { name: "Priya S.", country: "🇮🇳 India", text: "I compared 20+ universities side by side in minutes. Got into Oxford with a partial scholarship!", program: "MSc Economics, Oxford", avatar: "P" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileStep, setProfileStep] = useState(1);
  const [profile, setProfile] = useState({ educationLevel: "", grade: "", field: "", careerGoal: "" });
  const [profileComplete, setProfileComplete] = useState(false);
  const [recommendations, setRecommendations] = useState<typeof universities>([]);

  const handleProfileSubmit = () => {
    setRecommendations(universities.slice(0, 3));
    setProfileComplete(true);
    setShowProfileModal(false);
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f6f1", color: "#1a1a1a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .hover-lift { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.12); }
        .nav-link { color: #666; text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .nav-link:hover { color: #1a1a1a; }
        .country-card { border-radius: 16px; padding: 20px; cursor: pointer; transition: all 0.2s; border: 1.5px solid transparent; }
        .country-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); border-color: #1a6b5c44; }
        .program-tag { padding: 10px 18px; background: white; border: 1.5px solid rgba(0,0,0,0.08); border-radius: 40px; font-size: 13px; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
        .program-tag:hover { background: #1a6b5c; color: white; border-color: #1a6b5c; }
        .search-input { width: 100%; padding: 16px 20px 16px 48px; font-family: 'DM Sans', sans-serif; font-size: 15px; border: 2px solid rgba(0,0,0,0.08); border-radius: 14px; background: white; outline: none; transition: border-color 0.2s; }
        .search-input:focus { border-color: #1a6b5c; }
        .select-input { padding: 16px 20px; font-family: 'DM Sans', sans-serif; font-size: 15px; border: 2px solid rgba(0,0,0,0.08); border-radius: 14px; background: white; outline: none; cursor: pointer; }
        ::-webkit-scrollbar { height: 0; width: 0; }
        .scroll-x { overflow-x: auto; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        .modal { background: white; border-radius: 24px; padding: 40px; max-width: 560px; width: 90%; max-height: 90vh; overflow-y: auto; }
        .option-btn { width: 100%; padding: 14px 20px; border: 2px solid rgba(0,0,0,0.08); border-radius: 12px; background: white; font-family: 'DM Sans', sans-serif; font-size: 14px; cursor: pointer; text-align: left; transition: all 0.2s; margin-bottom: 8px; }
        .option-btn:hover, .option-btn.selected { border-color: #1a6b5c; color: #1a6b5c; background: #e8f5f1; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .fade-in { animation: fadeIn 0.5s ease forwards; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,246,241,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: "22px", fontWeight: 700 }}>Get<span style={{ color: "#1a6b5c" }}>Universities</span></div>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <a href="#search" className="nav-link">Search</a>
          <a href="#countries" className="nav-link">Countries</a>
          <a href="#rankings" className="nav-link">Rankings</a>
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#" className="nav-link">Scholarships</a>
          <button onClick={() => setShowProfileModal(true)} style={{ background: "#fff8e6", color: "#c8902a", border: "1.5px solid #c8902a44", padding: "10px 20px", borderRadius: "40px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>✦ Get matched</button>
          <a href="#" style={{ background: "#1a6b5c", color: "white", padding: "10px 22px", borderRadius: "40px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>Sign up free</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 75% 50%, rgba(26,107,92,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "48px", top: "120px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=240&q=80" alt="MIT" style={{ width: "220px", height: "130px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} />
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=240&q=80" alt="Campus" style={{ width: "220px", height: "130px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", marginLeft: "40px" }} />
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=240&q=80" alt="Harvard" style={{ width: "220px", height: "130px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} />
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#e8f5f1", border: "1px solid #1a6b5c33", borderRadius: "40px", padding: "6px 16px", marginBottom: "24px", width: "fit-content" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1a6b5c", display: "inline-block" }}></span>
          <span style={{ fontSize: "13px", color: "#1a6b5c", fontWeight: 500 }}>12,400+ universities · 195 countries · 50,000+ programs</span>
        </div>

        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(48px, 6vw, 82px)", fontWeight: 900, lineHeight: 1.0, maxWidth: "680px", marginBottom: "24px" }}>
          Your journey to the <em style={{ fontStyle: "italic", color: "#1a6b5c" }}>world's best</em> universities starts here.
        </h1>
        <p style={{ fontSize: "18px", color: "#666", maxWidth: "480px", lineHeight: 1.7, marginBottom: "48px", fontWeight: 300 }}>
          Search, compare and apply to universities worldwide. Get AI-matched based on your education, grades and career goals.
        </p>

        <div id="search" style={{ background: "white", borderRadius: "24px", padding: "24px", maxWidth: "700px", boxShadow: "0 8px 48px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
            <div style={{ flex: 1, position: "relative" }}>
              <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}>🔍</span>
              <input className="search-input" placeholder="Search university, program, city…" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <select className="select-input" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
              <option>All Countries</option>
              {countries.map(c => <option key={c.name}>{c.flag} {c.name}</option>)}
            </select>
            <button style={{ padding: "16px 28px", background: "#1a6b5c", color: "white", border: "none", borderRadius: "14px", fontFamily: "DM Sans, sans-serif", fontSize: "15px", fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>Search</button>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#999" }}>Popular:</span>
            {["MBA", "Computer Science", "Free tuition Germany", "Scholarships 2025", "Study in Canada", "Medicine UK"].map(tag => (
              <span key={tag} onClick={() => setSearch(tag)} style={{ padding: "4px 12px", background: "#f8f6f1", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "20px", fontSize: "12px", cursor: "pointer", color: "#555" }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "48px", marginTop: "48px" }}>
          {[["12,400+", "Universities"], ["195", "Countries"], ["50,000+", "Programs"], ["2.4M", "Students helped"]].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: "30px", fontWeight: 700 }}>{num}</div>
              <div style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT PROFILE BANNER */}
      <section style={{ margin: "0 48px 60px", background: "linear-gradient(135deg, #1a6b5c 0%, #0f4035 100%)", borderRadius: "24px", padding: "48px 60px", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "40px", padding: "6px 14px", marginBottom: "16px" }}>
            <span>🎓</span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>AI-powered career matching</span>
          </div>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "36px", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.2 }}>
            Tell us about your education.<br />We'll find your perfect universities.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.6 }}>
            Add your current grades, field of study and career goals. Our AI analyzes 50+ factors to match you with universities where you'll thrive.
          </p>
          {profileComplete && (
            <div style={{ marginTop: "16px", background: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "12px 16px", display: "inline-flex", gap: "8px", alignItems: "center" }}>
              <span style={{ color: "#90ffcc" }}>✓</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>Profile complete! See your matched universities below.</span>
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "280px" }}>
          {[
            { icon: "📚", label: "Education level", value: profile.educationLevel || "Not set" },
            { icon: "⭐", label: "Current grade", value: profile.grade || "Not set" },
            { icon: "🎯", label: "Career goal", value: profile.careerGoal || "Not set" },
          ].map(item => (
            <div key={item.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "2px" }}>{item.label}</div>
                <div style={{ fontSize: "14px", color: "white", fontWeight: 500 }}>{item.value}</div>
              </div>
            </div>
          ))}
          <button onClick={() => { setShowProfileModal(true); setProfileStep(1); }} style={{ padding: "14px 28px", background: "#c8902a", color: "white", border: "none", borderRadius: "14px", fontFamily: "DM Sans, sans-serif", fontSize: "15px", fontWeight: 500, cursor: "pointer", marginTop: "4px" }}>
            {profileComplete ? "Update my profile →" : "Set up my profile →"}
          </button>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      {profileComplete && recommendations.length > 0 && (
        <section style={{ padding: "0 48px 60px" }} className="fade-in">
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "8px" }}>Based on your profile</p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 700 }}>Your top university matches 🎯</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {recommendations.map((u) => (
              <div key={u.name} className="hover-lift" style={{ background: "white", borderRadius: "20px", overflow: "hidden", border: "2px solid #1a6b5c33" }}>
                <img src={u.image} alt={u.name} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 700 }}>{u.name}</div>
                    <span style={{ background: u.tagColor, color: "white", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 500 }}>{u.tag}</span>
                  </div>
                  <div style={{ fontSize: "13px", color: "#999", marginBottom: "12px" }}>{u.country}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px" }}>
                    <span style={{ color: "#666" }}>Rank <strong>{u.rank}</strong></span>
                    <span style={{ color: u.tuition === "FREE" ? "#1a6b5c" : "#1a1a1a", fontWeight: 500 }}>{u.tuition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: "60px 0", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ padding: "0 48px 20px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "8px" }}>Browse by program</p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 700 }}>50,000+ programs worldwide</h2>
        </div>
        <div className="scroll-x" style={{ padding: "0 48px" }}>
          <div style={{ display: "flex", gap: "10px", width: "max-content" }}>
            {programs.map(p => (
              <button key={p} className="program-tag" onClick={() => setSelectedProgram(p === selectedProgram ? "" : p)}
                style={{ background: selectedProgram === p ? "#1a6b5c" : "white", color: selectedProgram === p ? "white" : "#333", borderColor: selectedProgram === p ? "#1a6b5c" : "rgba(0,0,0,0.08)" }}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section id="countries" style={{ padding: "72px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "10px" }}>Study destinations</p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "40px", fontWeight: 700, lineHeight: 1.1 }}>Every country,<br />every campus.</h2>
          </div>
          <a href="#" style={{ color: "#1a6b5c", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>View all 195 countries →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "14px" }}>
          {countries.map((c) => (
            <div key={c.name} className="country-card" style={{ background: c.bg }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>{c.flag}</div>
              <div style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{c.name}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{c.count} universities</div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIVERSITIES WITH IMAGES */}
      <section id="rankings" style={{ padding: "72px 48px", background: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "10px" }}>World rankings</p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "40px", fontWeight: 700 }}>Top universities worldwide.</h2>
          </div>
          <a href="#" style={{ color: "#1a6b5c", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>See full rankings →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {universities.map((u) => (
            <div key={u.name} className="hover-lift" style={{ background: "#f8f6f1", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ position: "relative" }}>
                <img src={u.image} alt={u.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <span style={{ position: "absolute", top: "14px", right: "14px", background: u.tagColor, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 500 }}>{u.tag}</span>
                <span style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(0,0,0,0.6)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 700 }}>{u.rank} World</span>
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "20px", fontWeight: 700, marginBottom: "4px" }}>{u.name}</div>
                <div style={{ fontSize: "13px", color: "#888", marginBottom: "2px" }}>{u.country}</div>
                <div style={{ fontSize: "13px", color: "#888", marginBottom: "16px" }}>{u.field}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                  {[{ label: "Tuition", value: u.tuition, green: u.tuition === "FREE" }, { label: "Acceptance", value: u.acceptance, green: false }, { label: "Rank", value: u.rank, green: false }].map(stat => (
                    <div key={stat.label} style={{ background: "white", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                      <div style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>{stat.label}</div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: stat.green ? "#1a6b5c" : "#1a1a1a" }}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section style={{ padding: "72px 48px" }}>
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "10px" }}>Campus life</p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "40px", fontWeight: 700 }}>Experience student life<br />around the world.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "220px 220px", gap: "16px" }}>
          <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80" alt="Campus" style={{ gridRow: "1 / 3", width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
          <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&q=80" alt="Students" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
          <img src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&q=80" alt="Library" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
          <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80" alt="Graduation" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
          <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80" alt="Study" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "72px 48px", background: "white" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8902a", fontWeight: 500, marginBottom: "10px" }}>Student stories</p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "40px", fontWeight: 700 }}>Real students, real results.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: "#f8f6f1", borderRadius: "20px", padding: "28px" }}>
              <div style={{ fontSize: "24px", color: "#c8902a", marginBottom: "16px", fontFamily: "Fraunces, serif" }}>"</div>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#444", marginBottom: "24px" }}>{t.text}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#1a6b5c", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "16px" }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: "14px" }}>{t.name} {t.country}</div>
                  <div style={{ fontSize: "12px", color: "#999", marginTop: "2px" }}>{t.program}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ margin: "72px 48px", background: "#0f2318", borderRadius: "28px", padding: "72px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(26,107,92,0.25), transparent 70%)", pointerEvents: "none" }} />
        <div>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "44px", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "20px" }}>
            Ready to find your <em style={{ fontStyle: "italic", color: "#c8902a" }}>perfect</em> university?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: 1.7, marginBottom: "36px" }}>Join 2.4 million students who found their university through GetUniversities. It's completely free.</p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => setShowProfileModal(true)} style={{ background: "#c8902a", color: "white", border: "none", padding: "16px 28px", borderRadius: "40px", fontFamily: "DM Sans, sans-serif", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>✦ Get matched free</button>
            <button style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.2)", padding: "16px 28px", borderRadius: "40px", fontFamily: "DM Sans, sans-serif", fontSize: "15px", cursor: "pointer" }}>Browse universities</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&q=80" alt="Students" style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "20px", opacity: 0.85 }} />
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f1a12", color: "rgba(255,255,255,0.4)", padding: "60px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          <div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "12px" }}>GetUniversities</div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "280px" }}>The world's most complete university discovery platform. Helping 2.4 million students find their perfect university.</p>
          </div>
          {[
            { title: "Explore", links: ["Search Universities", "Rankings", "Scholarships", "Compare"] },
            { title: "Programs", links: ["MBA", "Medicine", "Engineering", "Computer Science"] },
            { title: "Company", links: ["About", "Blog", "For Universities", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "white", marginBottom: "16px" }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map(l => <a key={l} href="#" style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>© 2025 GetUniversities. All rights reserved.</span>
          <span>Made with ❤️ for students worldwide</span>
        </div>
      </footer>

      {/* PROFILE MODAL */}
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
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>This helps us find universities you're eligible to apply to.</p>
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
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>We'll match you to universities with realistic acceptance chances.</p>
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
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>We'll prioritize universities strong in your area.</p>
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
                <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>We'll match universities with strong alumni networks in your path.</p>
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
