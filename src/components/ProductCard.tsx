import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  material: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card glass-card rounded-2xl p-6 group">
      {/* Product Image */}
      <div className="relative mb-6 h-48 bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            {/* Mock watch band */}
            <div 
              className="absolute inset-2 rounded-xl opacity-80"
              style={{ backgroundColor: product.colors[0] }}
            ></div>
          </div>
        </div>
        
        {/* Floating price tag */}
        <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full">
          <span className="text-sm font-semibold cosmic-text">
            ${product.price}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{product.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm">
          {product.material}
        </p>

        {/* Color Options */}
        <div className="flex space-x-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border border-card-border"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full mt-4 bg-primary-gradient hover:shadow-glow transition-all duration-300"
          size="sm"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};