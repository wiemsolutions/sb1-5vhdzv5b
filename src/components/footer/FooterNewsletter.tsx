import { Mail } from 'lucide-react';

export default function FooterNewsletter() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-white mb-4">
        Bądź na bieżąco z najlepszymi ofertami
      </h3>
      <p className="text-gray-400 mb-6">
        Zapisz się do naszego newslettera i otrzymuj powiadomienia o nowych ofertach dopasowanych do Twoich preferencji.
      </p>
      <form className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Twój adres email"
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sea-500"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-sea-600 text-white rounded-lg font-semibold hover:bg-sea-700 transition-colors whitespace-nowrap"
        >
          Zapisz się
        </button>
      </form>
    </div>
  );
}