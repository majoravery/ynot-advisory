# StrategicCo - Business Consultancy Website

## Overview

This is a full-stack web application for StrategicCo, a business consultancy company. The application is built with a modern tech stack featuring a React frontend with TypeScript, shadcn/ui components, and an Express.js backend with PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, Vite build tool, and Tailwind CSS
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Shared**: Common schema definitions and types
- **UI Framework**: shadcn/ui components based on Radix UI primitives

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for styling with custom design system
- **TanStack Query** for server state management
- **React Hook Form** with Zod validation for form handling
- **Wouter** for client-side routing

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** for database operations
- **Neon Database** serverless PostgreSQL connection
- **Session management** with connect-pg-simple
- **RESTful API** design pattern

### UI Components
The application uses a comprehensive set of pre-built UI components from shadcn/ui including:
- Forms (Input, Textarea, Button, Label)
- Layout components (Card, Accordion, Separator)
- Feedback components (Toast, Alert, Progress)
- Navigation components (Tabs, Navigation Menu)
- Data display components (Table, Badge, Avatar)

## Data Flow

### Contact Form Submission
1. User fills out contact form on the homepage
2. Form data is validated using Zod schema on the client
3. Data is sent to `/api/contact` POST endpoint
4. Server validates data again using shared schema
5. Contact submission is stored in PostgreSQL database
6. Success/error feedback is shown to user via toast notifications

### Database Schema
- **contact_submissions**: Stores contact form submissions with fields for name, email, company, message, and timestamp
- **users**: Basic user table for potential future authentication features

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection for Neon database
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **zod**: Schema validation library

### UI Dependencies
- **@radix-ui/***: Primitive components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **eslint**: Code linting
- **prettier**: Code formatting

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React app to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database Migrations**: Drizzle handles schema migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)

### Scripts
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both frontend and backend for production
- `npm start`: Start production server
- `npm run db:push`: Push database schema changes

### Server Setup
- Express server serves both API routes and static frontend files
- Vite middleware is used in development for hot module replacement
- Production serves pre-built static files from `dist/public`
- API routes are prefixed with `/api`

### Database Strategy
- Uses Drizzle ORM with PostgreSQL dialect
- Schema definitions are shared between client and server
- Migrations are stored in `./migrations` directory
- Database operations use connection pooling via Neon serverless

The application is designed to be easily deployable to platforms like Vercel, Netlify, or traditional hosting providers with proper environment variable configuration.