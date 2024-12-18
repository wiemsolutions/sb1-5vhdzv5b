import FooterNewsletter from './FooterNewsletter';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';
import FooterSocial from './FooterSocial';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <FooterNewsletter />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <FooterSocial />
          </div>
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}