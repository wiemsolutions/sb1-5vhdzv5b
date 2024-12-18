import { useParams } from 'react-router-dom';
import { featuredListings } from '../data/featuredListings';
import { MapPin } from 'lucide-react';
import ContactForm from '../components/listing/ContactForm';
import ListingGallery from '../components/listing/ListingGallery';
import ListingMap from '../components/listing/ListingMap';
import KeyDetails from '../components/listing/KeyDetails';
import BusinessOverview from '../components/listing/BusinessOverview';
import FinancialSummary from '../components/listing/FinancialSummary';
import AssetsIncluded from '../components/listing/AssetsIncluded';
import SellerSupport from '../components/listing/SellerSupport';
import BackButton from '../components/ui/BackButton';
import SimilarListings from '../components/listing/SimilarListings';
import ListingDisclaimer from '../components/listing/ListingDisclaimer';
import SellerContact from '../components/listing/SellerContact';
import { AdBanner, AdSidebar } from '../components/ads';

export default function ListingPage() {
  const { id } = useParams();
  const listing = featuredListings.find(l => l.id === id);

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Nie znaleziono oferty
          </h1>
          <p className="text-gray-600">
            Przepraszamy, ale nie mogliśmy znaleźć szukanej oferty.
          </p>
          <BackButton className="mt-6 justify-center" />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <BackButton className="my-4" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-sea-600 font-medium mb-2">
                {listing.category}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {listing.title}
              </h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{listing.location}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-sea-600">
                {listing.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <AdBanner 
          adCode="<script>Your ad code here</script>"
          className="hidden md:block"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ListingGallery images={[listing.image]} />
            <BusinessOverview listing={listing} />
            <KeyDetails listing={listing} />
            <FinancialSummary listing={listing} />
            <AssetsIncluded listing={listing} />

            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Lokalizacja
              </h2>
              <p className="text-gray-600 mb-4">
                Firma znajduje się w doskonałej lokalizacji z dużym natężeniem ruchu pieszego i łatwym dostępem do komunikacji miejskiej.
              </p>
              <ListingMap location={listing.location} />
            </div>

            <SellerSupport />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Kontakt ze sprzedającym
              </h2>
              <SellerContact 
                email="kontakt@ksbiznes.pl"
                phone="+48 123 456 789"
                sellerId="1"
              />
              <ContactForm listingId={listing.id} />
              <ListingDisclaimer />
            </div>

            {/* Sidebar Ad */}
            <div className="mt-8">
              <AdSidebar 
                adCode="<script>Your ad code here</script>"
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Similar Listings Section */}
      <SimilarListings currentListing={listing} allListings={featuredListings} />
    </div>
  );
}