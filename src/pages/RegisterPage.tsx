import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, User, Building2, Phone, MapPin, Lock } from 'lucide-react';
import Logo from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';

// Helper component for form labels with required indicator
function FormLabel({ htmlFor, required = false, children }: { htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',

    // Company Information
    companyName: '',
    nip: '',
    regon: '',
    address: '',
    city: '',
    postalCode: '',

    // Additional Information
    acceptTerms: false,
    acceptNewsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Hasła nie są identyczne');
      return;
    }
    register(formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center">
          <Logo className="hover:opacity-90 transition-opacity" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Zarejestruj się
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Lub{' '}
          <Link to="/login" className="font-medium text-sea-600 hover:text-sea-500">
            zaloguj się do swojego konta
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Dane osobowe</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormLabel htmlFor="firstName" required>Imię</FormLabel>
                  <div className="mt-1 relative">
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                    />
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <FormLabel htmlFor="lastName" required>Nazwisko</FormLabel>
                  <div className="mt-1 relative">
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                    />
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <FormLabel htmlFor="email" required>Email</FormLabel>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <FormLabel htmlFor="phone" required>Telefon</FormLabel>
                <div className="mt-1 relative">
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                  />
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Dane firmy</h3>
              
              <div>
                <FormLabel htmlFor="companyName" required>Nazwa firmy</FormLabel>
                <div className="mt-1 relative">
                  <input
                    id="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                  />
                  <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormLabel htmlFor="nip" required>NIP</FormLabel>
                  <div className="mt-1">
                    <input
                      id="nip"
                      type="text"
                      required
                      value={formData.nip}
                      onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                    />
                  </div>
                </div>

                <div>
                  <FormLabel htmlFor="regon">REGON</FormLabel>
                  <div className="mt-1">
                    <input
                      id="regon"
                      type="text"
                      value={formData.regon}
                      onChange={(e) => setFormData({ ...formData, regon: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <FormLabel htmlFor="address" required>Adres</FormLabel>
                <div className="mt-1 relative">
                  <input
                    id="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                  />
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormLabel htmlFor="city" required>Miasto</FormLabel>
                  <div className="mt-1">
                    <input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                    />
                  </div>
                </div>

                <div>
                  <FormLabel htmlFor="postalCode" required>Kod pocztowy</FormLabel>
                  <div className="mt-1">
                    <input
                      id="postalCode"
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Hasło</h3>
              
              <div>
                <FormLabel htmlFor="password" required>Hasło</FormLabel>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <FormLabel htmlFor="confirmPassword" required>Potwierdź hasło</FormLabel>
                <div className="mt-1 relative">
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-sea-500 focus:border-sea-500"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Terms and Newsletter */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  id="acceptTerms"
                  type="checkbox"
                  required
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  className="h-4 w-4 text-sea-600 focus:ring-sea-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900">
                  Akceptuję{' '}
                  <Link to="/terms" className="text-sea-600 hover:text-sea-500">
                    regulamin
                  </Link>{' '}
                  i{' '}
                  <Link to="/privacy" className="text-sea-600 hover:text-sea-500">
                    politykę prywatności
                  </Link>
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  id="acceptNewsletter"
                  type="checkbox"
                  checked={formData.acceptNewsletter}
                  onChange={(e) => setFormData({ ...formData, acceptNewsletter: e.target.checked })}
                  className="h-4 w-4 text-sea-600 focus:ring-sea-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="acceptNewsletter" className="ml-2 block text-sm text-gray-900">
                  Chcę otrzymywać newsletter z najnowszymi ofertami
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sea-600 hover:bg-sea-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sea-500"
              >
                Zarejestruj się
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}