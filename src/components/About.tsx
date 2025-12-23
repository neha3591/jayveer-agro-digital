import { Award, Users, Wrench, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Happy Farmers' },
    { icon: Wrench, value: '100%', label: 'Service Quality' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Jayveer Sales
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in{' '}
              <span className="text-primary">Agricultural Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Jayveer Sales is the authorized dealer of Saktiman Agro for Anand, Umreth, and Anklav districts. 
              We are committed to empowering farmers with world-class agricultural machinery and equipment 
              that enhances productivity and efficiency.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With over a decade of experience serving the farming community, we understand the unique 
              challenges faced by Indian farmers. Our team provides not just equipment, but complete 
              solutions including installation, training, and after-sales service.
            </p>

            {/* Districts Served */}
            <div className="flex flex-wrap gap-3">
              {['Anand', 'Umreth', 'Anklav'].map((district) => (
                <span
                  key={district}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                >
                  {district} District
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover-lift text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
