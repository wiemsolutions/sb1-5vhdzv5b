import { ReactNode } from 'react';

interface AdContainerProps {
  children: ReactNode;
  className?: string;
}

export default function AdContainer({ children, className = '' }: AdContainerProps) {
  return (
    <div className={`bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}