# PrintX - 3D Printing Service Website

A modern, visually stunning website for a 3D printing service company built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, aesthetic interface with smooth scroll animations
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Beautiful Framer Motion animations throughout
- **Complete Pages**:
  - 🏠 Landing Page - Hero section with features and testimonials
  - 🛍️ Products Page - Pre-designed 3D models catalog
  - 🔧 Services Page - Comprehensive service offerings
  - 📖 About Page - Company information and team
  - 📞 Contact Page - Contact form and information
  - 🛒 Cart Page - Shopping cart with order summary
  - 🔐 Auth Page - Login and registration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Pages Overview

### Landing Page (/)
- Eye-catching hero section with gradient background
- Features showcase with hover effects
- Services grid with pricing
- "How It Works" process flow
- Customer testimonials
- Call-to-action sections

### Products Page (/products)
- Product catalog with filtering
- Category filters (All, Home, Tech, Office)
- Product cards with ratings and pricing
- Add to cart functionality
- Custom design upload option

### Services Page (/services)
- Detailed service offerings
- Material options showcase
- Process workflow
- Pricing information
- CTA for quotes

### About Page (/about)
- Mission and vision statements
- Company statistics
- Core values
- Team member profiles
- Company story

### Contact Page (/contact)
- Contact form with file upload
- Contact information cards
- Business hours
- FAQ section
- Map placeholder

### Cart Page (/cart)
- Cart items with quantity controls
- Order summary with pricing breakdown
- Promo code input
- Trust badges
- Checkout flow

### Auth Page (/auth)
- Login/Register toggle
- Email/password authentication
- Social login options (Google, GitHub)
- Benefits showcase

## 🎯 Key Features

- ✨ Smooth scroll animations
- 🎨 Gradient text effects
- 💫 Hover transitions
- 📱 Mobile-first responsive design
- 🌙 Dark mode support (configured)
- ♿ Accessible components
- 🚀 Optimized performance

## 🏗️ Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── auth/page.tsx
│   ├── cart/page.tsx
│   ├── contact/page.tsx
│   ├── products/page.tsx
│   ├── services/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── badge.tsx
└── lib/
    └── utils.ts
```

## 🎨 Customization

### Colors
The color scheme uses CSS variables defined in `globals.css`. Modify these to change the theme:
- `--primary`: Main brand color (purple)
- `--secondary`: Secondary color
- `--background`: Background color
- `--foreground`: Text color

### Animations
Framer Motion animations can be customized in each component. Common animation variants are defined inline.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📄 License

This project is for demonstration purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Created with ❤️ for 3D printing enthusiasts

---

**Note**: This is a frontend-only implementation. Backend API integration, authentication, and payment processing need to be implemented separately.
