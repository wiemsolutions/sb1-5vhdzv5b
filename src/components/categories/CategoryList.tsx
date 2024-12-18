import { industries } from '../../data/industries';
import Carousel from '../ui/Carousel';
import CategoryCard from './CategoryCard';

export default function CategoryList() {
  return (
    <div className="py-4">
      <div className="md:hidden">
        <Carousel 
          itemWidth={200} 
          gap={16} 
          className="px-4"
          controlClassName="mx-2"
        >
          {industries.map((category) => (
            <div key={category.id} className="snap-start">
              <CategoryCard category={category} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
        {industries.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}