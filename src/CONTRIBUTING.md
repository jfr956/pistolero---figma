# Contributing to Pistolero Express Website

Thank you for your interest in contributing to the Pistolero Express website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch for your feature/fix
5. Make your changes
6. Test thoroughly
7. Submit a pull request

## 🎯 Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow the existing component structure and patterns
- Use functional components with hooks
- Implement proper error handling
- Write descriptive commit messages

### Design Principles
- **Mobile-first**: Always start with mobile design
- **Accessibility**: Ensure components are accessible (ARIA labels, keyboard navigation)
- **Performance**: Optimize images and minimize re-renders
- **Consistency**: Follow the established design system

### Brand Guidelines
- Maintain the Texas heritage aesthetic
- Use only approved brand colors:
  - Primary Brown: `#3F1D1D`
  - Secondary Gray: `#817F82`
  - Accent Mint: `#59C9A5`
  - Yellow: `#FFFD77`
  - Dark Green: `#042A2B`

### Bilingual Support
- All user-facing text must be translatable
- Add translation keys to `components/LanguageContext.tsx`
- Test both English and Spanish versions
- Ensure proper text layout in both languages

## 📝 Component Guidelines

### Creating New Components
1. Place components in the appropriate directory (`/components`)
2. Use TypeScript interfaces for props
3. Include proper JSDoc comments
4. Export components using named exports
5. Use semantic HTML elements

### Updating Existing Components
1. Maintain backward compatibility
2. Update tests if necessary
3. Document any breaking changes
4. Consider performance implications

## 🧪 Testing

Before submitting a pull request:

1. **Functionality Testing**
   - Test all interactive elements
   - Verify form submissions work correctly
   - Check navigation between pages

2. **Responsive Testing**
   - Test on mobile devices (320px+)
   - Test on tablets (768px+)
   - Test on desktop (1024px+)

3. **Language Testing**
   - Switch between English and Spanish
   - Verify all text content translates
   - Check text layout and spacing

4. **Cross-browser Testing**
   - Chrome/Chromium
   - Firefox
   - Safari (if possible)
   - Edge

## 🎨 Design System

### Colors
Always use the CSS custom properties defined in `styles/globals.css`:
```css
/* Brand Colors */
--color-primary-brown: #3F1D1D;
--color-secondary-gray: #817F82;
--color-accent-mint: #59C9A5;
--color-yellow: #FFFD77;
--color-dark-green: #042A2B;
```

### Typography
- Don't override font sizes unless specifically needed
- Use the default typography hierarchy defined in globals.css
- Maintain consistent line heights (1.5)

### Spacing
- Use Tailwind's spacing scale consistently
- Maintain proper spacing between sections
- Ensure adequate white space

## 📱 Mobile Considerations

### Quick Access Features
- Maintain call, WhatsApp, and directions buttons
- Ensure touch targets are at least 44px
- Optimize for one-handed usage

### Performance
- Optimize images for mobile networks
- Minimize JavaScript bundle size
- Use lazy loading where appropriate

## 🌐 Internationalization (i18n)

### Adding New Translations
1. Add keys to both `en` and `es` objects in `LanguageContext.tsx`
2. Use descriptive key names (e.g., `contactFormSubmitButton`)
3. Keep translations culturally appropriate
4. Consider text length differences between languages

### Translation Guidelines
- Use professional, formal tone in Spanish
- Maintain technical accuracy for industry terms
- Consider regional variations (Texas/Mexico border region)

## 🔧 Technical Requirements

### Dependencies
- Only add dependencies that are necessary
- Prefer lightweight alternatives
- Update the README if adding new major dependencies

### Performance
- Use `useMemo` and `useCallback` appropriately
- Avoid unnecessary re-renders
- Optimize image loading and sizing

### Security
- Sanitize all user inputs
- Use HTTPS for all external resources
- Never commit sensitive information

## 📋 Pull Request Process

1. **Before Submitting**
   - Run `npm run build` to ensure no build errors
   - Test your changes thoroughly
   - Update documentation if needed

2. **PR Description**
   - Clearly describe what changes were made
   - Include screenshots for UI changes
   - Reference any related issues

3. **Review Process**
   - PRs require at least one review
   - Address all feedback promptly
   - Keep discussions professional and constructive

## 🐛 Bug Reports

When reporting bugs:
1. Use the GitHub issue template
2. Include steps to reproduce
3. Specify browser and device information
4. Include screenshots if applicable
5. Describe expected vs actual behavior

## 💡 Feature Requests

For new features:
1. Check if a similar feature already exists
2. Describe the use case and benefits
3. Consider the impact on existing functionality
4. Discuss implementation approach

## 📞 Questions?

If you have questions about contributing:
- Open a GitHub issue with the "question" label
- Review existing issues and discussions
- Check the main README.md for additional context

## 🙏 Recognition

All contributors will be recognized in the project. Thank you for helping make the Pistolero Express website better!

---

Happy coding! 🚛