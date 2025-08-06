import { useState } from 'react';
import { ChevronDown, Mail, Phone, MessageCircle, HelpCircle, Package, RefreshCw } from 'lucide-react';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassNavbar } from '@/components/GlassNavbar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Support = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const { toast } = useToast();

  const faqs = [
    {
      question: "What Apple Watch sizes do your bands fit?",
      answer: "Our bands are compatible with all Apple Watch sizes including 38mm, 40mm, 41mm, 42mm, 44mm, 45mm, 49mm, and the new Ultra sizes. Each product page clearly indicates compatibility."
    },
    {
      question: "What materials are used in your bands?",
      answer: "We use premium materials including genuine leather, surgical-grade stainless steel, hypoallergenic silicone, and titanium. All materials are carefully selected for durability, comfort, and luxury."
    },
    {
      question: "How do I determine my band size?",
      answer: "Use our sizing guide available on each product page. Measure your wrist circumference and refer to our size chart. Most of our bands are adjustable to fit a wide range of wrist sizes."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original packaging. Custom or personalized items may have different return terms. Please see our full return policy for details."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-7 business days within the US. Express shipping (1-2 days) and international shipping are also available. You'll receive tracking information once your order ships."
    },
    {
      question: "Do you offer warranty on your products?",
      answer: "Yes, all our bands come with a 1-year warranty against manufacturing defects. This covers material and workmanship issues but not normal wear and tear or damage from misuse."
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@celestialbands.com",
      response: "24-48 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      response: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help online",
      contact: "Available on website",
      response: "Real-time"
    }
  ];

  const supportCategories = [
    {
      icon: Package,
      title: "Order Support",
      description: "Track orders, shipping info, and delivery updates"
    },
    {
      icon: RefreshCw,
      title: "Returns & Exchanges",
      description: "Easy returns and size exchanges within 30 days"
    },
    {
      icon: HelpCircle,
      title: "Product Help",
      description: "Installation guides, sizing, and compatibility info"
    }
  ];

  const handleContactClick = (method: string) => {
    toast({
      title: "Contact Method",
      description: `${method} support will be available soon!`,
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
            How Can We
            <br />
            <span className="luxury-text">Help You?</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our support team is here to ensure your experience with 
            Celestial Bands is nothing short of stellar.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportCategories.map((category, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300">
                <category.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold cosmic-text mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 cosmic-text">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to reach our support team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <method.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold cosmic-text mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-primary font-medium mb-2">
                  {method.contact}
                </p>
                <p className="text-muted-foreground text-xs mb-4">
                  Response time: {method.response}
                </p>
                <Button 
                  className="w-full"
                  onClick={() => handleContactClick(method.title)}
                >
                  Contact Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 cosmic-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/5 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-card-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-6 animate-accordion-down">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="glass-card rounded-2xl p-12 max-w-2xl mx-auto">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold cosmic-text mb-4">
              Still Need Help?
            </h3>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is ready 
              to assist you with any questions or concerns.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-gradient hover:shadow-glow transition-all duration-300"
              onClick={() => handleContactClick("Direct Support")}
            >
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;