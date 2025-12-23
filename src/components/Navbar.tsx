import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-lg shadow-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-heading font-bold text-xl">JS</span>
            </div>
            <div>
              <h1 className={`font-heading font-bold text-xl ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                Jayveer Sales
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                Authorized Saktiman Dealer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <Button
              variant={isScrolled ? 'golden' : 'hero'}
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/20 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left font-medium text-foreground hover:text-secondary transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border/20">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-foreground mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 98765 43210</span>
                </a>
                <Button variant="golden" size="lg" className="w-full" onClick={() => scrollToSection('#contact')}>
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
