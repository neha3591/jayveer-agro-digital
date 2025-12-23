import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jayveer Sales - Authorized Saktiman Dealer in Anand, Umreth, Anklav | Agricultural Equipment</title>
        <meta 
          name="description" 
          content="Jayveer Sales is your trusted authorized Saktiman Agro dealer serving Anand, Umreth, and Anklav districts. Premium agricultural equipment including rotavators, reapers, power tillers with expert service and support." 
        />
        <meta name="keywords" content="Saktiman dealer Anand, agricultural equipment Gujarat, rotavator Umreth, reaper Anklav, power tiller, farming machinery, Jayveer Sales" />
        <link rel="canonical" href="https://jayveersales.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Jayveer Sales - Authorized Saktiman Dealer" />
        <meta property="og:description" content="Premium agricultural equipment for Anand, Umreth & Anklav districts. Rotavators, Reapers, Power Tillers & more." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jayveer Sales",
            "description": "Authorized Saktiman Agro dealer for agricultural equipment",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Bus Stand, Main Road",
              "addressLocality": "Anand",
              "addressRegion": "Gujarat",
              "postalCode": "388001",
              "addressCountry": "IN"
            },
            "telephone": "+91-98765-43210",
            "email": "info@jayveersales.com",
            "openingHours": ["Mo-Sa 09:00-19:00", "Su 10:00-16:00"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "156"
            }
          })}
        </script>
      </Helmet>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Services />
        <Reviews />
        <Location />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
};

export default Index;
