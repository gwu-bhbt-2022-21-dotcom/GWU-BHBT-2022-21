import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, Sparkles, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  const { isDark } = useTheme();

  // Function to handle CV Download
  const handleDownloadCV = () => {
    // Replace this with the actual path to your CV file in the public folder
    const cvUrl = "/Aayisha_CV.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Aayisha_CV.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      {/* --- INLINE PREMIUM CSS --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob-premium {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float-premium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes text-shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scroll-flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-blob-slow { animation: blob-premium 10s infinite alternate; }
        .animate-float-slow { animation: float-premium 6s ease-in-out infinite; }
        
        .premium-text-gradient {
          background: linear-gradient(to right, #059669, #0d9488, #0891b2);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shine 4s linear infinite;
        }
        
        .glass-card {
          background: ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)'};
          backdrop-filter: blur(15px);
          border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(16, 185, 129, 0.2)'};
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
        }
        
        .btn-premium-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-premium-shine::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: 0.6s;
        }
        .btn-premium-shine:hover::before { left: 100%; }
      `}} />

      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${
          isDark ? "bg-[#020617]" : "bg-[#f0f9f6]"
        }`}
      >
        {/* --- DYNAMIC BACKGROUND --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className={`absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] animate-blob-slow opacity-30 ${isDark ? 'bg-emerald-900/40' : 'bg-emerald-200'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] animate-blob-slow opacity-30 delay-1000 ${isDark ? 'bg-cyan-900/40' : 'bg-cyan-200'}`}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
            
            {/* --- CONTENT SECTION --- */}
            <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">
              
              <div className="space-y-4">
                <h1 className={`text-6xl md:text-8xl font-black tracking-tighter leading-tight ${isDark ? "text-white" : "text-emerald-950"}`}>
                  I.F. <span className="premium-text-gradient">Aayisha</span>
                </h1>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["Biomedical Technology", "Frontend Developer", "Data Analysis"].map((tag) => (
                    <span key={tag} className={`px-5 py-2 glass-card rounded-2xl text-sm font-extrabold tracking-wide border ${
                      isDark ? "text-emerald-400 border-white/10" : "text-emerald-800 border-emerald-100"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className={`text-xl md:text-2xl leading-relaxed max-w-xl font-bold ${isDark ? "text-slate-300" : "text-emerald-900/80"}`}>
                Bridging <span className="text-emerald-600 dark:text-emerald-400">biological science</span> with 
                <span className="text-teal-600 dark:text-teal-400 font-black"> digital intelligence</span>.
              </p>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-4 p-4 glass-card rounded-2xl group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/30">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <span className={`font-black text-sm ${isDark ? "text-slate-200" : "text-emerald-900"}`}>Galle, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-4 p-4 glass-card rounded-2xl group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-600/30">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <span className={`font-black text-sm ${isDark ? "text-slate-200" : "text-emerald-900"}`}>076 434 5662</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <button 
                  onClick={() => window.location.href = 'mailto:your-email@example.com'}
                  className="btn-premium-shine group px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(5,150,105,0.4)] transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Mail className="w-6 h-6" />
                  Hire Me
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>

                <button 
                  onClick={handleDownloadCV}
                  className={`px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 border-2 active:scale-95 ${
                    isDark 
                    ? "border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10" 
                    : "border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                  }`}
                >
                  <Download className="w-6 h-6" />
                  Download CV
                </button>
              </div>
            </div>

            {/* --- PREMIUM IMAGE SECTION --- */}
            <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative animate-float-slow">
                <div className={`absolute -inset-6 border-2 rounded-[4rem] rotate-12 ${isDark ? 'border-emerald-500/20' : 'border-emerald-200'}`}></div>
                <div className={`absolute -inset-6 border-2 rounded-[4rem] -rotate-12 animate-pulse ${isDark ? 'border-teal-500/10' : 'border-teal-200'}`}></div>
                
                <div className={`relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-[3rem] overflow-hidden border-[10px] shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-700 ${
                  isDark ? "border-slate-800" : "border-white"
                }`}>
                  <img
                    src={profileImg}
                    alt="I.F. Aayisha"
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute -bottom-8 -left-8 glass-card px-8 py-5 rounded-3xl animate-bounce shadow-2xl border-emerald-500/30">
                  <p className="text-emerald-600 dark:text-emerald-400 font-black text-3xl leading-none">BHSc</p>
                  <p className={`text-[11px] font-black uppercase tracking-[0.2em] mt-1 ${isDark ? 'text-white' : 'text-emerald-950'}`}>Graduate Student</p>
                  <div className="absolute -top-3 -right-3 bg-yellow-400 p-1.5 rounded-full shadow-lg">
                    <Sparkles className="text-white w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- PREMIUM SCROLL INDICATOR --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className={`text-[11px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-emerald-500/50' : 'text-emerald-900/40'}`}>Scroll</span>
          <div className={`w-[3px] h-20 rounded-full overflow-hidden relative ${isDark ? 'bg-white/10' : 'bg-emerald-950/10'}`}>
            <div 
              className="absolute top-0 left-0 w-full h-1/2 bg-emerald-500 shadow-[0_0_10px_#10b981]"
              style={{ animation: 'scroll-flow 2s infinite linear' }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}