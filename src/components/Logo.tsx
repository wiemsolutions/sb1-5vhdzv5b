import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({ className = '', onClick }: LogoProps) {
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Preload the image to check if it exists
    const img = new Image();
    img.onerror = () => setLogoError(true);
    img.src = '/logo.png';
  }, []);

  if (logoError) {
    // Fallback text-based logo if image fails to load
    return (
      <span className={`text-2xl font-bold cursor-pointer ${className}`} onClick={onClick}>
        <span className="text-[#4CAF50]">KS</span>
        <span className="text-[#0284c7]">BIZNES</span>
      </span>
    );
  }

  return (
    <div className={`flex items-center cursor-pointer ${className}`} onClick={onClick}>
      <img 
        src="/logo.png" 
        alt="KSBiznes" 
        className="h-8 w-auto"
        onError={() => setLogoError(true)}
      />
    </div>
  );
}