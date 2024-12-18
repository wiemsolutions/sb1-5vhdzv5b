import { ReactNode } from 'react';
import { useGoogleMapsScript } from '../../hooks/useGoogleMapsScript';

interface MapContainerProps {
  children: ReactNode;
  height?: string;
  className?: string;
}

export default function MapContainer({ 
  children, 
  height = "h-64",
  className = ""
}: MapContainerProps) {
  const isLoaded = useGoogleMapsScript();

  if (!isLoaded) {
    return (
      <div className={`${height} bg-gray-100 rounded-lg animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`${height} rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}