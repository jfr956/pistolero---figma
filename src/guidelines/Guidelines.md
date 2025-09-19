# Pistolero Express Website Development Guidelines

## 🎯 Project Overview

This website represents Pistolero Express, a professional industrial logistics company specializing in fuel tanker trucking transportation across South Texas. The design must reflect both Texas heritage and modern industrial professionalism.

## 🎨 Design System Guidelines

### Brand Identity
- **Company**: Pistolero Express - Industrial Logistics & Fuel Transportation
- **Target Audience**: B2B clients, industrial facilities, fuel distributors
- **Geographic Focus**: South Texas (Harlingen, McAllen, Laredo, Eagle Pass, Del Rio, Corpus Christi)
- **Aesthetic**: Texas heritage meets industrial professionalism

### Color Palette
**Primary Brand Colors** (use these exact hex values):
- **Brown**: `#3F1D1D` - Primary brand color for logos, main headers
- **Gray**: `#817F82` - Supporting elements, secondary text
- **Mint**: `#59C9A5` - Call-to-action buttons, highlights, progress indicators
- **Yellow**: `#FFFD77` - Service category highlights, warning/caution elements
- **Dark Green**: `#042A2B` - Deep backgrounds, footer, navigation depth

### Typography Rules
- **Never override** Tailwind font-size classes unless specifically requested
- **Never override** font-weight classes unless specifically requested  
- **Never override** line-height classes unless specifically requested
- Use the default typography system defined in `styles/globals.css`
- Maintain professional tone in all content

### Visual Style
- **Imagery**: Golden hour photography of tanker trucks in rural South Texas settings
- **White Space**: Generous use of white space for clean, professional appearance
- **Photography**: Professional industrial imagery, avoid stock-looking photos
- **Logo**: Featured prominently throughout the site (illustrated pistolero logo)

## 🌐 Bilingual Requirements

### Language Support
- **Primary**: English (US)
- **Secondary**: Spanish (Mexican/Texas border region)
- **Switching**: Easy, prominent language toggle in header
- **Context**: All user-facing content must be translatable

### Translation Guidelines
- Use professional, formal tone in Spanish
- Maintain technical accuracy for industrial terms
- Consider cultural context for South Texas/Mexico border region
- Test text length differences between languages
- Ensure proper layout in both languages

## 📱 Responsive Design Requirements

### Mobile-First Approach
- Start all designs with mobile (320px+)
- Progressive enhancement for larger screens
- Touch-friendly interface elements (minimum 44px touch targets)

### Device Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Mobile-Specific Features
- **Quick Access Bar**: Call button, WhatsApp button, Directions button
- **Simplified Navigation**: Hamburger menu with clear hierarchy
- **Form Optimization**: Easy input on mobile keyboards
- **Loading Performance**: Optimize for mobile networks

## 🛠 Technical Guidelines

### Component Architecture
- Use functional components with TypeScript
- Implement proper error boundaries
- Use React hooks appropriately (`useMemo` for expensive operations)
- Keep components modular and reusable

### Performance Requirements
- Optimize images using `ImageWithFallback` component
- Lazy load images where appropriate
- Minimize JavaScript bundle size
- Use efficient state management

### Code Quality
- TypeScript for all components
- Proper error handling
- Accessible markup (ARIA labels, semantic HTML)
- Clean, maintainable code structure

## 📄 Page-Specific Guidelines

### Homepage
- **Hero Section**: Compelling headline with Texas heritage imagery
- **Service Overview**: Clear presentation of three main services
- **Service Areas**: Visual map or list of covered cities
- **Professional Credibility**: Safety certifications, experience indicators

### Services Page
- **Detailed Descriptions**: Each service with features and benefits
- **Visual Hierarchy**: Clear distinction between service categories
- **Safety Focus**: Prominent display of certifications and compliance
- **Call-to-Action**: Easy path to request quotes

### Scheduling Page
- **User-Friendly Form**: Simple, clear service request process
- **Validation**: Proper form validation with helpful error messages
- **Confirmation**: Clear confirmation of form submission
- **Contact Integration**: Alternative contact methods

### Contact Page
- **Multiple Channels**: Phone, email, physical address, WhatsApp
- **Business Hours**: Clear operating hours
- **Location Info**: Service area coverage
- **Professional Presentation**: Business credentials and certifications

## 🔒 Content Guidelines

### Tone and Voice
- **Professional**: Authoritative and trustworthy
- **Regional**: Texas pride without being overly casual
- **Technical**: Accurate industry terminology
- **Safety-Focused**: Emphasize safety and compliance

### Messaging Priorities
1. **Safety and Compliance**: DOT certification, licensed drivers, insurance coverage
2. **Reliability**: On-time delivery, modern fleet, experienced team
3. **Regional Expertise**: Deep knowledge of South Texas logistics
4. **Professional Service**: B2B focused, industrial-grade solutions

### Service Descriptions
- **Fuel Transportation**: Gasoline and diesel delivery, licensed drivers, real-time tracking
- **Contract HAZMAT Fleet**: Certified hazmat transport, specialized equipment, emergency protocols
- **Brokerage & Delivery**: Logistics coordination, supply chain optimization, multi-point delivery

## 🚨 Critical Requirements

### Must-Have Features
- Bilingual support (English/Spanish)
- Mobile-responsive design
- Professional industrial aesthetic
- Service area coverage display
- Easy contact methods
- Safety/certification prominence

### Never Compromise On
- Mobile usability
- Loading performance
- Professional appearance
- Safety/compliance messaging
- Bilingual functionality
- Brand color consistency

### Quality Standards
- All interactive elements must work on touch devices
- All content must be accessible (WCAG guidelines)
- All text must be translatable
- All images must have appropriate alt text
- All forms must have proper validation

## 📊 Success Metrics

### User Experience Goals
- Fast loading times (< 3 seconds)
- Easy navigation on all devices
- Clear path to contact/scheduling
- Professional credibility establishment

### Business Goals
- Generate qualified leads
- Showcase service capabilities
- Build trust through professionalism
- Establish regional authority

---

**Remember**: This website represents a professional B2B logistics company. Every design decision should reinforce trust, safety, and regional expertise while maintaining the unique Texas heritage character of the Pistolero Express brand.