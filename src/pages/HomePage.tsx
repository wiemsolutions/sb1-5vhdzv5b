import SearchBar from '../components/SearchBar';
import CategoryList from '../components/categories/CategoryList';
import FeaturedList from '../components/featured/FeaturedList';
import { featuredListings } from '../data/featuredListings';

export default function HomePage() {
  const onlyFeaturedListings = featuredListings.filter(listing => listing.isFeatured);

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 h-[500px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80")',
          }}
        />

        {/* Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
                Znajdź swoją idealną okazję biznesową
              </h1>
              <p className="text-xl text-white mb-8 [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
                Ponad 75 000 firm na sprzedaż i możliwości franczyzowych
              </p>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 px-4">
            Popularne kategorie
          </h2>
          <CategoryList />
        </div>
      </div>

      {/* Featured Listings */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 px-4">
            Wyróżnione oferty
          </h2>
          <FeaturedList listings={onlyFeaturedListings} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-sea-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Chcesz sprzedać swoją firmę?
          </h2>
          <p className="text-sea-100 mb-8">
            Dotrzyj do tysięcy wykwalifikowanych kupujących na KSBiznes
          </p>
          <button className="bg-white text-sea-600 px-8 py-3 rounded-lg font-semibold hover:bg-sea-50 transition-colors">
            Dodaj swoją firmę
          </button>
        </div>
      </div>
    </>
  );
}