import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    scheduling: 'Scheduling',
    contact: 'Contact',
    
    // Hero section
    heroTitle: 'Professional Fuel Transportation Across South Texas',
    heroSubtitle: 'Reliable tanker truck services connecting communities from Harlingen to Corpus Christi',
    getQuote: 'Get Quote',
    callNow: 'Call Now',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive fuel transportation and logistics solutions tailored for South Texas businesses.',
    fuelTransport: 'Fuel Transportation',
    fuelTransportDesc: 'Reliable gasoline and diesel delivery across South Texas with our modern tanker fleet.',
    fuelTransportFeature1: 'Gasoline and diesel transport',
    fuelTransportFeature2: 'Licensed and insured drivers',
    fuelTransportFeature3: 'Real-time tracking',
    fuelTransportFeature4: 'Flexible scheduling',
    contractHazmat: 'Contract HAZMAT Fleet',
    contractHazmatDesc: 'Certified hazardous materials transportation with specialized equipment and trained drivers.',
    contractHazmatFeature1: 'HAZMAT certified drivers',
    contractHazmatFeature2: 'DOT compliant vehicles',
    contractHazmatFeature3: 'Emergency response protocols',
    contractHazmatFeature4: 'Specialized safety equipment',
    brokerageDelivery: 'Brokerage & Delivery',
    brokerageDeliveryDesc: 'Strategic logistics coordination connecting suppliers with distributors throughout the region.',
    brokerageDeliveryFeature1: 'Multi-point delivery coordination',
    brokerageDeliveryFeature2: 'Supply chain optimization',
    brokerageDeliveryFeature3: 'Route planning and scheduling',
    brokerageDeliveryFeature4: 'Real-time logistics tracking',
    getQuoteService: 'Get Quote for This Service',
    additionalServicesTitle: 'Additional Services',
    additionalServicesDesc: 'We offer a comprehensive range of support services to meet all your fuel transportation needs.',
    fuelMonitoring: 'Fuel Monitoring',
    fuelMonitoringDesc: 'Real-time fuel level monitoring and automated inventory management systems.',
    equipmentMaintenance: 'Equipment Maintenance',
    equipmentMaintenanceDesc: 'Professional maintenance and servicing for fuel storage tanks and equipment.',
    safetyComplianceTitle: 'Safety & Compliance',
    safetyComplianceDesc: 'Safety is our top priority. We maintain the highest standards in fuel transportation with comprehensive safety protocols and regulatory compliance.',
    dotCertified: 'DOT Certified',
    dotCertifiedDesc: 'Full Department of Transportation certification and compliance.',
    licensedDrivers: 'Licensed Drivers',
    licensedDriversDesc: 'All drivers hold commercial licenses with hazmat endorsements.',
    insuranceCoverage: 'Insurance Coverage',
    insuranceCoverageDesc: 'Comprehensive insurance protection for all operations.',
    readyToStart: 'Ready to Get Started?',
    readyToStartDesc: 'Contact us today to discuss your fuel transportation needs and get a customized quote.',
    scheduleService: 'Schedule Service',
    
    // Service areas
    serviceAreasTitle: 'Service Areas',
    serviceAreasDesc: 'We proudly serve communities throughout South Texas',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDesc: 'Ready to work with you',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
    
    // Footer
    footerDesc: 'Professional fuel transportation services across South Texas',
    allRights: 'All rights reserved',
    
    // Scheduling
    scheduleTitle: 'Schedule Service',
    scheduleDesc: 'Request fuel transportation services',
    name: 'Name',
    email: 'Email',
    location: 'Location',
    serviceType: 'Service Type',
    message: 'Message',
    submit: 'Submit Request'
  },
  es: {
    // Navigation
    home: 'Inicio',
    services: 'Servicios',
    scheduling: 'Programar',
    contact: 'Contacto',
    
    // Hero section
    heroTitle: 'Transporte Profesional de Combustible en el Sur de Texas',
    heroSubtitle: 'Servicios confiables de camiones cisterna conectando comunidades desde Harlingen hasta Corpus Christi',
    getQuote: 'Obtener Cotización',
    callNow: 'Llamar Ahora',
    
    // Services
    servicesTitle: 'Nuestros Servicios',
    servicesSubtitle: 'Soluciones integrales de transporte de combustible y logística adaptadas para empresas del sur de Texas.',
    fuelTransport: 'Transporte de Combustible',
    fuelTransportDesc: 'Entrega confiable de gasolina y diesel en todo el sur de Texas con nuestra flota moderna de camiones cisterna.',
    fuelTransportFeature1: 'Transporte de gasolina y diesel',
    fuelTransportFeature2: 'Conductores licenciados y asegurados',
    fuelTransportFeature3: 'Seguimiento en tiempo real',
    fuelTransportFeature4: 'Programación flexible',
    contractHazmat: 'Flota Contratada HAZMAT',
    contractHazmatDesc: 'Transporte certificado de materiales peligrosos con equipo especializado y conductores capacitados.',
    contractHazmatFeature1: 'Conductores certificados HAZMAT',
    contractHazmatFeature2: 'Vehículos compatibles con DOT',
    contractHazmatFeature3: 'Protocolos de respuesta de emergencia',
    contractHazmatFeature4: 'Equipo de seguridad especializado',
    brokerageDelivery: 'Corretaje y Entrega',
    brokerageDeliveryDesc: 'Coordinación logística estratégica conectando proveedores con distribuidores en toda la región.',
    brokerageDeliveryFeature1: 'Coordinación de entrega multipunto',
    brokerageDeliveryFeature2: 'Optimización de la cadena de suministro',
    brokerageDeliveryFeature3: 'Planificación de rutas y programación',
    brokerageDeliveryFeature4: 'Seguimiento logístico en tiempo real',
    getQuoteService: 'Obtener Cotización para Este Servicio',
    additionalServicesTitle: 'Servicios Adicionales',
    additionalServicesDesc: 'Ofrecemos una gama completa de servicios de apoyo para satisfacer todas sus necesidades de transporte de combustible.',
    fuelMonitoring: 'Monitoreo de Combustible',
    fuelMonitoringDesc: 'Monitoreo en tiempo real del nivel de combustible y sistemas automatizados de gestión de inventario.',
    equipmentMaintenance: 'Mantenimiento de Equipo',
    equipmentMaintenanceDesc: 'Mantenimiento y servicio profesional para tanques de almacenamiento de combustible y equipo.',
    safetyComplianceTitle: 'Seguridad y Cumplimiento',
    safetyComplianceDesc: 'La seguridad es nuestra máxima prioridad. Mantenemos los más altos estándares en el transporte de combustible con protocolos de seguridad integrales y cumplimiento regulatorio.',
    dotCertified: 'Certificado DOT',
    dotCertifiedDesc: 'Certificación y cumplimiento completo del Departamento de Transporte.',
    licensedDrivers: 'Conductores Licenciados',
    licensedDriversDesc: 'Todos los conductores poseen licencias comerciales con endosos de materiales peligrosos.',
    insuranceCoverage: 'Cobertura de Seguro',
    insuranceCoverageDesc: 'Protección de seguro integral para todas las operaciones.',
    readyToStart: '¿Listo para Comenzar?',
    readyToStartDesc: 'Contáctanos hoy para discutir tus necesidades de transporte de combustible y obtener una cotización personalizada.',
    scheduleService: 'Programar Servicio',
    
    // Service areas
    serviceAreasTitle: 'Áreas de Servicio',
    serviceAreasDesc: 'Servimos con orgullo a las comunidades de todo el sur de Texas',
    
    // Contact
    contactTitle: 'Contáctanos',
    contactDesc: 'Listos para trabajar contigo',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    directions: 'Direcciones',
    
    // Footer
    footerDesc: 'Servicios profesionales de transporte de combustible en todo el sur de Texas',
    allRights: 'Todos los derechos reservados',
    
    // Scheduling
    scheduleTitle: 'Programar Servicio',
    scheduleDesc: 'Solicitar servicios de transporte de combustible',
    name: 'Nombre',
    email: 'Correo Electrónico',
    location: 'Ubicación',
    serviceType: 'Tipo de Servicio',
    message: 'Mensaje',
    submit: 'Enviar Solicitud'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}