
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'light' | 'medium' | 'strong';
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  glowColor = 'rgba(0, 255, 255, 0.1)',
  intensity = 'medium',
  onClick,
}) => {
  const [transform, setTransform] = useState('');
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const intensityValues = {
    light: { rotation: 5, glowSize: '100px', glowOpacity: 0.1 },
    medium: { rotation: 10, glowSize: '150px', glowOpacity: 0.40 },
    strong: { rotation: 15, glowSize: '200px', glowOpacity: 0.2 },
  };

  const { rotation, glowSize, glowOpacity } = intensityValues[intensity];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -rotation;
    const rotateY = ((x - centerX) / centerX) * rotation;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg bg-dark-card border border-cyan/10 transition-all duration-300 cursor-pointer",
        className
      )}
      style={{
        transform,
        transition: 'transform 0.3s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${glowPosition.x - parseInt(glowSize) / 2}px`,
          top: `${glowPosition.y - parseInt(glowSize) / 2}px`,
          width: glowSize,
          height: glowSize,
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 70%)`,
          opacity: transform ? glowOpacity : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      {children}
    </div>
  );
};

export default AnimatedCard;

