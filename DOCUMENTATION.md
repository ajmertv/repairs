# Varsha Enterprise Website Documentation

## Project Overview
This is a modern Next.js website built for Varsha Enterprise, a home appliance service center. The website uses:
- Next.js 15.3.2 for the framework
- TailwindCSS for styling
- TypeScript for type safety
- React 18 for the UI components

## Project Structure

```
varshaenterprise/
├── components/           # Reusable React components
│   └── Layout.tsx       # Main layout component with header and footer
├── pages/               # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Home page
│   ├── services.tsx    # Services page
│   ├── service-rates.tsx    # Service rates page
│   ├── self-help-videos.tsx # Self help videos page
│   └── contact.tsx     # Contact page
├── public/             # Static assets
│   └── images/         # Image assets
│       └── logo.png    # Company logo
├── styles/             # CSS styles
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
└── tailwind.config.js  # Tailwind CSS configuration
```

## Component Details

### Layout Component (`components/Layout.tsx`)
The Layout component serves as the main wrapper for all pages and includes:

1. **Header Section**
   ```tsx
   // Navigation menu with responsive design
   const navigation = [
     { name: 'Home', href: '/', current: true },
     { name: 'Services', href: '/services', current: false },
     { name: 'Service Rates', href: '/service-rates', current: false },
     { name: 'Self Help Videos', href: '/self-help-videos', current: false },
     { name: 'Contact', href: '/contact', current: false },
   ]
   ```

2. **Communication Buttons**
   - Call Now (Green): Links to phone number 9414456385
   - WhatsApp (Blue): Links to https://wa.me/919352214113
   - Register Complaint (Red): Links to Google Form

3. **Mobile Responsive Menu**
   - Hamburger menu for mobile devices
   - Collapsible navigation
   - Mobile-optimized communication buttons

4. **Footer Section**
   - Navigation links
   - Social media links
   - Copyright information

## Page Components

### 1. Service Rates Page (`pages/service-rates.tsx`)
```tsx
// Displays flat service rate of ₹350
const services = [
  'AC Repair',
  'LED/LCD TV Repair',
  'Smart TV Repair',
  // ... other services
]
```

Key features:
- List of all services covered
- Pricing card with call-to-action
- Service inclusion details

### 2. Self Help Videos Page (`pages/self-help-videos.tsx`)
```tsx
// Video gallery structure
const videos = [
  {
    title: 'AC Repair Tips',
    description: 'Basic troubleshooting for common AC problems',
    youtubeUrl: '#',
    category: 'Air Conditioner'
  },
  // ... other videos
]
```

Features:
- Video categories
- Thumbnail placeholders
- YouTube integration ready

### 3. Contact Page (`pages/contact.tsx`)
Modern contact page with:
- Direct phone numbers
- WhatsApp link
- Online complaint form
- Response time information

## Styling Details

### TailwindCSS Classes Explained

1. **Container Classes**
   ```css
   mx-auto        /* Center container horizontally */
   max-w-7xl      /* Maximum width constraint */
   px-4 sm:px-6   /* Responsive padding */
   ```

2. **Flex Layout**
   ```css
   flex           /* Enable flexbox */
   items-center   /* Vertical alignment */
   justify-between /* Horizontal spacing */
   ```

3. **Responsive Design**
   ```css
   hidden sm:flex  /* Hide on mobile, show on desktop */
   sm:ml-6        /* Margin on larger screens */
   ```

4. **Button Styles**
   ```css
   rounded-md     /* Rounded corners */
   bg-green-600   /* Background color */
   hover:bg-green-500 /* Hover state */
   ```

## Deployment Configuration

### GitHub Pages Setup (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',        // Static HTML export
  images: {
    unoptimized: true,    // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' 
    ? '/varshaenterprise' 
    : '',
  trailingSlash: true,
}
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      # ... deployment steps
```

## Development Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Access the site at http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**
   - Push to main branch
   - GitHub Actions will automatically deploy

## Common Issues and Solutions

1. **Logo 404 Error**
   - Ensure logo.png is in public/images/
   - Check image path in Layout.tsx
   - Verify next.config.js settings

2. **Mobile Menu Issues**
   - Check Tailwind breakpoints
   - Verify Headless UI components
   - Test on different devices

3. **Deployment Issues**
   - Verify GitHub Pages settings
   - Check basePath in next.config.js
   - Ensure all assets are properly referenced

## Best Practices Used

1. **Performance**
   - Image optimization
   - Component-based architecture
   - Lazy loading where applicable

2. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation

3. **SEO**
   - Meta tags
   - Semantic structure
   - Proper heading hierarchy

4. **Security**
   - External links protection
   - Form validation
   - Secure communication channels

## Future Enhancements

1. **Content Management**
   - Add CMS integration
   - Dynamic service updates
   - Blog section

2. **Features**
   - Online booking system
   - Service tracking
   - Customer reviews

3. **Analytics**
   - Google Analytics integration
   - User behavior tracking
   - Conversion optimization

## Learning Resources

1. **Next.js**
   - [Next.js Documentation](https://nextjs.org/docs)
   - [Learn Next.js](https://nextjs.org/learn)

2. **TailwindCSS**
   - [Tailwind Documentation](https://tailwindcss.com/docs)
   - [Tailwind UI Components](https://tailwindui.com)

3. **TypeScript**
   - [TypeScript Handbook](https://www.typescriptlang.org/docs/)
   - [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) 