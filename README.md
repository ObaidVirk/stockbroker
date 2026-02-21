# StockBroker - Modern Investment Platform

A professional, production-ready investment platform built with Next.js and TailwindCSS. This is a full-featured clone inspired by modern fintech platforms, rebranded as "StockBroker".

## 🚀 Features

- **Modern UI/UX**: Clean, minimalistic design with smooth animations and micro-interactions
- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **Comprehensive Pages**:
  - Home page with hero, features, stats, testimonials
  - Login and Signup pages with social authentication options
  - Admin Dashboard with portfolio overview, holdings, watchlist
  - Pricing page with plan comparison
  - Products page showcasing investment options
  - Resources page with learning materials
  - About page with company information
- **Professional Components**: Reusable React components with consistent styling
- **Type-Safe**: Built with TypeScript for better development experience
- **Production-Ready**: Clean code architecture following best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Authentication**: JWT-based session management
- **Payments**: Stripe integration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ObaidVirk/stockbroker.git
cd stockbroker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Stripe keys, JWT secret, and admin credentials:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_long_random_secret
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD_HASH=your_bcrypt_hash
ADMIN_NAME=Admin
```

   To generate `ADMIN_PASSWORD_HASH`, run:
```bash
node -e "require('bcryptjs').hash('yourpassword', 10).then(h => console.log(h))"
```

   ⚠️ **IMPORTANT**: Never commit `.env.local` to the repository.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   ├── login/page.tsx       # Login page (admin only)
│   ├── dashboard/page.tsx   # Admin dashboard
│   ├── pricing/page.tsx     # Pricing page
│   ├── products/page.tsx    # Products page
│   ├── resources/page.tsx   # Resources page
│   ├── about/page.tsx       # About page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   └── home/                # Home page sections
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── Features.tsx
│       ├── TradingSection.tsx
│       ├── InvestmentOptions.tsx
│       ├── Testimonials.tsx
│       └── CTASection.tsx
└── public/                  # Static assets

```

## 🎨 Design System

### Colors
- **Brand Green**: `#22c55e` (Primary brand color)
- **Primary Blue**: `#0ea5e9` (Accent color)
- **Gray Scale**: Complete gray palette for text and backgrounds

### Typography
- **Font Family**: Inter
- **Headings**: `text-4xl md:text-6xl font-semibold`
- **Subheadings**: `text-2xl md:text-3xl font-medium`
- **Body**: `text-lg md:text-xl text-gray-600 leading-relaxed`

### Spacing
- **Container**: `max-w-screen-xl` (centered)
- **Horizontal Padding**: `px-6 md:px-12`
- **Vertical Section**: `py-20 md:py-28`

## 📄 Available Pages

- `/` - Home page
- `/login` - Login page (admin only)
- `/dashboard` - Admin dashboard (requires admin role)
- `/pricing` - Pricing plans
- `/products` - Investment products
- `/resources` - Learning resources
- `/about` - About the company

## 🔐 Authentication & Security

- **Role-Based Access Control**: Admin-only dashboard access
- **Secure Password Hashing**: bcryptjs with salt rounds
- **JWT Sessions**: HttpOnly cookies for secure session management
- **Env-based Credentials**: No hardcoded credentials in source code
- **Environment Variables**: All sensitive data stored in `.env.local` (git-ignored)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to use it as a template for your own projects.

---

Built with ❤️ using Next.js and TailwindCSS
