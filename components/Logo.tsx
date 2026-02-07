
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <img
        src="/assets/logo.png"
        alt="KR Media Group"
        className="h-16 w-auto object-contain"
        style={{ filter: 'brightness(1)' }}
      />
    </div>
  );
};

export default Logo;
