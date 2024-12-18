import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import AddListingButton from './AddListingButton';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleSellBusinessClick = () => {
    navigate('/packages');
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo 
              onClick={() => navigate('/')} 
              className="hover:opacity-90 transition-opacity"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/listings" className="text-gray-700 hover:text-sea-600">
              Kup firmę
            </Link>
            <button 
              onClick={handleSellBusinessClick}
              className="text-gray-700 hover:text-sea-600"
            >
              Sprzedaj firmę
            </button>
            <a href="#" className="text-gray-700 hover:text-sea-600">Franczyzy</a>
            <a href="#" className="text-gray-700 hover:text-sea-600">Zasoby</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button 
                  onClick={() => navigate('/user-panel')}
                  className="px-4 py-2 text-gray-700 hover:text-sea-600"
                >
                  Panel użytkownika
                </button>
                <button 
                  onClick={logout}
                  className="px-4 py-2 text-gray-700 hover:text-sea-600"
                >
                  Wyloguj się
                </button>
              </>
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-gray-700 hover:text-sea-600"
              >
                Zaloguj się
              </button>
            )}
            <AddListingButton />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/listings"
              className="block px-3 py-2 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Kup firmę
            </Link>
            <button 
              onClick={() => {
                handleSellBusinessClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-700"
            >
              Sprzedaj firmę
            </button>
            <a href="#" className="block px-3 py-2 text-gray-700">Franczyzy</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Zasoby</a>
            {isAuthenticated ? (
              <>
                <Link
                  to="/user-panel"
                  className="block px-3 py-2 text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Panel użytkownika
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700"
                >
                  Wyloguj się
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                className="block px-3 py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Zaloguj się
              </Link>
            )}
            <AddListingButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}