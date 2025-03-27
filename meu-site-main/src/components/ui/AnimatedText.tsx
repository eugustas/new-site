
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  texts, 
  className,
  speed = 100,
  delay = 3000,
  loop = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isWaiting) {
      timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    const text = texts[currentIndex];
    
    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        if (currentIndex === texts.length - 1 && !loop) {
          return;
        }
      } else {
        timer = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, speed / 2);
      }
    } else {
      if (displayText.length === text.length) {
        setIsWaiting(true);
      } else {
        timer = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, isWaiting, texts, speed, delay, loop]);

  return (
    <div className={cn("inline-block", className)}>
      <div 
        ref={textRef}
        className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-cyan pr-1"
        style={{ animation: 'blink 0.75s step-end infinite' }}
      >
        {displayText}
      </div>
    </div>
  );
};

interface MarqueeTextProps {
  text: string;
  repeat?: number;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({ 
  text, 
  repeat = 6, 
  className,
  speed = 'normal'
}) => {
  const repeatedText = Array(repeat).fill(text).join(' • ');
  
  const speedClass = {
    slow: 'animate-[slide-left_30s_linear_infinite]',
    normal: 'animate-[slide-left_15s_linear_infinite]',
    fast: 'animate-[slide-left_10s_linear_infinite]',
  };
  
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap">
      <div className={cn("inline-block", speedClass[speed], className)}>
        {repeatedText}
      </div>
      <div className={cn("inline-block absolute left-full", speedClass[speed], className)}>
        {repeatedText}
      </div>
    </div>
  );
};

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const FadeInText: React.FC<FadeInTextProps> = ({ 
  children, 
  className,
  direction = 'up',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const animationClass = {
    up: 'animate-fade-in-up',
    down: 'animate-fade-in',
    left: 'animate-fade-in-left',
    right: 'animate-fade-in-right',
  };

  return (
    <div 
      ref={textRef}
      className={cn(
        "opacity-0",
        isVisible && animationClass[direction],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
