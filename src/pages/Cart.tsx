import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassNavbar } from '@/components/GlassNavbar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  material: string;
  color: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Cosmic Midnight',
      price: 149,
      image: '/api/placeholder/300/300',
      material: 'Premium Leather',
      color: 'Midnight Black',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Aurora Steel',
      price: 199,
      image: '/api/placeholder/300/300',
      material: 'Stainless Steel',
      color: 'Silver',
      quantity: 2,
    },
  ]);

  const { toast } = useToast();

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Removed from Cart",
      description: `${item?.name} has been removed from your cart.`,
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Checkout functionality coming soon! 🛒",
    });
  };

  const handleContinueShopping = () => {
    window.history.back();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen relative">
        <CosmicBackground />
        <GlassNavbar />
        
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <div className="glass-card rounded-2xl p-12 max-w-2xl mx-auto">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <h1 className="text-4xl font-display font-bold mb-4 cosmic-text">
                Your Cart is Empty
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our cosmic collection of premium Apple Watch bands
              </p>
              <Button 
                size="lg" 
                className="bg-primary-gradient hover:shadow-glow transition-all duration-300"
                onClick={handleContinueShopping}
              >
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <GlassNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 cosmic-text text-center leading-tight">
            Shopping
            <br />
            <span className="luxury-text">Cart</span>
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-2xl font-semibold cosmic-text mb-6">
                  Your Items ({cartItems.length})
                </h2>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-muted/10 rounded-xl">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-muted/20 to-muted/5 rounded-lg flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg"></div>
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-card-foreground">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.material} • {item.color}
                        </p>
                        <p className="text-primary font-semibold mt-1">
                          ${item.price}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-card-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Continue Shopping */}
              <Button 
                variant="outline" 
                onClick={handleContinueShopping}
                className="border-card-border hover:border-primary"
              >
                Continue Shopping
              </Button>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-2xl p-6 sticky top-32">
                <h2 className="text-2xl font-semibold cosmic-text mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-card-border pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold cosmic-text">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {subtotal < 200 && (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-6">
                    <p className="text-sm text-primary">
                      Add ${(200 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
                
                <Button 
                  className="w-full bg-primary-gradient hover:shadow-glow transition-all duration-300"
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    Secure checkout with 256-bit SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;