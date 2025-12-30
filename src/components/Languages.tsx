import { Languages as LanguagesIcon, Globe2, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Languages() {
  const { isDark } = useTheme();
  
  const languages = [
    { name: 'Sinhala', level: 100, flag: '🇱🇰', status: 'Native', color: '#f59e0b', secondary: '#ef4444' },
    { name: 'Tamil', level: 100, flag: '🇱🇰', status: 'Native', color: '#ef4444', secondary: '#f97316' },
    { name: 'English', level: 90, flag: '🇬🇧', status: 'Professional', color: '#3b82f6', secondary: '#06b6d4' },
  ];

  return (
    <section id="languages" className={`py-24 relative overflow-hidden transition-all duration-700 ${
      isDark ? 'bg-[#020617]' : 'bg-slate-50'
    }`}>
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 ${isDark ? 'bg-emerald-500' : 'bg-emerald-200'}`}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black tracking-[0.3em] uppercase mb-4">
            <Globe2 className="w-4 h-4" />
            Communication Skills
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Languages <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">I Speak</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {languages.map((lang, index) => {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (lang.level / 100) * circumference;

            return (
              <div
                key={index}
                className={`group relative rounded-[3rem] p-8 transition-all duration-500 hover:-translate-y-3 border shadow-2xl ${
                  isDark ? 'bg-slate-900/50 border-white/5 shadow-black' : 'bg-white border-slate-100 shadow-slate-200'
                }`}
              >
                {/* Top Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] pointer-events-none"></div>

                <div className="text-center relative z-10">
                  {/* Flag & Status */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-4xl filter drop-shadow-lg">{lang.flag}</span>
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                      isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-100 text-emerald-700'
                    }`}>
                      {lang.status}
                    </span>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative inline-flex items-center justify-center mb-8">
                    <svg className="w-44 h-44 transform -rotate-90">
                      {/* Background Circle */}
                      <circle
                        cx="88"
                        cy="88"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className={isDark ? 'text-slate-800' : 'text-slate-100'}
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="88"
                        cy="88"
                        r={radius}
                        stroke={`url(#grad-${index})`}
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000 ease-out group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                      />
                      <defs>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={lang.color} />
                          <stop offset="100%" stopColor={lang.secondary} />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Percentage Text */}
                    <div className="absolute flex flex-col items-center">
                      <span className={`text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {lang.level}%
                      </span>
                      <Sparkles className="w-4 h-4 text-emerald-500 mt-1 animate-pulse" />
                    </div>
                  </div>

                  {/* Language Name */}
                  <h3 className={`text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang.name}
                  </h3>
                  
                  {/* Skill Badges */}
                  <div className="mt-6 flex justify-center gap-2">
                    {['Writing', 'Reading', 'Speaking'].map((s) => (
                      <div key={s} className={`w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500`}></div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}