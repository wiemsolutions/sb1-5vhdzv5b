import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../Logo';

export default function FooterSocial() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <div>
      <Logo />
      <p className="text-gray-400 mt-4 mb-6">
        KSBiznes to wiodąca platforma łącząca kupujących i sprzedających firmy w Polsce. 
        Pomagamy przedsiębiorcom w bezpiecznej i efektywnej sprzedaży oraz zakupie biznesów.
      </p>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-sea-600 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}