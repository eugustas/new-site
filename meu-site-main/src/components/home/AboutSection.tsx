import React from 'react'; // Importando o React para poder usar JSX e hooks no componente
import { FadeInText } from '@/components/ui/AnimatedText'; // Importando o componente de animação de texto
import { Instagram, Upload } from 'lucide-react'; // Importando ícones do pacote lucide-react
import { TiktokIcon } from '@/components/ui/Icons'; // Importando o ícone do TikTok
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Importando componentes para o Avatar

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-0"> {/* Seção com ID "about" para o CSS e sem padding vertical */}
      <div className="container-custom mx-auto text-center"> {/* Container personalizado com margin auto e texto centralizado */}

        {/* Avatar (foto) */}
        <FadeInText direction="left" className="flex justify-center mb-8"> {/* Aumentando o espaçamento com mb-8 */}
          <div className="relative group w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Avatar className="w-full h-full border-4 border-cyan/100">
              <AvatarImage
                src="/images/profile.jpeg"
                alt="Dev. Gustavo Business"
                className="w-full h-full object-cover"
              />
              <AvatarFallback className="bg-dark-lighter text-cyan w-full h-full flex flex-col items-center justify-center text-xl">
                <span></span>
                <span></span>
                <Upload className="mt-2" size={24} />
                <span className="text-xs mt-2"></span>
              </AvatarFallback>
            </Avatar>
          </div>
        </FadeInText>

        {/* Título "Dev. Gustavo Business" */}
        <FadeInText direction="right" className="mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan">
            Dev. Gustavo
          </h2>
        </FadeInText>

        {/* Descrição */}
<FadeInText direction="right" className="mb-6">
  <p className="text-white/70 text-lg sm:text-base md:text-lg max-w-3xl mx-auto text-center">
    Como desenvolvedor, 
    <p></p>meu objetivo é criar soluções inovadoras e personalizadas, com especialização em bots para Telegram e desenvolvimento
    <p></p>de sistemas web.
  </p>
  {/* Espaço de um dedo */}
  <p className="text-white/70 text-lg sm:text-base md:text-lg max-w-3xl mx-auto text-center mt-6">
  </p>
</FadeInText>



        {/* Redes sociais */}
        <div className="flex space-x-4 justify-center">
          {/* Instagram with animated border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan via-cyan-light to-cyan rounded-full animate-border-rotate"></div>
            <a 
              href="https://www.instagram.com/eugustadev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative bg-dark-darker m-[2px] flex items-center justify-center w-12 h-12 rounded-full z-10"
            >
              <Instagram size={24} className="text-white hover:text-cyan transition-colors duration-310" />
            </a>
          </div>

          {/* TikTok with animated border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan via-cyan-light to-cyan rounded-full animate-border-rotate"></div>
            <a 
              href="https://www.tiktok.com/@eugustadev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative bg-dark-darker m-[2px] flex items-center justify-center w-12 h-12 rounded-full z-10"
            >
              <TiktokIcon size={24} className="text-white hover:text-cyan transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mt-10 mb-5"></div>
      </div>
    </section>
  );
};

export default AboutSection; // Exportando o componente AboutSection
