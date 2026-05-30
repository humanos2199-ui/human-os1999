export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        
        <p className="text-cyan-400 tracking-widest text-sm mb-4">
          HUMAN OS
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          The Operating System <br />
          For Human Intelligence
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          One AI. Infinite Capabilities.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
            Start Free
          </button>
          <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
            Watch Demo
          </button>
        </div>

        {/* Floating Core */}
        <div className="absolute bottom-10 w-64 h-64 bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* FEATURES */}
      <section className="relative py-20 px-6 grid md:grid-cols-5 gap-6 text-center">
        {["Think", "Create", "Automate", "Learn", "Build"].map((item) => (
          <div
            key={item}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition"
          >
            <p className="text-lg font-semibold">{item}</p>
          </div>
        ))}
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-6">
        {[
          "Generate Videos",
          "Generate Images",
          "Build Apps",
          "Write Content",
          "Analyze Data",
          "Personal AI Assistant",
        ].map((cap) => (
          <div
            key={cap}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-105 transition"
          >
            {cap}
          </div>
        ))}
      </section>

      {/* STATS */}
      <section className="py-20 px-6 grid md:grid-cols-4 gap-6 text-center">
        {[
          ["10M+", "Tasks Completed"],
          ["99.9%", "Uptime"],
          ["50+", "AI Models"],
          ["24/7", "Intelligence"],
        ].map(([num, label]) => (
          <div
            key={label}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            <h3 className="text-3xl font-bold text-cyan-400">{num}</h3>
            <p className="text-gray-400 mt-2">{label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-4xl font-bold">
          The Future Doesn't Wait.
        </h2>
        <p className="text-gray-400 mt-4">
          Join Human OS Today.
        </p>

        <button className="mt-8 px-8 py-4 bg-cyan-400 text-black font-bold rounded-full hover:scale-105 transition">
          Get Started
        </button>
      </section>

    </main>
  );
}