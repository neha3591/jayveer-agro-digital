import { Wrench, Truck, HeadphonesIcon, GraduationCap, Settings, RefreshCw } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Complimentary delivery and installation across Anand, Umreth, and Anklav districts.',
    },
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Professional installation by trained technicians ensuring optimal equipment performance.',
    },
    {
      icon: Settings,
      title: 'Maintenance & Repair',
      description: 'Regular maintenance services and quick repairs to minimize downtime during peak seasons.',
    },
    {
      icon: GraduationCap,
      title: 'Operator Training',
      description: 'Comprehensive training programs to help farmers get the most out of their equipment.',
    },
    {
      icon: RefreshCw,
      title: 'Spare Parts',
      description: 'Genuine Saktiman spare parts available for all models with quick replacement service.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any queries or emergency assistance needs.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Complete Support for Your{' '}
            <span className="text-secondary">Farming Journey</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            We don't just sell equipment – we provide comprehensive solutions to ensure 
            your agricultural operations run smoothly year-round.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
