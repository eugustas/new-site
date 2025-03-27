
import React from 'react';
import { FadeInText } from '@/components/ui/AnimatedText';
import { ArrowRight } from 'lucide-react';

const SourceCodeSection: React.FC = () => {
  return (
    <section id="source-code" className="py-5 bg-dark-lighter/0">
      <div className="container-custom">
        <FadeInText className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan">
            Obter os códigos fontes
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Clique no botão abaixo
          </p>
        </FadeInText>
        
        <FadeInText direction="up" delay={300} className="flex justify-center">
          <a 
            href="https://pay.kiwify.com.br/JulB2UH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group flex items-center gap-2"
          >
            <span>Obter códigos</span>
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </a>
        </FadeInText>
        
        {/* Divider */}
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default SourceCodeSection;
