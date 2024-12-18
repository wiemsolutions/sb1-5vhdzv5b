import { 
  Utensils, 
  ShoppingBag, 
  ShoppingCart, 
  Laptop, 
  Factory, 
  HeartPulse,
  Car,
  GraduationCap,
  Building,
  Briefcase,
  Hammer,
  Truck,
  Scissors,
  Dumbbell,
  Tv,
  Leaf,
  Sun,
  Store,
  Wallet,
  MoreHorizontal,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'utensils': Utensils,
  'shopping-bag': ShoppingBag,
  'shopping-cart': ShoppingCart,
  'laptop': Laptop,
  'factory': Factory,
  'heart-pulse': HeartPulse,
  'car': Car,
  'graduation-cap': GraduationCap,
  'building': Building,
  'briefcase': Briefcase,
  'hammer': Hammer,
  'truck': Truck,
  'scissors': Scissors,
  'dumbbell': Dumbbell,
  'tv': Tv,
  'leaf': Leaf,
  'sun': Sun,
  'store': Store,
  'wallet': Wallet,
  'more-horizontal': MoreHorizontal
};

interface CategoryIconProps {
  icon: string;
  className?: string;
}

export default function CategoryIcon({ icon, className = '' }: CategoryIconProps) {
  const Icon = iconMap[icon] || ShoppingBag;
  return <Icon className={className} />;
}