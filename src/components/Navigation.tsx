import { useState, useEffect } from 'react';
import { Menu, X, Home, GraduationCap, Code, Languages, Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Languages', href: '#languages', icon: Languages },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-center">
        {/* Main Floating Capsule */}
        <div className={`relative flex items-center justify-between min-w-[280px] md:min-w-[600px] px-2 py-2 rounded-[2.5rem] transition-all duration-700 ${
          isScrolled 
            ? isDark 
              ? 'bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl' 
              : 'bg-white/80 backdrop-blur-2xl border border-slate-200 shadow-xl'
            : 'bg-transparent'
        }`}>
          
          {/* LEFT: Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-500 hover:scale-110 ${
              isDark 
                ? 'bg-emerald-500/10 text-yellow-400 border border-emerald-500/20' 
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* MIDDLE: Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative flex items-center gap-2 px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* RIGHT: Mobile Menu Button / Placeholder for balance */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 active:scale-90 transition-transform"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Desktop-la right side empty-ah illama irukka oru Contact link (Optional) */}
            <button 
              onClick={() => scrollToSection('#contact')}
              className={`hidden md:flex px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                isDark ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20'
              }`}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-x-6 top-24 md:hidden transition-all duration-500 transform ${
        isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-5 scale-95 pointer-events-none'
      }`}>
        <div className={`p-6 rounded-[2.5rem] border shadow-2xl ${
          isDark ? 'bg-slate-900/95 border-white/10 backdrop-blur-xl' : 'bg-white/95 border-slate-200 backdrop-blur-xl'
        }`}>
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center gap-4 p-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
                  isDark ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-emerald-50 text-slate-700'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}