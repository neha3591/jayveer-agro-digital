import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const products = [
    'Rotavators',
    'Reapers',
    'Power Tillers',
    'Seed Drills',
    'Cultivators',
    'Sprayers',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                <span className="text-foreground font-heading font-bold text-xl">JS</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-background">
                  Jayveer Sales
                </h3>
                <p className="text-background/60 text-sm">Authorized Saktiman Dealer</p>
              </div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Your trusted partner for premium Saktiman agricultural machinery 
              in Anand, Umreth, and Anklav districts.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-background mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg text-background mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-background/70">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg text-background mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-background/70">
                  Near Bus Stand, Main Road,<br />
                  Anand, Gujarat 388001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-background/70 hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@jayveersales.com" className="text-background/70 hover:text-secondary transition-colors">
                  info@jayveersales.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Jayveer Sales. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Authorized Dealer of{' '}
              <a
                href="https://shaktimanagro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Saktiman Agro
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
