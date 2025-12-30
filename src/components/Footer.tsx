import { Heart, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`text-white py-8 transition-colors duration-300 ${
      isDark ? 'bg-gray-950' : 'bg-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className={`flex items-center justify-center gap-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-emerald-400" />
            <span>React & Tailwind CSS</span>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            I.F. Aayisha
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Biomedical Technology Student | Frontend Developer
          </p>
          <div className={`pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-700'}`}>
            <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
