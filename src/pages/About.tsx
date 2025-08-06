import { Users, Award, Sparkles, Heart } from 'lucide-react';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassNavbar } from '@/components/GlassNavbar';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50K+', icon: Heart },
    { label: 'Products Sold', value: '200K+', icon: Award },
    { label: 'Years Experience', value: '8+', icon: Sparkles },
    { label: 'Team Members', value: '25+', icon: Users },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Visionary designer with a passion for cosmic elegance',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Maya Rodriguez',
      role: 'Head of Design',
      bio: 'Creates stunning designs that merge luxury with functionality',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Kim',
      role: 'Materials Engineer',
      bio: 'Expert in premium materials and sustainable manufacturing',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <GlassNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 cosmic-text leading-tight">
            About
            <br />
            <span className="luxury-text">Celestial Bands</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We craft premium Apple Watch bands that merge cosmic elegance 
            with modern luxury, designed for those who appreciate the extraordinary.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 cosmic-text">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2016, Celestial Bands emerged from a simple belief: 
                  your Apple Watch should be as unique and extraordinary as you are.
                </p>
                <p>
                  We started in a small studio, crafting our first bands by hand, 
                  inspired by the infinite beauty of the cosmos. Today, we've grown 
                  into a global brand while maintaining our commitment to artisanal 
                  quality and innovative design.
                </p>
                <p>
                  Every band we create tells a story of premium materials, 
                  meticulous craftsmanship, and celestial inspiration that 
                  transforms your everyday tech into a luxury accessory.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold cosmic-text mb-2">
                    Crafted with Purpose
                  </h3>
                  <p className="text-muted-foreground">
                    Every detail designed to elevate your experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold cosmic-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 cosmic-text">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind every celestial creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold cosmic-text mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 cosmic-text">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-8 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold cosmic-text mb-3">
                Premium Quality
              </h3>
              <p className="text-muted-foreground">
                We use only the finest materials and meticulous craftsmanship 
                to ensure every band meets our exacting standards.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold cosmic-text mb-3">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Constantly pushing boundaries to create unique designs 
                that blend technology with timeless elegance.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold cosmic-text mb-3">
                Customer Love
              </h3>
              <p className="text-muted-foreground">
                Every decision we make is guided by our commitment 
                to exceeding customer expectations and creating lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;