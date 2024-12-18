import { Link } from 'react-router-dom';
import { Industry } from '../../data/industries';
import CategoryIcon from './CategoryIcon';

interface CategoryCardProps {
  category: Industry;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      to={`/listings?category=${encodeURIComponent(category.name)}`}
      className="block w-full p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-lg bg-sea-50 text-sea-600 group-hover:bg-sea-100 transition-colors">
          <CategoryIcon icon={category.icon} className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-gray-900 text-sm group-hover:text-sea-600 transition-colors">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}