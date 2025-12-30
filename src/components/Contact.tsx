import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-24 relative overflow-hidden transition-all duration-700 ${
      isDark ? 'bg-[#020617]' : 'bg-slate-50'
    }`}>
      
      {/* --- PREMIUM ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 animate-pulse ${isDark ? 'bg-emerald-600' : 'bg-emerald-300'}`}></div>
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 animate-pulse delay-700 ${isDark ? 'bg-teal-600' : 'bg-teal-300'}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black tracking-[0.3em] uppercase mb-4 animate-bounce">
            <MessageSquare className="w-4 h-4" />
            Let's Talk
          </div>
          <h2 className={`text-5xl md:text-7xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Location Card */}
          <div className={`group p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.3)] ${
            isDark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-slate-100 shadow-xl'
          }`}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform">
              <MapPin className="text-white w-8 h-8" />
            </div>
            <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Location</h3>
            <div className={`space-y-1 font-bold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>34, Mahadangahawatta</p>
              <p>Uluvitike, Galle</p>
              <p className="text-emerald-500">Sri Lanka</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className={`group p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(20,184,166,0.3)] ${
            isDark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-slate-100 shadow-xl'
          }`}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform">
              <Phone className="text-white w-8 h-8" />
            </div>
            <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Phone</h3>
            <a href="tel:0764345662" className={`text-xl font-black transition-all hover:tracking-widest ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              076 434 5662
            </a>
            <p className={`mt-2 font-bold text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Available Mon - Fri</p>
          </div>

          {/* Collaboration Card */}
          <div className={`group p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(6,182,212,0.3)] ${
            isDark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-slate-100 shadow-xl'
          }`}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform">
              <Send className="text-white w-8 h-8" />
            </div>
            <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Services</h3>
            <div className="flex flex-wrap gap-2">
              {['Internships', 'Web Dev', 'Research'].map(tag => (
                <span key={tag} className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter border ${
                  isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-100 text-emerald-700'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* --- BIG CTA BOX --- */}
        <div className={`relative rounded-[3.5rem] p-12 md:p-20 overflow-hidden text-center border shadow-3xl ${
          isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-100'
        }`}>
          {/* Decorative Sparkle Icons */}
          <Sparkles className="absolute top-10 left-10 text-emerald-500/20 w-12 h-12 animate-pulse" />
          <Sparkles className="absolute bottom-10 right-10 text-teal-500/20 w-12 h-12 animate-pulse delay-500" />

          <h3 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Ready to start a <span className="premium-text-gradient underline decoration-emerald-500/30">new project</span>?
          </h3>
          <p className={`text-xl font-bold max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            I am looking for opportunities to merge my biomedical background with modern technology. Let's build something impactful.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:your-email@example.com"
              className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(5,150,105,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-6 h-6" />
              Send an Email
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="tel:0764345662"
              className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg border-2 transition-all hover:scale-105 active:scale-95 ${
                isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Phone className="w-6 h-6 text-emerald-500" />
              Direct Call
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright Subtle */}
      <div className={`text-center mt-20 mb-10 text-[10px] font-black uppercase tracking-[0.5em] opacity-30 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        © 2024 I.F. AAYISHA • BIOMEDICAL TECH & DEV
      </div>
    </section>
  );
}