# Zibly.ai Frontend

> **Your email-powered AI assistant for deep analytical work**

Zibly.ai transforms how professionals handle complex analytical tasks. Simply send an email with your requirements, and receive professional-grade deliverables powered by AI. Built for executives, consultants, analysts, and decision-makers who need high-quality work done fast.

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Git
- AWS CLI configured

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zibly-frontend

# Install dependencies
pnpm install

# Configure AWS credentials
aws configure

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the application running.

### Demo Credentials

For testing the authentication system:

- **Email**: `demo@juno.ai` | **Password**: `password123`
- **Email**: `john@example.com` | **Password**: `password123`

## Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 19** - Latest React features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library (50+ components)
- **Radix UI** - Accessible component primitives  
- **Lucide React** - Beautiful icons
- **next-themes** - Theme switching support

### Data & Forms
- **React Hook Form** - Performant forms with validation
- **Zod** - Schema validation
- **Recharts** - Data visualization

### Backend Integration
- **AWS SDK** - S3 file storage integration
- **Custom Auth** - Session-based authentication

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## Project Structure

```
zibly-frontend/
├── app/                     # Next.js App Router
│   ├── page.tsx            # Landing page
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── dashboard/          # User dashboard
│   ├── api/               # API routes
│   ├── (auth)/            # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── pricing/           # Pricing page
│   ├── features/          # Feature pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── help/              # Help/support
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── navbar.tsx         # Navigation component
│   ├── footer.tsx         # Footer component
│   ├── auth-provider.tsx  # Authentication context
│   ├── theme-provider.tsx # Theme management
│   └── dashboard-nav.tsx  # Dashboard navigation
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication logic
│   ├── session.ts        # Session management
│   ├── aws-config.ts     # AWS configuration
│   └── utils.ts          # Helper utilities
├── hooks/                 # Custom React hooks
├── styles/               # Additional stylesheets
└── public/               # Static assets
```

## Key Features

### Core Product Features
- **Email-powered AI** - Send tasks via email, receive professional deliverables
- **Professional Analytics** - Complex data analysis and report generation
- **Enterprise-grade quality** - Institutional-quality research and analysis
- **Fast turnaround** - Hours instead of weeks for complex tasks

### Technical Features
- **Responsive design** - Optimized for desktop and mobile
- **Dark/light themes** - User preference support
- **File upload** - AWS S3 integration for document handling
- **Authentication** - Secure user sessions
- **Dashboard** - User management and task tracking
- **Professional UI** - Clean, modern interface

### Target Users
- Private equity directors and managers
- Management consultants (McKinsey, Bain, BCG)
- Investment professionals
- Corporate strategy leaders
- Senior analysts and executives

## Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Utility
pnpm type-check   # Run TypeScript checks
```

### AWS Configuration

This project uses AWS CLI configuration instead of environment files. Ensure you have configured your AWS credentials:

```bash
# Configure AWS credentials and region
aws configure

# Verify configuration
aws sts get-caller-identity
```

#### Setting S3 Bucket Name

You can specify your S3 bucket name in your AWS config file:

```bash
# Edit your AWS config file
nano ~/.aws/config
```

Add the following to your profile section:

```ini
[default]
region = us-east-1
s3_bucket = zibly-frontend-prod

# Or for a specific profile
[profile production]
region = us-east-1
s3_bucket = zibly-frontend-prod
```

Alternatively, you can set the bucket name as an environment variable:

```bash
export AWS_S3_BUCKET_NAME=zibly-frontend-prod
```

The application will automatically use your AWS CLI configuration for S3 operations.

### Adding New Components

This project uses shadcn/ui. To add new components:

```bash
# Add a new shadcn/ui component
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

## Deployment

### Quick Deployment Checklist

Before deploying, ensure you have:

- ✅ **GitHub Repository**: Code pushed to `brunocqueiroz/zibly-frontend`
- ✅ **AWS CLI Configured**: `aws configure` completed locally  
- ✅ **S3 Bucket Ready**: `zibly-frontend-prod` in `us-east-1`
- ✅ **Domain Ready**: `zibly.ai` (if using custom domain)
- ⚠️ **AWS Credentials**: Need to add to Vercel environment variables
- ⚠️ **CORS Policy**: Need to update for production domain

### Vercel Deployment (Recommended)

The project is optimized for Vercel deployment with the following setup:

#### Step 1: Push to GitHub

```bash
# Ensure all changes are committed and pushed
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Deploy to Vercel

1. **Go to [vercel.com/new](https://vercel.com/new)**
2. **Import your GitHub repository:**
   - Click "Import Git Repository" 
   - Select your `zibly-frontend` repository
   - Click "Import"

3. **Configure Project Settings:**
   - **Project Name**: `zibly-frontend`
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install`

#### Step 3: Environment Variables

**IMPORTANT:** Add these environment variables in Vercel before deploying:

**Vercel Dashboard → Your Project → Settings → Environment Variables:**

```env
# AWS Configuration (Required)
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key  
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=zibly-frontend-prod

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**To get your AWS credentials:**

```bash
# Get your AWS Access Key ID
aws configure get aws_access_key_id

# Get your AWS Secret Access Key
aws configure get aws_secret_access_key

# Get your configured region
aws configure get region
```

#### Step 4: Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Add your custom domain: `zibly.ai`
   - Vercel will provide DNS configuration

2. **Update your domain DNS:**
   - Add the CNAME record Vercel provides
   - Or point your nameservers to Vercel

#### Step 5: S3 CORS Configuration

Update your S3 bucket CORS to allow your domain:

```bash
# Apply CORS policy to your bucket
aws s3api put-bucket-cors --bucket zibly-frontend-prod --cors-configuration file://cors-policy.json
```

The `cors-policy.json` file should contain:

```json
{
  "CORSRules": [
    {
      "AllowedOrigins": [
        "http://localhost:3000",
        "https://zibly.ai",
        "https://your-vercel-domain.vercel.app"
      ],
      "AllowedMethods": [
        "GET",
        "PUT", 
        "POST",
        "DELETE",
        "HEAD"
      ],
      "AllowedHeaders": [
        "*"
      ],
      "ExposeHeaders": [
        "ETag"
      ],
      "MaxAgeSeconds": 3000
    }
  ]
}
```

### Other Platforms

The project can be deployed to any platform supporting Next.js:

- **Netlify**
- **Railway** 
- **DigitalOcean App Platform**
- **AWS Amplify**

For these platforms, ensure you set the same environment variables as listed above.

## Authentication

The current implementation uses a simple in-memory authentication system for development/demo purposes. For production, consider integrating:

- **NextAuth.js** - Popular authentication library
- **Auth0** - Authentication as a service
- **Firebase Auth** - Google's authentication solution
- **Supabase Auth** - Open source alternative

## Performance

### Built-in Optimizations
- **Next.js 15** - Latest performance improvements
- **Image optimization** - Automatic image optimization
- **Font optimization** - Google Fonts optimization
- **Bundle analysis** - Automatic bundle optimization
- **Static generation** - Pre-rendered pages where possible

### Monitoring
- **Google Analytics** - User analytics (configure with your GA ID)
- **Vercel Analytics** - Performance monitoring (if using Vercel)

## Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**: `pnpm build && pnpm lint`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Code Style

- **TypeScript** - All new code should be TypeScript
- **ESLint** - Follow the existing linting rules
- **Prettier** - Code formatting (if configured)
- **Component conventions** - Follow existing patterns for consistency

---