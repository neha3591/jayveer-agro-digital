import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productRotavator from '@/assets/product-rotavator.jpg';
import productReaper from '@/assets/product-reaper.jpg';
import productPowerTiller from '@/assets/product-power-tiller.jpg';
import productSeedDrill from '@/assets/product-seed-drill.jpg';

const Products = () => {
  const products = [
    {
      name: 'Rotavator',
      description: 'High-performance soil tillage equipment for efficient land preparation.',
      image: productRotavator,
      category: 'Tillage Equipment',
    },
    {
      name: 'Reaper',
      description: 'Advanced harvesting solutions for faster and cleaner crop cutting.',
      image: productReaper,
      category: 'Harvesting',
    },
    {
      name: 'Power Tiller',
      description: 'Versatile cultivation machine for all your farming needs.',
      image: productPowerTiller,
      category: 'Cultivation',
    },
    {
      name: 'Seed Drill',
      description: 'Precision seeding equipment for optimal crop spacing and depth.',
      image: productSeedDrill,
      category: 'Planting',
    },
  ];

  const categories = [
    'Rotavators',
    'Reapers & Harvesters',
    'Power Tillers',
    'Seed Drills',
    'Cultivators',
    'Sprayers',
    'Threshers',
    'Chaff Cutters',
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Saktiman{' '}
            <span className="text-primary">Agricultural Equipment</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our wide range of high-quality agricultural machinery designed to 
            boost your farm's productivity and efficiency.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* All Categories */}
        <div className="bg-gradient-card rounded-3xl p-8 shadow-soft">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
            All Product Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-card border border-border rounded-full text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://shaktimanagro.com/index/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="golden" size="lg">
                View Full Catalog on Saktiman
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
