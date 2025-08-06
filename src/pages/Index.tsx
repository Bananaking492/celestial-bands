import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassNavbar } from '@/components/GlassNavbar';
import { FloatingWatch } from '@/components/FloatingWatch';
import { ProductCard } from '@/components/ProductCard';
import { FilterPanel } from '@/components/FilterPanel';

const Index = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock product data
  const products = [
    {
      id: '1',
      name: 'Cosmic Midnight',
      price: 149,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      material: 'Premium Leather',
      colors: ['#1a1a1a', '#2563eb', '#7c3aed'],
    },
    {
      id: '2',
      name: 'Aurora Steel',
      price: 199,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      material: 'Stainless Steel',
      colors: ['#e5e7eb', '#06b6d4', '#10b981'],
    },
    {
      id: '3',
      name: 'Stellar Sport',
      price: 79,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      material: 'Sport Silicone',
      colors: ['#ef4444', '#f97316', '#eab308'],
    },
    {
      id: '4',
      name: 'Nebula Mesh',
      price: 229,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      material: 'Milanese Loop',
      colors: ['#8b5cf6', '#ec4899', '#f59e0b'],
    },
    {
      id: '5',
      name: 'Galaxy Link',
      price: 179,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      material: 'Link Bracelet',
      colors: ['#374151', '#6b7280', '#9ca3af'],
    },
    {
      id: '6',
      name: 'Solar Flare',
      price: 119,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      material: 'Woven Nylon',
      colors: ['#dc2626', '#ea580c', '#d97706'],
    },
  ];

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <GlassNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 cosmic-text leading-tight">
              Celestial
              <br />
              <span className="luxury-text">Elegance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Premium Apple Watch bands crafted for the modern stargazer. 
              Where luxury meets the cosmos.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
            <Button 
              size="lg" 
              className="bg-primary-gradient hover:shadow-glow transition-all duration-300 text-lg px-8 py-3"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-card-border hover:border-primary text-lg px-8 py-3"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Customize Your Band
            </Button>
          </div>

          <FloatingWatch />
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 cosmic-text">
              Featured Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium watch bands, 
              each designed to complement your cosmic journey.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <FilterPanel />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted-foreground">
                  Showing {products.length} products
                </p>
                <div className="flex items-center space-x-4">
                  <select className="bg-muted/20 border border-card-border rounded-lg px-3 py-2 text-sm">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-card-border">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold cosmic-text mb-2">
              Celestial Bands
            </h3>
            <p className="text-muted-foreground">
              Crafting cosmic elegance for your Apple Watch
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 max-w-2xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">Shop</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Sport Bands</p>
                <p>Leather</p>
                <p>Metal</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Help Center</p>
                <p>Size Guide</p>
                <p>Returns</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>About Us</p>
                <p>Careers</p>
                <p>Press</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Newsletter</p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground border-t border-card-border pt-6">
            © 2024 Celestial Bands. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
