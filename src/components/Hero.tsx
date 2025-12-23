import { ArrowRight, MapPin, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-farming.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Agricultural machinery in field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground text-sm font-medium">Authorized Saktiman Dealer</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Powering Agriculture in{' '}
            <span className="text-gradient-gold">Anand, Umreth & Anklav</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Your trusted partner for premium Saktiman agricultural machinery. 
            Quality equipment, expert service, and unmatched support for farmers across Gujarat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection('#products')}>
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollToSection('#contact')}>
              Contact Us
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold">3 Districts</p>
                <p className="text-sm text-primary-foreground/70">Coverage Area</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-primary-foreground/70">On All Orders</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold">Warranty</p>
                <p className="text-sm text-primary-foreground/70">Guaranteed Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
