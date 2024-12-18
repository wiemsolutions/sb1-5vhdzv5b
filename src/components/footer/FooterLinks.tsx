import { Link } from 'react-router-dom';

export default function FooterLinks() {
  const links = {
    'Kup firmę': [
      { label: 'Przeglądaj oferty', href: '/listings' },
      { label: 'Popularne kategorie', href: '#' },
      { label: 'Najnowsze oferty', href: '#' },
      { label: 'Jak kupić firmę', href: '#' }
    ],
    'Sprzedaj firmę': [
      { label: 'Dodaj ogłoszenie', href: '#' },
      { label: 'Wycena firmy', href: '#' },
      { label: 'Przygotowanie do sprzedaży', href: '#' },
      { label: 'Cennik', href: '#' }
    ],
    'Zasoby': [
      { label: 'Poradnik kupującego', href: '#' },
      { label: 'Poradnik sprzedającego', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Regulamin', href: '/terms' }
    ]
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category}>
          <h4 className="text-white font-semibold mb-4">{category}</h4>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}