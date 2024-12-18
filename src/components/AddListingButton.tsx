import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface AddListingButtonProps {
  className?: string;
}

export default function AddListingButton({ className = '' }: AddListingButtonProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/add-listing');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-sea-600 text-white rounded-md hover:bg-sea-700 transition-colors ${className}`}
    >
      Dodaj firmę
    </button>
  );
}