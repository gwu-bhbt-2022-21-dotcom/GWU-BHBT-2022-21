import { Code, Database, Activity, Cpu, FlaskConical, Search, Users, FileText, Monitor, Wrench, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();

  const itSkills = [
    { name: 'MS Office Suite', level: 100, icon: '💼', color: 'from-blue-600 to-indigo-600' },
    { name: 'Medical Documentation', level: 90, icon: '📋', color: 'from-emerald-500 to-teal-500' },
    { name: 'Academic Research', level: 95, icon: '🔍', color: 'from-cyan-500 to-blue-500' },
  ];

  const webSkills = [
    { name: 'HTML5', level: 100, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3 / Tailwind', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript (ES6+)', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-600' },
  ];

  const biomedicalSkills = [
    { icon: Activity, name: 'ECG / EMG Sensors', color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { icon: Cpu, name: 'Arduino Systems', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { icon: Activity, name: 'Pressure Sensors', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: FlaskConical, name: 'Signal Acquisition', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { icon: Wrench, name: 'Device Calibration', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: Monitor, name: 'MATLAB Analysis', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  ];

  return (
    <section id="skills" className={`py-24 relative overflow-hidden transition-all duration-700 ${
      isDark ? 'bg-[#020617]' : 'bg-slate-50'
    }`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Expertise & Toolbox
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Web & Software (Visual Progress Bars) */}
          <div className="lg:col-span-7 space-y-8">
            <div className={`p-8 rounded-[2.5rem] border shadow-2xl ${isDark ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-100'}`}>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
                  <Code className="text-white w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Development & Software</h3>
              </div>

              <div className="space-y-8">
                {[...webSkills, ...itSkills.slice(0, 1)].map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <span className={`font-black tracking-wide ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{skill.name}</span>
                      <span className={`text-sm font-black p-1 px-3 rounded-lg bg-emerald-500/10 text-emerald-500`}>{skill.level}%</span>
                    </div>
                    <div className={`h-3 w-full rounded-full overflow-hidden p-[2px] ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color || 'from-emerald-500 to-teal-500'} relative transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Tools - Wide Card */}
            <div className="grid md:grid-cols-2 gap-6">
               <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-900/20">
                  <Search className="w-10 h-10 mb-4 opacity-50" />
                  <h4 className="text-xl font-black mb-2">Academic Research</h4>
                  <p className="text-emerald-50/80 text-sm font-medium">Expertise in PubMed, Google Scholar & systematic literature reviews.</p>
               </div>
               <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-100 shadow-xl'}`}>
                  <FileText className="w-10 h-10 mb-4 text-cyan-500 opacity-50" />
                  <h4 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Report Writing</h4>
                  <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} text-sm font-medium`}>Professional technical documentation for medical devices & research.</p>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Biomedical Skills (Modern Grid) */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`p-8 rounded-[2.5rem] border shadow-2xl h-full ${isDark ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-100'}`}>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-rose-500 rounded-2xl shadow-lg shadow-rose-500/20">
                  <Activity className="text-white w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Biomedical Expertise</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {biomedicalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-emerald-500/20 group ${
                      isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-50 hover:bg-emerald-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${skill.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <span className={`font-black text-sm tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Professional Skills Pills */}
              <div className="mt-12 flex flex-wrap gap-3">
                {['Teamwork', 'Communication', 'Problem Solving', 'Ethics'].map(s => (
                  <span key={s} className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border ${
                    isDark ? 'bg-white/5 border-white/10 text-emerald-400' : 'bg-emerald-50 border-emerald-100 text-emerald-700'
                  }`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}