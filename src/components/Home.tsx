import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Truck, Shield, Clock, MapPin, Star } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pistoleroLogo from 'figma:asset/2d94bd043924470b769c7f31998426aa9364b02d.png';
import heroBackground from 'figma:asset/e400a689142b97940bf8a32543640335d893fb16.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Truck,
      title: t('fuelTransport'),
      description: t('fuelTransportDesc')
    },
    {
      icon: Shield,
      title: t('contractHazmat'),
      description: t('contractHazmatDesc')
    },
    {
      icon: Clock,
      title: t('brokerageDelivery'),
      description: t('brokerageDeliveryDesc')
    }
  ];

  const serviceAreas = [
    'Harlingen', 'McAllen', 'Laredo', 'Eagle Pass', 'Del Rio', 'Corpus Christi'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
            willChange: 'transform'
          }}
        >
          <ImageWithFallback
            src={heroBackground}
            alt="Pistolero Express fuel tanker truck in golden hour Texas landscape"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative container mx-auto px-4 flex-1 flex items-center">
          <div className="max-w-6xl text-white">
            {/* Featured Logo */}
            <div className="flex items-center mb-8">
              <img 
                src={pistoleroLogo} 
                alt="Pistolero Express Logo" 
                className="h-32 w-32 lg:h-40 lg:w-40 mr-6 drop-shadow-2xl ring-4 ring-white/20 rounded-full bg-white/10 p-2 transition-transform duration-700 hover:rotate-360 cursor-pointer"
              />
              <div className="border-l-2 border-white/30 pl-6">
                <h2 className="text-2xl lg:text-3xl mb-2">PISTOLERO EXPRESS</h2>
                <p className="text-lg lg:text-xl text-gray-200">Professional Fuel Transportation</p>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="relative container mx-auto px-4 pb-12">
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-[#59C9A5] hover:bg-[#59C9A5]/90 text-white px-12 py-8 text-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(89,201,165,0.4)] transform hover:scale-105 transition-all duration-300 border-2 border-[#59C9A5] relative before:absolute before:inset-0 before:border-2 before:border-white before:rounded-md before:opacity-0 before:animate-pulse hover:before:animate-none"
                size="lg"
              >
                <span className="flex items-center space-x-3">
                  <Star className="w-6 h-6" />
                  <span>{t('getQuote')}</span>
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-3 border-[#FFFD77] text-[#FFFD77] bg-black/30 hover:bg-[#FFFD77] hover:text-black px-12 py-8 text-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(255,253,119,0.4)] transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <a href="tel:+15551234567" className="flex items-center space-x-3">
                  <Truck className="w-6 h-6" />
                  <span>{t('callNow')}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-[#3F1D1D]">{t('servicesTitle')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <div className="w-16 h-16 bg-[#59C9A5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-4 text-[#3F1D1D]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src={pistoleroLogo} 
                  alt="Pistolero Express Logo" 
                  className="h-16 w-16 mr-4"
                />
                <h2 className="text-3xl lg:text-4xl text-[#3F1D1D]">
                  Professional Excellence Since Day One
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                At Pistolero Express, we understand that fuel transportation is the backbone of Texas industry. Our experienced team delivers safe, reliable, and timely fuel transportation services across South Texas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-[#59C9A5]" />
                  <span className="text-gray-700">Licensed and insured professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-[#59C9A5]" />
                  <span className="text-gray-700">24/7 emergency services available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-[#59C9A5]" />
                  <span className="text-gray-700">Modern fleet with latest safety equipment</span>
                </div>
              </div>
              <Button 
                onClick={() => onNavigate('services')}
                className="mt-8 bg-[#3F1D1D] hover:bg-[#3F1D1D]/90 text-white"
              >
                Learn More About Our Services
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632629011797-156081ed19ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdHJ1Y2slMjBoaWdod2F5JTIwVGV4YXMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU4MTE4NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial truck on Texas highway"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-[#3F1D1D]">{t('serviceAreasTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('serviceAreasDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceAreas.map((area) => (
              <div key={area} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-[#59C9A5]/10 transition-colors">
                <MapPin className="w-8 h-8 text-[#3F1D1D] mx-auto mb-3" />
                <h3 className="text-[#3F1D1D]">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3F1D1D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact us today for reliable fuel transportation services across South Texas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('scheduling')}
              size="lg"
              className="bg-[#59C9A5] hover:bg-[#59C9A5]/90 text-white px-8"
            >
              Schedule Service
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#3F1D1D] px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}