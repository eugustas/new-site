
import React, { useState } from 'react';
import { FadeInText } from '@/components/ui/AnimatedText';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContributionSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const pixKey = "00020126510014BR.GOV.BCB.PIX0121gustasuport@gmail.com0204Site5204000053039865802BR5925Gustavo Miranda Guimaraes6009SAO PAULO62140510FzYVX8kazG63048EAA";
  
  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    
    toast({
      title: "Chave Pix copiada!",
      description: "A chave foi copiada para a área de transferência.",
      duration: 3000,
    });
    
    setTimeout(() => setCopied(false), 3000);
  };
  
  return (
    <section id="contribution" className="py-20 bg-dark-lighter/0">
      <div className="container-custom">
        <FadeInText className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan">
            Contribuir
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Faça uma doação, copie a chave abaixo e cole no seu banco. 
            Qualquer valor será bem-vindo.
          </p>
        </FadeInText>
        
        <FadeInText delay={200} className="max-w-3xl mx-auto">
          <div className="bg-dark-darker p-6 rounded-lg border border-cyan/20 flex flex-col">
            <div className="mb-4">
              <p className="text-white/60 mb-2 text-sm">Chave Pix:</p>
              <div className="bg-dark-card p-4 rounded-md border border-cyan/10 font-mono text-sm md:text-base break-all select-all">
                {pixKey}
              </div>
            </div>
            
            <div className="relative self-center mt-4">
              {/* Animated border effect for button */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan via-cyan-light to-cyan-dark rounded-md animate-border-rotate"></div>
              <button 
                onClick={handleCopyPix}
                className="btn-primary relative z-10 m-[2px] flex items-center gap-2 overflow-hidden group"
              >
                {/* Light reflection effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-slide-right"></div>
                
                {copied ? (
                  <>
                    <Check size={18} />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copiar Chave Pix</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </FadeInText>
      </div>
    </section>
  );
};

export default ContributionSection;
