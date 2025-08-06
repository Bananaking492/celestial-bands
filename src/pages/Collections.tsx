import { useState } from 'react';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassNavbar } from '@/components/GlassNavbar';
import { ProductCard } from '@/components/ProductCard';
import { useToast } from '@/hooks/use-toast';

const Collections = () => {
  const { toast } = useToast();

  const collections = [
    {
      id: 'sport',
      name: 'Sport Collection',
      description: 'High-performance bands for active lifestyles',
      image: '/api/placeholder/600/400',
      products: [
        {
          id: 'sport-1',
          name: 'Stellar Sport Pro',
          price: 89,
          image: '/api/placeholder/300/300',
          rating: 4.8,
          material: 'Sport Silicone',
          colors: ['#ef4444', '#f97316', '#eab308'],
        },
        {
          id: 'sport-2',
          name: 'Cosmic Athletics',
          price: 79,
          image: '/api/placeholder/300/300',
          rating: 4.7,
          material: 'Fluoroelastomer',
          colors: ['#06b6d4', '#10b981', '#8b5cf6'],
        },
      ]
    },
    {
      id: 'luxury',
      name: 'Luxury Collection',
      description: 'Premium materials for the discerning individual',
      image: '/api/placeholder/600/400',
      products: [
        {
          id: 'luxury-1',
          name: 'Nebula Leather',
          price: 199,
          image: '/api/placeholder/300/300',
          rating: 4.9,
          material: 'Premium Leather',
          colors: ['#1a1a1a', '#7c3aed', '#374151'],
        },
        {
          id: 'luxury-2',
          name: 'Galaxy Mesh',
          price: 249,
          image: '/api/placeholder/300/300',
          rating: 4.9,
          material: 'Milanese Loop',
          colors: ['#e5e7eb', '#9ca3af', '#6b7280'],
        },
      ]
    },
    {
      id: 'limited',
      name: 'Limited Edition',
      description: 'Exclusive designs in limited quantities',
      image: '/api/placeholder/600/400',
      products: [
        {
          id: 'limited-1',
          name: 'Aurora Titanium',
          price: 349,
          image: '/api/placeholder/300/300',
          rating: 5.0,
          material: 'Titanium Link',
          colors: ['#ec4899', '#8b5cf6', '#06b6d4'],
        },
      ]
    }
  ];

  const handleAddToCart = (productId: string, productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart!`,
    });
  };

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <GlassNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 cosmic-text leading-tight">
            Our
            <br />
            <span className="luxury-text">Collections</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover curated collections designed for every lifestyle, 
            from high-performance athletics to luxury sophistication.
          </p>
        </div>
      </section>

      {/* Collections */}
      {collections.map((collection) => (
        <section key={collection.id} className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 cosmic-text">
                {collection.name}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {collection.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {collection.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => handleAddToCart(product.id, product.name)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Collections;