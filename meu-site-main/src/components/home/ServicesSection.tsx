import React from 'react';
import { FadeInText } from '@/components/ui/AnimatedText';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Bot, Network, Code, ExternalLink } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, link }) => {
  return (
    <div className="relative h-full group"> 
      {/* Neon Light Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="neon-lights top-left"></div>
        <div className="neon-lights top-right"></div>
        <div className="neon-lights bottom-left"></div>
        <div className="neon-lights bottom-right"></div>
      </div>

      <AnimatedCard className="p-6 h-full flex flex-col items-center text-center bg-dark-darker m-[2px] rounded-lg relative z-10 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
        <div className="p-4 rounded-full bg-dark-darker/80 border border-cyan/20 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan hover:text-cyan-dark transition-colors duration-300 font-medium"
          >
            <span>Saiba mais</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </AnimatedCard>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Bot size={36} className="text-cyan" />,
      title: "Criação de Bots Telegram",
      link: "https://wa.link/sclvo6"
    },
    {
      icon: <Network size={36} className="text-cyan" />,
      title: "Criar um projeto Customizado",
      link: "https://wa.link/sc04hg"
    },
    {
      icon: <Code size={36} className="text-cyan" />,
      title: "Desenvolvimento de Soluções Web",
      link: "https://wa.link/0mg49j"
    }
  ];

  return (
    <section id="services" className="py-0">
      <div className="container-custom mx-auto">
        <FadeInText className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan">
            Serviços Disponíveis
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Sou especialista no desenvolvimento de bots versáteis para o Telegram
            e ofereço soluções de software sob medida, utilizando a poderosa tecnologia 
            Python para atender às suas necessidades específicas.
          </p>
        </FadeInText>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <FadeInText key={index} delay={index * 200} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                link={service.link}
              />
            </FadeInText>
          ))}
        </div>
        
        {/* Divider */}
        <div className="divider mt-18 mb-0"></div>
      </div>
    </section>
  );
};

export default ServicesSection;
