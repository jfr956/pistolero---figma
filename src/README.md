# Pistolero Express Website

A professional bilingual website for Pistolero Express, an industrial logistics company specializing in fuel tanker trucking transportation across South Texas.

![Pistolero Express](https://images.unsplash.com/photo-1757191377107-f1d78844e769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWVsJTIwdGFua2VyJTIwdHJ1Y2slMjBmdWxsJTIwc2l6ZSUyMHBldHJvbGV1bXxlbnwxfHx8fDE3NTgxNDYyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080)

## 🚛 About

Pistolero Express provides reliable fuel transportation and logistics solutions across South Texas, serving communities from Harlingen to Corpus Christi. Our website showcases our services with a professional design that blends Texas heritage with modern industrial aesthetics.

## ✨ Features

### 🌐 Bilingual Support
- Complete English/Spanish translation
- Easy language switching
- Contextual content adaptation

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Quick access buttons for mobile (call, WhatsApp, directions)

### 🎨 Professional Design
- Texas heritage aesthetic
- Brand colors: Brown (#3F1D1D), Gray (#817F82), Mint (#59C9A5), Yellow (#FFFD77), Dark Green (#042A2B)
- Golden hour imagery of tanker trucks
- Clean, professional layouts with plenty of white space

### 🛠 Core Services
- **Fuel Transportation**: Gasoline and diesel delivery with modern tanker fleet
- **Contract HAZMAT Fleet**: Certified hazardous materials transportation
- **Brokerage & Delivery**: Strategic logistics coordination

### 📄 Pages
- **Home**: Hero section with service overview and service areas
- **Services**: Detailed service descriptions with features and safety compliance
- **Scheduling**: Service request form with validation
- **Contact**: Multiple contact methods and company information

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner toast notifications
- **Images**: Unsplash integration with fallback handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pistolero-express-website.git
cd pistolero-express-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
├── App.tsx                 # Main application component
├── components/
│   ├── Contact.tsx         # Contact page with form
│   ├── Footer.tsx          # Site footer
│   ├── Header.tsx          # Navigation header
│   ├── Home.tsx            # Homepage with hero and services
│   ├── LanguageContext.tsx # Bilingual translation context
│   ├── Scheduling.tsx      # Service scheduling form
│   ├── Services.tsx        # Detailed services page
│   ├── figma/              # Figma-imported components
│   └── ui/                 # Shadcn/ui components
├── styles/
│   └── globals.css         # Global styles and Tailwind config
├── guidelines/
│   └── Guidelines.md       # Development guidelines
└── package.json
```

## 🌍 Service Areas

- Harlingen, TX
- McAllen, TX
- Laredo, TX
- Eagle Pass, TX
- Del Rio, TX
- Corpus Christi, TX

## 🎨 Design System

### Brand Colors
- **Primary Brown**: `#3F1D1D` (Logo, headers)
- **Secondary Gray**: `#817F82` (Supporting elements)
- **Accent Mint**: `#59C9A5` (CTAs, highlights)
- **Yellow**: `#FFFD77` (Service highlights)
- **Dark Green**: `#042A2B` (Backgrounds, depth)

### Typography
- Base font size: 16px
- Headings: Medium weight (500)
- Body text: Normal weight (400)
- Line height: 1.5

## 🔧 Customization

### Adding New Languages
1. Add translation keys to `components/LanguageContext.tsx`
2. Update the language type union
3. Add language switcher option in Header component

### Modifying Services
1. Update service data in `components/Services.tsx`
2. Add corresponding translation keys
3. Update images as needed

### Styling Changes
1. Update brand colors in `styles/globals.css`
2. Modify component styles using Tailwind classes
3. Ensure responsive design consistency

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

### Development Guidelines

- Follow the existing code style and patterns
- Ensure responsive design across all devices
- Test bilingual functionality thoroughly
- Maintain accessibility standards
- Use semantic HTML elements
- Keep components modular and reusable

## 📄 License

This project is proprietary software owned by Pistolero Express. All rights reserved.

## 📞 Contact

**Pistolero Express**
- Phone: [Your Phone Number]
- Email: [Your Email]
- Website: [Your Website]

---

Built with ❤️ for Texas logistics