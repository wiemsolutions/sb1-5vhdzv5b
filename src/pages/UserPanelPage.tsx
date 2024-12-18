import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  User, 
  Settings, 
  Bell, 
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { featuredListings } from '../data/featuredListings';
import { useAuth } from '../contexts/AuthContext';

const tabs = [
  { id: 'listings', label: 'Moje ogłoszenia', icon: Building2 },
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'notifications', label: 'Powiadomienia', icon: Bell },
  { id: 'settings', label: 'Ustawienia', icon: Settings }
];

export default function UserPanelPage() {
  const [activeTab, setActiveTab] = useState('listings');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const userListings = featuredListings.slice(0, 3); // Mock user's listings

  const renderTabContent = () => {
    switch (activeTab) {
      case 'listings':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Moje ogłoszenia ({userListings.length})
              </h2>
              <button
                onClick={() => navigate('/add-listing')}
                className="inline-flex items-center px-4 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700"
              >
                <Plus className="w-5 h-5 mr-2" />
                Dodaj ogłoszenie
              </button>
            </div>

            <div className="grid gap-6">
              {userListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{listing.title}</h3>
                      <p className="text-sm text-gray-500">
                        Dodano: {new Date(listing.dateAdded).toLocaleDateString()}
                      </p>
                      <p className="text-sm font-medium text-sea-600">{listing.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => navigate(`/listing/${listing.id}`)}
                      className="p-2 text-gray-600 hover:text-sea-600"
                      title="Zobacz ogłoszenie"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigate(`/edit-listing/${listing.id}`)}
                      className="p-2 text-gray-600 hover:text-sea-600"
                      title="Edytuj ogłoszenie"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-red-600"
                      title="Usuń ogłoszenie"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Profil</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    value="Jan Kowalski"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    value="jan.kowalski@example.com"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    value="+48 123 456 789"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Firma
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    value="WIEM Solutions sp. z o.o."
                    readOnly
                  />
                </div>
              </div>
              <button className="mt-6 px-4 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700">
                Edytuj profil
              </button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Powiadomienia</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
                    defaultChecked
                  />
                  <span className="text-gray-700">
                    Powiadomienia email o nowych wiadomościach
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
                    defaultChecked
                  />
                  <span className="text-gray-700">
                    Powiadomienia o nowych ofertach w wybranych kategoriach
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
                    defaultChecked
                  />
                  <span className="text-gray-700">
                    Newsletter z poradami i nowościami
                  </span>
                </label>
              </div>
              <button className="mt-6 px-4 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700">
                Zapisz ustawienia
              </button>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Ustawienia</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Zmiana hasła
                  </h3>
                  <div className="grid gap-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Obecne hasło
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nowe hasło
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Potwierdź nowe hasło
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700">
                    Zmień hasło
                  </button>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Usuń konto
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Usunięcie konta jest nieodwracalne. Wszystkie Twoje dane zostaną trwale usunięte.
                  </p>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Usuń konto
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-left ${
                    activeTab === tab.id
                      ? 'bg-sea-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}