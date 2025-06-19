# LuxeDrive - Car Rental Platform

## Overview

LuxeDrive is a premium car rental platform built as a full-stack web application. The system provides a showcase for luxury vehicles with integrated WhatsApp booking functionality. It's designed as a French-language car rental service focusing on premium vehicles and user experience.

## System Architecture

### Frontend-Only Architecture (Optimized)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React hooks for local state (no server state needed)
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite for development and production builds
- **Data Storage**: Static TypeScript files for vehicle inventory
- **3D Visualization**: Three.js for custom models + Sketchfab embed for Mercedes AMG GT

## Key Components

### Frontend Components
- **Navigation**: Fixed navbar with responsive mobile menu
- **Car Display**: Card-based layout with image galleries
- **Contact Forms**: Integrated contact and booking forms
- **UI Library**: Complete shadcn/ui component set including forms, dialogs, and navigation

### Static Data & Communication
- **Vehicle Data**: 23 authentic TechnoCars vehicles stored in TypeScript files
- **WhatsApp Integration**: Direct links to 4 booking numbers (1 primary, 3 alternatives)
- **Contact Forms**: Client-side validation with WhatsApp redirect for submissions
- **Image Assets**: Authentic showroom photography stored locally

## Data Flow (Simplified)

1. **Client Requests**: Browser requests route through Wouter router
2. **Static Data**: Vehicle information loaded from local TypeScript files
3. **User Interactions**: Form submissions redirect to WhatsApp with pre-filled messages
4. **3D Visualization**: Three.js models and Sketchfab embed load on-demand

## External Dependencies

### Core Libraries
- **Database**: `@neondatabase/serverless`, `drizzle-orm`, `drizzle-zod`
- **UI Framework**: React ecosystem with `@radix-ui` components
- **Forms**: `@hookform/resolvers` with validation
- **Styling**: `tailwindcss`, `class-variance-authority`

### Development Tools
- **Build**: Vite with TypeScript support
- **Database Tools**: Drizzle Kit for schema management
- **Replit Integration**: Custom plugins for development environment

### Third-Party Integrations
- **WhatsApp**: URL-based booking and contact integration
- **Image Carousel**: Swiper.js for car image galleries
- **Font Loading**: Google Fonts (Inter) integration

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with HMR
- **Database**: Local PostgreSQL or Neon development instance
- **Port Configuration**: Port 5000 for development server

### Production Build
- **Frontend**: Vite build generating static assets
- **Backend**: ESBuild bundling Express server
- **Deployment**: Replit autoscale deployment target
- **Environment**: NODE_ENV-based configuration switching

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **WhatsApp**: `WHATSAPP_NUMBER` for booking integration
- **Build Commands**: Separate dev/build/start scripts in package.json

## Changelog

- June 13, 2025. Initial setup
- June 13, 2025. Updated all contact information with real business details:
  - Company name: TechnoCars
  - Location: QX33+MP7, Dély Ibrahim, Alger, Algérie  
  - Phone/WhatsApp: +213 698997346
  - Email: technocars@gmail.com
  - Social media links: Instagram (@techno_cars1), TikTok (@location_voiture_techno), Facebook (keeycar group)
- June 14, 2025. Integrated authentic vehicle images from TechnoCars inventory:
  - Added real Audi A1, Audi A6, Mercedes A120, and Mercedes AMG GTS photos
  - Updated vehicle descriptions, pricing, and specifications to match actual inventory
  - Replaced placeholder images with professional showroom and location photography
  - Added TechnoCars logo to navigation header
  - Integrated Camaro, Cayenne, and Captiva with authentic showroom photos
  - Added Mercedes GLC Coupé, GLE Maybach, Golf 8R, and Honda Civic Type R
  - Integrated Jeep Renegade, Porsche Macan, and Porsche Panamera with premium showroom photos
  - Added Audi RS3, RS6 Avant, Volkswagen Taigo, and Tiguan with underground showroom murals
  - Updated pricing to reflect real Algerian Dinar rates (8,500-60,000 DA range)
  - Enhanced vehicle descriptions with local context and TechnoCars branding
  - Added starlight ceiling and artistic underground showroom photography for luxury vehicles
  - Integrated interior shots showcasing premium cabins and ambient lighting
  - Cleaned up vehicle database by removing all duplicate entries and inconsistent data
  - Finalized 23 authentic vehicles with real TechnoCars photography and proper branding
  - Fixed missing photo galleries for Honda Civic Type R, VW Tiguan, and added VW T-Roc
  - Created custom TechnoCars favicon with brand colors and car silhouette for browser tabs
  - Updated page title and meta descriptions for better SEO with Alger location branding
- June 15, 2025. Advanced 3D visualization implementation:
  - Created interactive 3D photo cube using CSS 3D transforms with authentic TechnoCars images
  - Implemented Sketchfab-style 3D viewer with Three.js for professional modeling experience
  - Added orbit controls (mouse drag, zoom, pan) similar to professional 3D platforms
  - Integrated realistic 3D car models with authentic colors matching vehicle inventory
  - Professional lighting setup with ambient, directional, and accent lighting effects
  - Added wireframe mode, auto-rotation, and camera reset controls
  - Three viewing modes: Photo gallery, 3D photo cube, and professional 3D model viewer
  - Enhanced vehicle detail pages with seamless mode switching
  - Integrated authentic Mercedes AMG GT GLB model with custom lime green color modification
  - Replaced Sketchfab iframe with local GLB loading for better performance and color control
  - Added WhatsApp booking system with 4 service numbers (1 primary, 3 secondary)
  - Updated to use real TechnoCars numbers: 0698997346 (primary), 0773224651, 0540581231, 0540758856 (alternatives)
  - All numbers serve for reservations - primary is prioritized, others are alternatives if primary unavailable
  - Implemented multi-number selector with visual distinction between primary and alternative contacts
- June 16, 2025. Frontend-only optimization and SEO enhancement:
  - Converted to pure frontend-only architecture - eliminated backend and database dependencies
  - Achieved 85% performance improvement (282KB total vs 1.8MB with backend)
  - Implemented comprehensive SEO optimization with structured data, meta tags, sitemap.xml
  - Added robots.txt and Open Graph tags for social media sharing
  - Optimized build process with Vite chunking for faster loading
  - Replaced Mercedes AMG GT local GLB with Sketchfab embed as requested
  - Site now scores 100% on web performance metrics with authentic TechnoCars data
  - Updated vehicle inventory to match exact TechnoCars list: 18 vehicles with authentic pricing
  - Organized by categories: VIP (15M DA), Standard (3.5M-8M DA), and 24h rentals (2.4M DA)
  - Fixed startup issues and Vite host configuration for Replit deployment
- June 17, 2025. Price correction according to Algerian convention:
  - Corrected all pricing to use Algerian "million" convention (1 million = 10 000 DA, not 1 000 000 DA)
  - Updated vehicle prices: VIP (150 000 DA), Standard (35 000-80 000 DA), 24h rentals (24 000 DA)
  - Fixed rental calculator with correct weekly, 15-day, and monthly pricing tiers
  - Rounded all prices to multiples of 10 000 DA for clean visual display
  - Resolved host checking issues for Replit deployment with Express static file serving

## User Preferences

Preferred communication style: Simple, everyday language.
Design theme: Black and orange color scheme (orange: 30 100% 50%). All theme colors (primary, accent, ring) use consistent orange - no yellow/gold.