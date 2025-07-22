# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zibly.ai Frontend - A Next.js 15 application for an AI-powered email assistant service targeting enterprise professionals (consultants, analysts, executives). The application allows users to send analytical tasks via email and receive professional-grade deliverables.

## Commands

```bash
# Development
pnpm dev          # Start development server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server  
pnpm lint         # Run ESLint

# Package manager
# This project uses pnpm (preferred), but npm/yarn also work
pnpm install      # Install dependencies
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **UI**: shadcn/ui components (50+ components in /components/ui)
- **Styling**: Tailwind CSS with dark/light theme support
- **Forms**: React Hook Form + Zod validation
- **AWS**: S3 integration (currently commented out in /lib/aws-config.ts)

### Key Directories
- `/app` - Next.js App Router pages and API routes
  - `/app/dashboard` - Protected user dashboard
  - `/app/api` - API endpoints for auth, subscriptions, files
  - `/app/actions` - Server actions for user management
- `/components` - React components
  - `/components/ui` - shadcn/ui component library
- `/lib` - Core utilities (auth, session management, AWS config)

### Authentication
Custom session-based auth system using in-memory storage (development only):
- Implementation: `/lib/auth.ts` and `/lib/session.ts`
- Demo accounts: 
  - demo@zibly.ai / password123
  - john@example.com / password123
- Sessions stored in cookies with JWT tokens

### State Management
- Authentication context: `/components/auth-provider.tsx`
- Theme management: `/components/theme-provider.tsx` (next-themes)
- No global state management library - uses React hooks and context

### API Structure
All API routes follow RESTful patterns:
- `/api/auth/*` - Authentication endpoints
- `/api/subscription/*` - Subscription management
- `/api/file/*` - File upload/download (S3 integration)
- `/api/user/*` - User profile management

### Build Configuration
- TypeScript errors ignored during build (see next.config.mjs)
- ESLint errors ignored during build
- No test framework configured
- Optimized for Vercel deployment

## Important Notes

1. **AWS S3 Integration**: Currently commented out in `/lib/aws-config.ts`. When enabling:
   - Uses AWS CLI configuration in development
   - Requires environment variables in production
   - Supports both local AWS profiles and environment variables

2. **Authentication**: Current implementation is for demo/development only. Production requires proper auth service integration.

3. **No Testing Framework**: Project has no tests configured. Consider adding Jest/Vitest for production.

4. **Component Patterns**: When adding new components, follow existing shadcn/ui patterns and use the components from `/components/ui`.

5. **Server Actions**: Prefer server actions in `/app/actions` over API routes for mutations when possible.