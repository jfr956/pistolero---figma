import image_83d8afb70c6bc56fa6d0761dd9bd5c57b4d1c8dd from 'figma:asset/83d8afb70c6bc56fa6d0761dd9bd5c57b4d1c8dd.png';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Truck, Shield, Clock, Gauge, Wrench, Phone, Building2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pistoleroLogo from 'figma:asset/2d94bd043924470b769c7f31998426aa9364b02d.png';
import { useMemo } from 'react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const { t } = useLanguage();

  const mainServices = useMemo(() => [
    {
      icon: Truck,
      title: t('fuelTransport'),
      description: t('fuelTransportDesc'),
      features: [
        t('fuelTransportFeature1'),
        t('fuelTransportFeature2'),
        t('fuelTransportFeature3'),
        t('fuelTransportFeature4')
      ],
      color: '#59C9A5'
    },
    {
      icon: Shield,
      title: t('contractHazmat'),
      description: t('contractHazmatDesc'),
      features: [
        t('contractHazmatFeature1'),
        t('contractHazmatFeature2'),
        t('contractHazmatFeature3'),
        t('contractHazmatFeature4')
      ],
      color: '#FFFD77'
    },
    {
      icon: Building2,
      title: t('brokerageDelivery'),
      description: t('brokerageDeliveryDesc'),
      features: [
        t('brokerageDeliveryFeature1'),
        t('brokerageDeliveryFeature2'),
        t('brokerageDeliveryFeature3'),
        t('brokerageDeliveryFeature4')
      ],
      color: '#3F1D1D'
    }
  ], [t]);

  const additionalServices = useMemo(() => [
    {
      icon: Gauge,
      title: t('fuelMonitoring'),
      description: t('fuelMonitoringDesc')
    },
    {
      icon: Wrench,
      title: t('equipmentMaintenance'),
      description: t('equipmentMaintenanceDesc')
    }
  ], [t]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#3F1D1D] to-[#042A2B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={pistoleroLogo} 
                alt="Pistolero Express Logo" 
                className="h-20 w-20"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6">{t('servicesTitle')}</h1>
            <p className="text-xl text-gray-200">
              {t('servicesSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: service.color }}
                      >
                        <IconComponent className={`w-8 h-8 ${service.color === '#FFFD77' ? 'text-[#3F1D1D]' : 'text-white'}`} />
                      </div>
                      <h2 className="text-3xl text-[#3F1D1D]">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#59C9A5] rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => onNavigate('contact')}
                      className="bg-[#3F1D1D] hover:bg-[#3F1D1D]/90 text-white"
                    >
                      {t('getQuoteService')}
                    </Button>
                  </div>
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <ImageWithFallback
                      src={index === 0 
                        ? "https://images.unsplash.com/photo-1757191377107-f1d78844e769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWVsJTIwdGFua2VyJTIwdHJ1Y2slMjBmdWxsJTIwc2l6ZSUyMHBldHJvbGV1bXxlbnwxfHx8fDE3NTgxNDYyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        : index === 1 
                        ? image_83d8afb70c6bc56fa6d0761dd9bd5c57b4d1c8dd
                        : "https://images.unsplash.com/photo-1707508579182-c0213a052fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVldCUyMGZ1ZWwlMjB0YW5rZXIlMjB0cnVja3MlMjByZWZpbmVyeSUyMHNpbG8lMjBVU0F8ZW58MXx8fHwxNzU4MTQ3ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      }
                      alt={service.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-6 text-[#3F1D1D]">{t('additionalServicesTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('additionalServicesDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <div className="w-16 h-16 bg-[#817F82] rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Safety & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-8 text-[#3F1D1D]">{t('safetyComplianceTitle')}</h2>
            <p className="text-lg text-gray-600 mb-12">
              {t('safetyComplianceDesc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl mb-4 text-[#3F1D1D]">{t('dotCertified')}</h3>
                <p className="text-gray-600">{t('dotCertifiedDesc')}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl mb-4 text-[#3F1D1D]">{t('licensedDrivers')}</h3>
                <p className="text-gray-600">{t('licensedDriversDesc')}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl mb-4 text-[#3F1D1D]">{t('insuranceCoverage')}</h3>
                <p className="text-gray-600">{t('insuranceCoverageDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#042A2B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">{t('readyToStart')}</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {t('readyToStartDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('scheduling')}
              size="lg"
              className="bg-[#59C9A5] hover:bg-[#59C9A5]/90 text-white px-8"
            >
              {t('scheduleService')}
            </Button>
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#042A2B] px-8"
            >
              <a href="tel:+15551234567" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>{t('callNow')}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}