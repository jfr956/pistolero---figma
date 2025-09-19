import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pistoleroLogo from 'figma:asset/2d94bd043924470b769c7f31998426aa9364b02d.png';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success('Message sent successfully!');
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: t('phone'),
      value: '(555) 123-4567',
      href: 'tel:+15551234567',
      color: '#59C9A5'
    },
    {
      icon: MessageSquare,
      title: t('whatsapp'),
      value: 'Quick messaging',
      href: 'https://wa.me/15551234567',
      color: '#FFFD77'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@pistoleroexpress.com',
      href: 'mailto:info@pistoleroexpress.com',
      color: '#817F82'
    },
    {
      icon: Navigation,
      title: t('directions'),
      value: 'Get directions',
      href: 'https://maps.google.com',
      color: '#3F1D1D'
    }
  ];

  const serviceAreas = [
    { name: 'Harlingen', distance: '0 miles' },
    { name: 'McAllen', distance: '25 miles' },
    { name: 'Laredo', distance: '120 miles' },
    { name: 'Eagle Pass', distance: '150 miles' },
    { name: 'Del Rio', distance: '180 miles' },
    { name: 'Corpus Christi', distance: '90 miles' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <Card className="max-w-lg mx-4 p-8 text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl mb-4 text-[#3F1D1D]">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting Pistolero Express. We'll get back to you within 2 hours.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            For urgent matters, call us at <a href="tel:+15551234567" className="text-[#3F1D1D] font-medium">(555) 123-4567</a>
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#3F1D1D] hover:bg-[#3F1D1D]/90 text-white"
          >
            Send Another Message
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#3F1D1D] to-[#042A2B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={pistoleroLogo} 
                alt="Pistolero Express Logo" 
                className="h-20 w-20"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6">{t('contactTitle')}</h1>
            <p className="text-xl text-gray-200">
              {t('contactDesc')} - professional fuel transportation across South Texas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Contact Methods */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: method.color }}
                  >
                    <IconComponent className={`w-8 h-8 ${method.color === '#FFFD77' ? 'text-[#3F1D1D]' : 'text-white'}`} />
                  </div>
                  <h3 className="text-lg mb-2 text-[#3F1D1D]">{method.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{method.value}</p>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg border-0">
                <h2 className="text-2xl mb-6 text-[#3F1D1D]">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('name')} *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-gray-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('message')} *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-gray-200"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-[#3F1D1D] hover:bg-[#3F1D1D]/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Company Information */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card className="p-6 shadow-lg border-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-[#3F1D1D]" />
                  <h3 className="text-xl text-[#3F1D1D]">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-[#3F1D1D]">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-[#3F1D1D]">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-[#3F1D1D]">Emergency Only</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 mt-4">
                    <p className="text-sm text-gray-600">
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </Card>

              {/* Service Areas */}
              <Card className="p-6 shadow-lg border-0">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#3F1D1D]" />
                  <h3 className="text-xl text-[#3F1D1D]">Service Areas</h3>
                </div>
                <div className="space-y-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{area.name}</span>
                      <span className="text-sm text-[#59C9A5]">{area.distance}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Company Image */}
              <Card className="p-0 shadow-lg border-0 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1710292824459-7e1a4659b34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMHRleGFzJTIwcnVyYWwlMjBsYW5kc2NhcGUlMjBnb2xkZW4lMjBsaWdodHxlbnwxfHx8fDE3NTgxMTg2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="South Texas landscape"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg mb-2 text-[#3F1D1D]">Serving South Texas</h3>
                  <p className="text-gray-600 text-sm">
                    From the Rio Grande Valley to the Gulf Coast, we're proud to serve communities across South Texas with reliable fuel transportation services.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Emergency Services</h2>
          <p className="text-xl mb-6 text-red-100">
            Need immediate fuel transportation assistance? We're available 24/7 for emergencies.
          </p>
          <Button 
            size="lg"
            className="bg-white text-red-600 hover:bg-red-50 px-8"
          >
            <a href="tel:+15551234567" className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Emergency Hotline: (555) 123-4567</span>
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}