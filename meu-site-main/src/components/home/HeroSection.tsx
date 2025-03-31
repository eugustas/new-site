
//import React from 'react';
import { Typewriter } from '@/components/ui/AnimatedText';
import { ArrowRight, Bot } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16">
      <div className="container-custom">
        {/* Static text with reflection animation */}
        <div className="mb-6 py-2 bg-dark-lighter/60 backdrop-blur-sm rounded-lg overflow-hidden flex justify-center">
          <h3 className="text-xl font-semibold text-cyan animate-text-reflection whitespace-nowrap">
            Gustavo Dev
          </h3>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 text-gradient"> 
            Sala de Sinais para apostas na bet365
          </h1>
          
          {/* Added Bot Icon */}
          <div className="mb-6">
            <Bot size={70} className="text-cyan animate-float" />
          </div>
          
          <div className="h-16 mb-6 hidden sm:block"> {/* Removendo no mobile */}
  <Typewriter 
    texts={[
      "Criando tecnologia para seu sucesso...",
      "Transformando ideias em realidade digital...",
      "Desenvolvendo soluções para o futuro...",
      "Inovação tecnológica para seu negócio..."
    ]}
    className="text-xl md:text-2xl text-white/80"
  />
</div>

          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-8 leading-relaxed">
            Sinais de Entradas Grátis, clique no botão abaixo.
          </p>
          
          <a 
            href="https://t.me/+pjHeHAM5jnAzYThh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group flex items-center gap-2 animate-pulse-cyan"
          >
            <span>Entrar no Canal</span>
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </a>
        </div>
        
        {/* Divider */}
        <div className="divider mt-18 mb-0"></div>
      </div>
    </section>
  );
};

export default HeroSection;

