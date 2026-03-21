import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[#faf8f4]/90 backdrop-blur-md border-b border-black/10">
        <span className="text-2xl font-bold">Get<span className="text-[#c8902a]">Universities</span></span>
        <div className="flex gap-8 items-center">
          <a href="#" className="text-sm text-gray-500 hover:text-black">Browse</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Rankings</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Scholarships</a>
          <a href="#" className="text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-[#1a6b5c]">Sign up free</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-12 pt-24 pb-16">
        <p className="text-xs font-medium tracking-widest uppercase text-[#c8902a] mb-6">The world's university discovery platform</p>
        <h1 className="text-7xl font-black leading-none max-w-3xl mb-8">
          Find your <em className="italic text-[#1a6b5c] not-italic">perfect</em> university, anywhere.
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mb-12 leading-relaxed">
          Search 12,000+ universities across 150 countries. Compare programs, rankings, tuition, and find scholarships — all in one place.
        </p>

        {/* SEARCH */}
        <div className="bg-white border border-black/10 rounded-2xl p-5 max-w-2xl shadow-lg">
          <div className="flex gap-3 mb-4">
            <input
              className="flex-1 px-4 py-3 border border-black/10 rounded-xl bg-[#f2ede4] text-sm outline-none focus:border-[#1a6b5c]"
              placeholder="Search by university, program or city…"
            />
            <select className="px-4 py-3 border border-black/10 rounded-xl bg-[#f2ede4] text-sm outline-none">
              <option>All Countries</option>
              <option>🇺🇸 United States</option>
              <option>🇬🇧 United Kingdom</option>
              <option>🇩🇪 Germany</option>
              <option>🇨🇦 Canada</option>
              <option>🇦🇺 Australia</option>
            </select>
            <button className="px-7 py-3 bg-[#1a6b5c] text-white rounded-xl text-sm font-medium hover:bg-[#145249]">
              Search
            </button>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-xs text-gray-400">Popular:</span>
            {["MBA", "Computer Science", "Medicine", "Free tuition", "Scholarships"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-[#f2ede4] border border-black/10 rounded-full text-xs cursor-pointer hover:bg-[#e8f5f1] hover:text-[#1a6b5c]">{tag}</span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="flex gap-12 mt-12">
          {[["12,400+", "Universities"], ["150+", "Countries"], ["2.4M", "Students helped"]].map(([num, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold">{num}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="px-12 py-20">
        <p className="text-xs tracking-widest uppercase text-[#c8902a] font-medium mb-3">Explore by destination</p>
        <h2 className="text-4xl font-bold mb-12">Study anywhere in the world</h2>
        <div className="grid grid-cols-3 gap-4 max-w-4xl">
          {[
            ["🇺🇸", "United States", "3,200 universities"],
            ["🇬🇧", "United Kingdom", "130 universities"],
            ["🇩🇪", "Germany", "380 universities · free tuition"],
            ["🇨🇦", "Canada", "96 universities"],
            ["🇦🇺", "Australia", "42 universities"],
            ["🌍", "View all countries", "150+ destinations"],
          ].map(([flag, name, count]) => (
            <div key={name} className="bg-white border border-black/10 rounded-2xl p-6 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all">
              <span className="text-4xl block mb-3">{flag}</span>
              <div className="font-medium mb-1">{name}</div>
              <div className="text-sm text-gray-400">{count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-12 mb-20 bg-black rounded-3xl p-16 text-white">
        <h2 className="text-4xl font-bold max-w-md mb-5">Get <em className="italic text-[#f0d48a]">AI-matched</em> to your dream university</h2>
        <p className="text-white/60 max-w-sm mb-8 leading-relaxed">Answer 5 quick questions. We'll find your top 10 matches instantly.</p>
        <button className="bg-[#c8902a] text-black px-8 py-4 rounded-full font-medium hover:bg-[#f0d48a] transition-colors">
          ✦ Find my matches
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white/40 text-center py-10 text-sm">
        <strong className="block text-white text-lg font-bold mb-3">GetUniversities</strong>
        © 2025 GetUniversities · All rights reserved
      </footer>
    </main>
  );
}