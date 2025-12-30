import { GraduationCap, Award, Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Education() {
  const { isDark } = useTheme();

  const education = [
    {
      degree: 'BHSc (Hons) Biomedical Technology',
      institution: 'Gampaha Wickramarachchi University of Indigenous Medicine',
      status: 'Currently Reading',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      description: 'Focusing on medical instrumentation, biotechnology, and healthcare innovation.'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'ICBT Campus',
      status: 'Completed',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-teal-500 via-cyan-500 to-blue-500',
      description: 'Gained fundamental knowledge in software development and computing systems.'
    },
    {
      degree: 'Diploma in English',
      institution: 'Non Formal Resource Center',
      status: 'Completed',
      icon: <Award className="w-8 h-8" />,
      color: 'from-cyan-500 via-blue-500 to-indigo-500',
      description: 'Enhanced professional communication and academic English proficiency.'
    }
  ];

  return (
    <section id="education" className={`py-24 relative overflow-hidden transition-all duration-700 ${
      isDark ? 'bg-[#020617]' : 'bg-slate-50'
    }`}>
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-emerald-600' : 'bg-emerald-200'}`}></div>
        <div className={`absolute bottom-1/4 -right-20 w-80 h-80 rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-cyan-600' : 'bg-cyan-200'}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black tracking-[0.3em] uppercase mb-6 animate-pulse">
            <GraduationCap className="w-4 h-4" />
            My Academic Path
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 tracking-tighter ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">& Certifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid gap-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group relative rounded-[2.5rem] p-1 shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Animated Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-[2.5rem] opacity-20 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`relative h-full rounded-[2.4rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 ${
                isDark ? 'bg-[#0a0f1e]' : 'bg-white'
              }`}>
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${edu.color} shadow-lg shadow-emerald-500/20 transform group-hover:rotate-12 transition-transform duration-500`}>
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-black mb-1 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-lg font-bold flex items-center justify-center md:justify-start gap-2 ${
                        isDark ? 'text-emerald-400' : 'text-emerald-600'
                      }`}>
                        {edu.institution}
                      </p>
                    </div>
                    <span className={`self-center md:self-start px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest border shadow-sm ${
                      isDark 
                        ? 'bg-white/5 border-white/10 text-slate-300' 
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* School Education Section */}
        <div className="mt-20">
          <div className={`rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100'
          }`}>
            <h3 className={`text-3xl font-black mb-10 flex items-center gap-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Award className="w-10 h-10 text-emerald-500" />
              Schooling Years
            </h3>

            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Connector line for large screens */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/50 to-transparent"></div>

              {[
                { name: 'G/Navinna Muslim Maha Vidyalaya', period: 'Grade 1-11', icon: '🏫', loc: 'Junior Secondary' },
                { name: 'Malharus Sulhiya National School', period: 'Grade 12-13', icon: '🏛️', loc: 'Advanced Level' }
              ].map((school, index) => (
                <div
                  key={index}
                  className={`relative group p-6 rounded-2xl transition-all duration-300 ${
                    isDark ? 'hover:bg-white/5' : 'hover:bg-emerald-50'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform">{school.icon}</div>
                    <div>
                      <h4 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{school.name}</h4>
                      <div className="flex flex-col gap-1">
                        <span className="text-emerald-500 font-bold text-sm uppercase tracking-tighter">{school.loc}</span>
                        <div className={`flex items-center gap-2 text-sm font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          <Calendar className="w-4 h-4" />
                          {school.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}