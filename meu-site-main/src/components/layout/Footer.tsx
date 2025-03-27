
import React from 'react';
import { FadeInText } from '@/components/ui/AnimatedText';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-dark-darker border-t border-cyan/10">
      <div className="container-custom">
        <FadeInText className="text-center">
          <p className="text-white/60">
            Copyright © {currentYear} | Gustavo Business - Todos os Direitos Reservados
          </p>
        </FadeInText>
      </div>
    </footer>
  );
};

export default Footer;
