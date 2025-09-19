import { useState } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import pistoleroLogo from 'figma:asset/2d94bd043924470b769c7f31998426aa9364b02d.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navItems = ['home', 'services', 'scheduling', 'contact'];

  return (
    <>
      {/* Mobile Contact Bar */}
      <div className="lg:hidden bg-[#3F1D1D] text-white py-2">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          <a
            href="tel:+15551234567"
            className="flex items-center space-x-1 text-sm hover:text-[#59C9A5] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{t('phone')}</span>
          </a>
          <a
            href="https://wa.me/15551234567"
            className="flex items-center space-x-1 text-sm hover:text-[#59C9A5] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t('whatsapp')}</span>
          </a>
          <a
            href="https://maps.google.com"
            className="flex items-center space-x-1 text-sm hover:text-[#59C9A5] transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>{t('directions')}</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigate('home')}
            >
              <img 
                src={pistoleroLogo} 
                alt="Pistolero Express Logo" 
                className="h-14 w-14 lg:h-16 lg:w-16"
              />
              <div className="ml-3 hidden sm:block">
                <h1 className="text-xl lg:text-2xl text-[#3F1D1D] tracking-wide">PISTOLERO</h1>
                <p className="text-sm lg:text-base text-[#817F82] -mt-1">EXPRESS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`text-base transition-colors ${
                    currentPage === item 
                      ? 'text-[#3F1D1D] border-b-2 border-[#3F1D1D] pb-1' 
                      : 'text-gray-600 hover:text-[#3F1D1D]'
                  }`}
                >
                  {t(item)}
                </button>
              ))}
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    language === 'en' 
                      ? 'bg-white text-[#3F1D1D] shadow-sm' 
                      : 'text-gray-600 hover:text-[#3F1D1D]'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    language === 'es' 
                      ? 'bg-white text-[#3F1D1D] shadow-sm' 
                      : 'text-gray-600 hover:text-[#3F1D1D]'
                  }`}
                >
                  ES
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-[#3F1D1D] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`block w-full text-left py-2 transition-colors ${
                    currentPage === item 
                      ? 'text-[#3F1D1D] border-l-4 border-[#3F1D1D] pl-4' 
                      : 'text-gray-600 hover:text-[#3F1D1D]'
                  }`}
                >
                  {t(item)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}