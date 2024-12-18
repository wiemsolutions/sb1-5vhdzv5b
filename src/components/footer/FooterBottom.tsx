import { Link } from 'react-router-dom';

export default function FooterBottom() {
  const legalLinks = [
    { label: 'Polityka prywatności', href: '/privacy' },
    { label: 'Regulamin', href: '/terms' },
    { label: 'Cookies', href: '#' }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-gray-400 text-sm">
        © {new Date().getFullYear()} KSBiznes. Wszelkie prawa zastrzeżone.
      </div>
      <div className="flex gap-6">
        {legalLinks.map((link, index) => (
          link.href.startsWith('/') ? (
            <Link
              key={index}
              to={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          )
        ))}
      </div>
    </div>
  );
}