import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import pistoleroLogo from 'figma:asset/2d94bd043924470b769c7f31998426aa9364b02d.png';

export function Footer() {
  const { t } = useLanguage();

  const serviceAreas = [
    'Harlingen', 'McAllen', 'Laredo', 'Eagle Pass', 'Del Rio', 'Corpus Christi'
  ];

  return (
    <footer className="bg-[#042A2B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={pistoleroLogo} 
                alt="Pistolero Express Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-lg">PISTOLERO</h3>
                <p className="text-sm text-gray-300 -mt-1">EXPRESS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              {t('footerDesc')}
            </p>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg">{t('serviceAreasTitle')}</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300 text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg">{t('services')}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>{t('fuelTransport')}</li>
              <li>{t('tankCleaning')}</li>
              <li>{t('emergency')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg">{t('contact')}</h4>
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#59C9A5] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@pistoleroexpress.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#59C9A5] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>info@pistoleroexpress.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4" />
                <span>South Texas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Pistolero Express. {t('allRights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}