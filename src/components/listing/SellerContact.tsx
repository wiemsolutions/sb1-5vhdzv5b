import { Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SellerContactProps {
  email: string;
  phone: string;
  sellerId: string;
}

export default function SellerContact({ email, phone, sellerId }: SellerContactProps) {
  const navigate = useNavigate();
  
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${phone}`;
  };

  const handleContactClick = () => {
    navigate(`/seller/${sellerId}`);
  };

  return (
    <div className="space-y-4">
      <div 
        className="flex items-center text-gray-600 hover:text-sea-600 cursor-pointer transition-colors"
        onClick={handleEmailClick}
      >
        <Mail className="w-5 h-5 mr-2" />
        <span>{email}</span>
      </div>
      <div 
        className="flex items-center text-gray-600 hover:text-sea-600 cursor-pointer transition-colors"
        onClick={handlePhoneClick}
      >
        <Phone className="w-5 h-5 mr-2" />
        <span>{phone}</span>
      </div>
      <button
        onClick={handleContactClick}
        className="w-full md:w-auto px-6 py-3 bg-sea-600 text-white rounded-lg font-semibold hover:bg-sea-700 transition-colors"
      >
        Skontaktuj się ze sprzedającym
      </button>
    </div>
  );
}