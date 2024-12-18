import { industries } from './industries';

export interface FeaturedListing {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  category: string;
  image: string;
  monthlyRevenue: string;
  yearlyProfit: string;
  employees: number;
  established: number;
  dateAdded: string;
  isFeatured: boolean;
}

// Helper function to generate random dates within the last 30 days
function getRandomRecentDate() {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 30);
  const date = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));
  return date.toISOString();
}

// Generate listings for each category
export const featuredListings: FeaturedListing[] = industries.flatMap(industry => {
  const categoryListings: FeaturedListing[] = [];
  
  // Generate 5 listings for each category
  for (let i = 1; i <= 5; i++) {
    // Make the first listing in each category featured
    const isFeatured = i === 1;
    
    // Generate listing data based on category
    let listing: FeaturedListing;
    
    if (industry.name === 'Restauracje i Gastronomia') {
      const restaurantListings = [
        {
          title: 'Ekskluzywna Restauracja Włoska w Centrum',
          description: 'Prestiżowa restauracja z 15-letnią tradycją, zlokalizowana w sercu miasta. Pełne wyposażenie, stała klientela.',
          price: '2 850 000 zł',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '180 000 zł',
          yearlyProfit: '720 000 zł',
          employees: 15,
          established: 2008,
        },
        {
          title: 'Sieć Kawiarni (3 Lokalizacje)',
          description: 'Dochodowa sieć kawiarni w prestiżowych galeriach handlowych. Sprawdzony model biznesowy.',
          price: '1 950 000 zł',
          image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '150 000 zł',
          yearlyProfit: '540 000 zł',
          employees: 25,
          established: 2015,
        },
        {
          title: 'Restauracja Fast Casual z Dowozem',
          description: 'Popularna restauracja specjalizująca się w kuchni fusion. Silna obecność w aplikacjach delivery.',
          price: '980 000 zł',
          image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '90 000 zł',
          yearlyProfit: '320 000 zł',
          employees: 12,
          established: 2019,
        },
        {
          title: 'Ekskluzywny Food Truck z Lokalizacjami',
          description: 'Znany food truck z stałymi miejscami postoju i cateringiem eventowym. Kompletnie wyposażony.',
          price: '420 000 zł',
          image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '45 000 zł',
          yearlyProfit: '180 000 zł',
          employees: 6,
          established: 2020,
        },
        {
          title: 'Bar Sushi z Dostawą',
          description: 'Popularny bar sushi z własną flotą dostawczą. Świetna lokalizacja i stali klienci.',
          price: '750 000 zł',
          image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '75 000 zł',
          yearlyProfit: '260 000 zł',
          employees: 8,
          established: 2018,
        }
      ][i - 1];

      listing = {
        id: `${industry.id}-${i}`,
        ...listing,
        category: industry.name,
        location: ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Gdańsk'][i - 1],
        dateAdded: getRandomRecentDate(),
        isFeatured
      };
    } else if (industry.name === 'E-commerce') {
      const ecommerceListings = [
        {
          title: 'Dochodowy Sklep E-commerce z Elektroniką',
          description: 'Stabilny biznes e-commerce z własną marką i rozwiniętą siecią dystrybucji. Pełna automatyzacja procesów.',
          price: '1 500 000 zł',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '250 000 zł',
          yearlyProfit: '450 000 zł',
          employees: 5,
          established: 2018,
        },
        {
          title: 'Sklep Online z Modą Premium',
          description: 'Ekskluzywny butik online z ugruntowaną pozycją w segmencie premium. Własne marki i import.',
          price: '2 200 000 zł',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '180 000 zł',
          yearlyProfit: '520 000 zł',
          employees: 8,
          established: 2016,
        },
        {
          title: 'Platforma E-commerce z Kosmetykami',
          description: 'Rozpoznawalna marka kosmetyków naturalnych z własną linią produktów i silną społecznością.',
          price: '1 800 000 zł',
          image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '150 000 zł',
          yearlyProfit: '380 000 zł',
          employees: 6,
          established: 2017,
        },
        {
          title: 'Sklep z Akcesoriami Sportowymi',
          description: 'Dynamicznie rozwijający się sklep z sprzętem sportowym. Autoryzowany dealer znanych marek.',
          price: '950 000 zł',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '85 000 zł',
          yearlyProfit: '220 000 zł',
          employees: 4,
          established: 2019,
        },
        {
          title: 'Marketplace Produktów Ręcznie Robionych',
          description: 'Unikalna platforma łącząca twórców rękodzieła z klientami. Społeczność ponad 1000 aktywnych sprzedawców.',
          price: '1 200 000 zł',
          image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
          monthlyRevenue: '120 000 zł',
          yearlyProfit: '300 000 zł',
          employees: 7,
          established: 2018,
        }
      ][i - 1];

      listing = {
        id: `${industry.id}-${i}`,
        ...ecommerceListings,
        category: industry.name,
        location: 'Cała Polska',
        dateAdded: getRandomRecentDate(),
        isFeatured
      };
    } else {
      // Generate generic listing for other categories
      listing = {
        id: `${industry.id}-${i}`,
        title: `${industry.name} - ${isFeatured ? 'Premium Oferta' : `Oferta ${i}`}`,
        description: `${isFeatured ? 'Wyjątkowa okazja! ' : ''}Stabilny biznes w branży ${industry.name.toLowerCase()}. ${isFeatured ? 'Lider na lokalnym rynku z ugruntowaną pozycją.' : 'Duży potencjał rozwoju.'}`,
        price: `${Math.floor(Math.random() * 2000 + 500)} 000 zł`,
        location: ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Gdańsk'][Math.floor(Math.random() * 5)],
        category: industry.name,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        monthlyRevenue: `${Math.floor(Math.random() * 200 + 50)} 000 zł`,
        yearlyProfit: `${Math.floor(Math.random() * 800 + 200)} 000 zł`,
        employees: Math.floor(Math.random() * 20 + 5),
        established: Math.floor(Math.random() * 10 + 2010),
        dateAdded: getRandomRecentDate(),
        isFeatured
      };
    }

    categoryListings.push(listing);
  }

  return categoryListings;
});