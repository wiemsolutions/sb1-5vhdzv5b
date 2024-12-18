import { Link } from 'react-router-dom';

export default function BuyBusinessMenu() {
  const menuItems = [
    { label: 'Wszystkie firmy', href: '/listings' },
    { label: 'Według branży', href: '/listings?sort=category' },
    { label: 'Według lokalizacji', href: '/listings?sort=location' },
    { label: 'Według ceny', href: '/listings?sort=price' },
    { label: 'Nowe oferty', href: '/listings?sort=date' },
  ];

  return (
    <div className="py-2">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="block px-4 py-2 text-gray-700 hover:bg-sea-50 hover:text-sea-600"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}