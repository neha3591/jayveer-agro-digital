import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Vagashi, Near Anand', 'Gujarat, India'],
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 89805 36618', '+91 99096 41444'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['jayveersales@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Location
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visit Our{' '}
            <span className="text-primary">Showroom</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Come see our full range of Saktiman agricultural equipment in person. 
            Our experts are ready to help you find the perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d72.995826!3d22.547481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzUwLjkiTiA3MsKwNTknNDUuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jayveer Sales Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4 hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=22.547481,72.995826"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="golden" size="lg" className="w-full">
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
