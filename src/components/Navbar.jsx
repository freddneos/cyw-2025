import { useState, useEffect } from 'preact/hooks';
import { useTranslation } from './i18n';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('about.title'), href: '#about' },
    { name: t('schedule.title'), href: '#schedule' },
    { name: t('topics.title'), href: '#topics' },
    { name: t('mentors.title'), href: '#mentors' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-gray-900 flex items-center">
            <span className="text-dark-pastel-green">{t('navbar.logo.first')}</span>
            <span>{t('navbar.logo.second')}</span>
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-dark-pastel-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side - Language switcher & CTA */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <a 
              href="#inscricao" 
              className="hidden md:inline-flex bg-dark-pastel-green hover:bg-dark-pastel-green/90 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              {t('cta.button')}
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-dark-pastel-green"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-dark-pastel-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#inscricao"
              className="block py-2 mt-2 bg-dark-pastel-green hover:bg-dark-pastel-green/90 text-center text-white rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('cta.button')}
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}