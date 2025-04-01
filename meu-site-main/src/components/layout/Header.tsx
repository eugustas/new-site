import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [lastScrollTop, setLastScrollTop] = useState(0); // Armazenando a última posição de rolagem
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Controlando a visibilidade do cabeçalho
  
  const handleNavItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onScrollToSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Se o usuário rolou para baixo e o cabeçalho está visível, ocultá-lo
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setIsHeaderVisible(false); // Esconde o cabeçalho
      } else if (currentScrollTop < lastScrollTop) {
        setIsHeaderVisible(true); // Mostra o cabeçalho
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Para evitar valores negativos de scroll
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'source-code', label: 'Códigos Fonte' },
    { id: 'services', label: 'Serviços' },
    { label: 'Contato', external: true, href: 'https://wa.link/a8lijs' },
    { id: 'contribution', label: 'Contribuir', highlight: true },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-dark-darker/95 backdrop-blur-sm border-b border-cyan/10 transition-transform duration-300",
        isHeaderVisible ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
      <div className="container-custom flex items-center justify-between h-12 md:h-14">
        
   {/* Logo */}
<span className="flex items-center">
  {/* Miniatura */}
  <img 
    src="/images/logo.jpeg" 
    alt="Miniatura" 
    className="w-10 h-10 mr-2 rounded-full border-2 border-cyan-500 transition-all duration-300 hover:border-cyan-400"
  />
  <span className="font-bold text-base md:text-lg text-cyan transition-colors duration-300 hover:text-glow">
    Gustavo Dev
  </span>
</span>

        
        {/* Desktop Navigation (Visible only on Desktop) */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.external ? (
                <a 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-xs px-2 py-1"
                >
                  {item.label}
                </a>
              ) : (
                <button 
                  onClick={() => handleNavItemClick(item.id)}
                  className={cn(
                    "nav-link text-xs px-2 py-1",
                    activeSection === item.id && "active",
                    item.highlight && "bg-cyan text-black hover:bg-cyan-dark ml-1 rounded-md"
                  )}
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </nav>
        
        {/* Mobile - "Contribuir" Button beside the Logo */}
        <div className="md:hidden flex items-center space-x-4">
          {/* "Contribuir" button on mobile */}
          <button 
            onClick={() => handleNavItemClick('contribution')}
            className="text-sm text-cyan hover:text-glow py-1 px-4 bg-gray-700 rounded-md transition-colors duration-300"
          >
            Contribuir
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
