import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = '' }: BackButtonProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-sea-600 transition-colors ${className}`}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Powrót do listy
    </Link>
  );
}