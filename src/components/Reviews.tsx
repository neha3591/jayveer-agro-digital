import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Rameshbhai Patel',
      location: 'Anand',
      rating: 5,
      review: 'Excellent service and quality products! The rotavator I purchased has transformed my farming efficiency. Jayveer Sales team is very helpful and knowledgeable.',
      date: '2 months ago',
    },
    {
      name: 'Sureshbhai Desai',
      location: 'Umreth',
      rating: 5,
      review: 'Best agricultural equipment dealer in the region. They provided complete training on how to use the power tiller. Very satisfied with their after-sales support.',
      date: '1 month ago',
    },
    {
      name: 'Maheshbhai Shah',
      location: 'Anklav',
      rating: 5,
      review: 'Purchased reaper from Jayveer Sales. Fast delivery, professional installation, and the machine works perfectly. Highly recommend to all farmers.',
      date: '3 weeks ago',
    },
    {
      name: 'Dineshbhai Prajapati',
      location: 'Anand',
      rating: 5,
      review: 'Great experience! The staff understands farmer needs well. Got genuine Saktiman spare parts at reasonable prices. Will definitely buy more equipment from here.',
      date: '1 week ago',
    },
    {
      name: 'Bhaveshbhai Solanki',
      location: 'Umreth',
      rating: 4,
      review: 'Good quality products and reliable service. The seed drill I bought is working great. Their maintenance team responds quickly when needed.',
      date: '5 days ago',
    },
    {
      name: 'Jayeshbhai Modi',
      location: 'Anklav',
      rating: 5,
      review: 'Trusted dealer for Saktiman products. I have been buying from them for 5 years now. Always genuine products with proper warranty support.',
      date: '2 days ago',
    },
  ];

  const averageRating = 4.8;
  const totalReviews = 156;

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{' '}
            <span className="text-primary">Farmers Say</span>
          </h2>
          
          {/* Google Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl px-6 py-4 shadow-card">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-muted-foreground font-medium">Google Reviews</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-foreground">{averageRating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-secondary text-secondary' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">({totalReviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-secondary text-secondary' : 'text-muted'}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            Leave a Review on Google
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
