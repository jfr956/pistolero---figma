import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Clock, MapPin, Truck, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { toast } from 'sonner@2.0.3';
import pistoleroLogo from 'figma:asset/2d94bd043924470b769c7f31998426aa9364b02d.png';

export function Scheduling() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    location: '',
    urgency: '',
    preferredDate: '',
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
      toast.success('Service request submitted successfully!');
    }, 1000);
  };

  const serviceTypes = [
    'Fuel Transportation',
    'Tank Cleaning',
    'Emergency Service',
    'Equipment Maintenance',
    'Fuel Monitoring Setup'
  ];

  const urgencyLevels = [
    { value: 'standard', label: 'Standard (3-5 business days)' },
    { value: 'urgent', label: 'Urgent (1-2 business days)' },
    { value: 'emergency', label: 'Emergency (Same day)' }
  ];

  const serviceAreas = [
    'Harlingen', 'McAllen', 'Laredo', 'Eagle Pass', 'Del Rio', 'Corpus Christi', 'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <Card className="max-w-lg mx-4 p-8 text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl mb-4 text-[#3F1D1D]">Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Pistolero Express. We'll contact you within 2 hours to confirm your service request.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            For immediate assistance, call us at <a href="tel:+15551234567" className="text-[#3F1D1D] font-medium">(555) 123-4567</a>
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#3F1D1D] hover:bg-[#3F1D1D]/90 text-white"
          >
            Submit Another Request
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
            <h1 className="text-4xl lg:text-5xl mb-6">{t('scheduleTitle')}</h1>
            <p className="text-xl text-gray-200">
              {t('scheduleDesc')} - we'll get back to you within 2 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-lg border-0">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="border-gray-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">{t('serviceType')} *</Label>
                    <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className="border-gray-200">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">{t('location')} *</Label>
                      <Select onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger className="border-gray-200">
                          <SelectValue placeholder="Select service area" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceAreas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Service Urgency *</Label>
                      <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger className="border-gray-200">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('message')}</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Please provide any additional details about your service requirements..."
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
                    {t('submit')}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="p-6 shadow-lg border-0">
                <h3 className="text-xl mb-4 text-[#3F1D1D]">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+15551234567"
                    className="flex items-center space-x-3 p-3 bg-[#59C9A5]/10 rounded-lg hover:bg-[#59C9A5]/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#59C9A5] rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#3F1D1D]">Call Now</p>
                      <p className="text-sm text-gray-600">(555) 123-4567</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/15551234567"
                    className="flex items-center space-x-3 p-3 bg-[#FFFD77]/20 rounded-lg hover:bg-[#FFFD77]/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#FFFD77] rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#3F1D1D]" />
                    </div>
                    <div>
                      <p className="text-[#3F1D1D]">WhatsApp</p>
                      <p className="text-sm text-gray-600">Quick response</p>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Service Information */}
              <Card className="p-6 shadow-lg border-0">
                <h3 className="text-xl mb-4 text-[#3F1D1D]">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#3F1D1D] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <div>
                      <p className="text-[#3F1D1D]">Quick Response</p>
                      <p className="text-sm text-gray-600">We'll contact you within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#3F1D1D] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <div>
                      <p className="text-[#3F1D1D]">Custom Quote</p>
                      <p className="text-sm text-gray-600">Tailored pricing for your needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#3F1D1D] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <div>
                      <p className="text-[#3F1D1D]">Reliable Service</p>
                      <p className="text-sm text-gray-600">Professional execution</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Emergency Notice */}
              <Card className="p-6 bg-red-50 border-red-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Truck className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg text-red-800">Emergency Services</h3>
                </div>
                <p className="text-sm text-red-700 mb-4">
                  For emergency fuel transportation needs, please call us directly for immediate assistance.
                </p>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  size="sm"
                >
                  <a href="tel:+15551234567">Emergency Hotline</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}