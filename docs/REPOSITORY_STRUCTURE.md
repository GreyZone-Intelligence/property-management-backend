# GreyZone PropertyOS - Repository Structure & Development Workflow

## 🏗️ Repository Architecture Overview

PropertyOS follows a **multi-repository architecture** with separate frontend and backend codebases to enable independent development, deployment, and scaling. This approach supports different technology stacks, team structures, and deployment strategies.

### Repository Organization
```
GreyZone PropertyOS Ecosystem
├── 📱 property-management-os/          (Frontend Repository)
│   ├── Next.js 14 + React + TypeScript
│   ├── Tailwind CSS + shadcn/ui
│   └── Frontend-specific tooling
│
└── 🔧 property-management-api/         (Backend Repository)
    ├── 8 Microservices (Node.js + NestJS)
    ├── PostgreSQL + MongoDB + Redis
    └── Backend infrastructure & deployment
```

---

## 📱 Frontend Repository: `property-management-os`

### Repository Structure
```
property-management-os/
├── 📝 Documentation
│   ├── README.md
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   └── docs/
│       ├── BUSINESS_STRATEGY.md
│       ├── TECHNICAL_REQUIREMENTS.md
│       ├── API_DESIGN.md
│       ├── DESIGN_SYSTEM.md
│       └── INTEGRATIONS.md
│
├── 🏗️ Core Application
│   ├── app/                          # Next.js 14 App Router
│   │   ├── (auth)/                   # Auth routes group
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   └── forgot-password/
│   │   ├── (dashboard)/              # Dashboard routes group
│   │   │   ├── dashboard/
│   │   │   ├── properties/
│   │   │   ├── tenants/
│   │   │   ├── maintenance/
│   │   │   ├── vendors/
│   │   │   ├── payments/
│   │   │   └── reports/
│   │   ├── api/                      # API route handlers
│   │   │   ├── auth/
│   │   │   ├── properties/
│   │   │   ├── payments/
│   │   │   └── webhooks/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/                   # Reusable UI Components
│   │   ├── ui/                       # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── layout/                   # Layout components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── property/                 # Property-specific components
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── PropertyForm.tsx
│   │   │   ├── PropertyDashboard.tsx
│   │   │   └── PropertyGallery.tsx
│   │   ├── tenant/                   # Tenant management components
│   │   │   ├── TenantProfile.tsx
│   │   │   ├── TenantForm.tsx
│   │   │   └── TenantList.tsx
│   │   ├── maintenance/              # Maintenance components
│   │   │   ├── WorkOrderCard.tsx
│   │   │   ├── MaintenanceRequest.tsx
│   │   │   └── VendorBoard.tsx
│   │   ├── vendor/                   # Vendor marketplace components
│   │   │   ├── VendorDirectory.tsx
│   │   │   ├── JobBoard.tsx
│   │   │   └── VendorProfile.tsx
│   │   └── shared/                   # Shared utility components
│   │       ├── LoadingSpinner.tsx
│   │       ├── ErrorBoundary.tsx
│   │       ├── Modal.tsx
│   │       └── DataTable.tsx
│   │
│   ├── lib/                          # Utility libraries
│   │   ├── api-client.ts            # Backend API client
│   │   ├── auth.ts                  # Authentication utilities
│   │   ├── utils.ts                 # General utilities
│   │   ├── validation.ts            # Form validation schemas
│   │   └── constants.ts             # Application constants
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useProperties.ts
│   │   ├── useTenants.ts
│   │   └── useWebSocket.ts
│   │
│   ├── store/                        # State management
│   │   ├── authStore.ts             # Authentication state
│   │   ├── propertyStore.ts         # Property data state
│   │   ├── notificationStore.ts     # UI notifications
│   │   └── index.ts                 # Store configuration
│   │
│   └── types/                        # TypeScript definitions
│       ├── api.ts                   # API response types
│       ├── property.ts              # Property-related types
│       ├── tenant.ts                # Tenant-related types
│       ├── maintenance.ts           # Maintenance types
│       └── vendor.ts                # Vendor types
│
├── 🧪 Testing
│   ├── __tests__/                   # Unit tests
│   ├── e2e/                         # End-to-end tests
│   └── __mocks__/                   # Test mocks
│
├── 📦 Configuration
│   ├── next.config.js               # Next.js configuration
│   ├── tailwind.config.ts           # Tailwind CSS config
│   ├── tsconfig.json                # TypeScript config
│   ├── eslint.config.js             # ESLint configuration
│   ├── prettier.config.js           # Prettier configuration
│   └── components.json              # shadcn/ui configuration
│
├── 🚀 Deployment
│   ├── Dockerfile                   # Docker configuration
│   ├── docker-compose.yml           # Local development
│   ├── .github/                     # GitHub Actions workflows
│   │   └── workflows/
│   │       ├── ci.yml
│   │       ├── cd.yml
│   │       └── pr-checks.yml
│   └── k8s/                         # Kubernetes manifests
│       ├── deployment.yaml
│       ├── service.yaml
│       └── ingress.yaml
│
└── 📋 Project Files
    ├── package.json                 # Dependencies and scripts
    ├── package-lock.json            # Dependency lock file
    ├── .env.example                 # Environment variables template
    ├── .gitignore                   # Git ignore rules
    └── tasks/
        └── todo.md                  # Implementation tasks
```

### Frontend Technology Stack
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "typescript": "^5.0.0",
    "@tailwindcss/forms": "^0.5.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "framer-motion": "^10.16.0",
    "react-hook-form": "^7.47.0",
    "zod": "^3.22.0",
    "zustand": "^4.4.0",
    "@tanstack/react-query": "^4.35.0",
    "axios": "^1.5.0",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.288.0",
    "recharts": "^2.8.0"
  },
  "devDependencies": {
    "@types/node": "^20.8.0",
    "@types/react": "^18.2.0",
    "eslint": "^8.51.0",
    "prettier": "^3.0.0",
    "tailwindcss": "^3.3.0",
    "@playwright/test": "^1.39.0",
    "jest": "^29.7.0"
  }
}
```

### Development Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:e2e": "playwright test",
    "format": "prettier --write ."
  }
}
```

---

## 🔧 Backend Repository: `property-management-api`

### Repository Structure
```
property-management-api/
├── 📝 Documentation
│   ├── README.md
│   ├── API_DOCUMENTATION.md
│   ├── DEPLOYMENT.md
│   └── docs/
│       ├── MICROSERVICES_ARCHITECTURE.md
│       ├── DATABASE_DESIGN.md
│       └── SECURITY.md
│
├── 🏗️ Core Services
│   ├── services/                    # Microservices
│   │   ├── auth-service/            # Authentication & Authorization
│   │   │   ├── src/
│   │   │   │   ├── modules/
│   │   │   │   │   ├── auth/
│   │   │   │   │   ├── users/
│   │   │   │   │   └── organizations/
│   │   │   │   ├── common/          # Shared utilities
│   │   │   │   ├── config/          # Service configuration
│   │   │   │   └── main.ts          # Service entry point
│   │   │   ├── Dockerfile
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   │
│   │   ├── property-service/        # Property Management
│   │   │   ├── src/
│   │   │   │   ├── modules/
│   │   │   │   │   ├── properties/
│   │   │   │   │   ├── units/
│   │   │   │   │   └── leases/
│   │   │   │   └── ...
│   │   │   └── ...
│   │   │
│   │   ├── tenant-service/          # Tenant Management
│   │   ├── payment-service/         # Payment Processing
│   │   ├── maintenance-service/     # Work Orders & Maintenance
│   │   ├── vendor-service/          # Vendor Marketplace
│   │   ├── communication-service/   # Messaging & Notifications
│   │   └── reporting-service/       # Analytics & Reporting
│   │
│   ├── shared/                      # Shared Libraries
│   │   ├── database/                # Database utilities
│   │   │   ├── postgres/
│   │   │   ├── mongodb/
│   │   │   └── redis/
│   │   ├── auth/                    # Authentication middleware
│   │   ├── validation/              # Input validation
│   │   ├── logging/                 # Logging utilities
│   │   ├── events/                  # Event system
│   │   └── types/                   # Shared TypeScript types
│   │
│   ├── gateway/                     # API Gateway
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── middleware/
│   │   │   └── main.ts
│   │   └── ...
│   │
│   └── ml-services/                 # AI/ML Services
│       ├── classification-service/  # Request classification
│       ├── prediction-service/      # Maintenance predictions
│       └── recommendation-service/  # AI recommendations
│
├── 🗄️ Database
│   ├── migrations/                  # Database migrations
│   │   ├── postgres/
│   │   └── mongodb/
│   ├── seeds/                       # Test data
│   └── schemas/                     # Database schemas
│       ├── prisma/                  # Prisma schema
│       └── mongoose/                # MongoDB schemas
│
├── 🐳 Infrastructure
│   ├── docker/                      # Docker configurations
│   │   ├── development/
│   │   └── production/
│   ├── k8s/                         # Kubernetes manifests
│   │   ├── services/
│   │   ├── deployments/
│   │   ├── configmaps/
│   │   └── secrets/
│   ├── terraform/                   # Infrastructure as Code
│   └── monitoring/                  # Monitoring configurations
│       ├── prometheus/
│       └── grafana/
│
├── 🧪 Testing
│   ├── unit/                        # Unit tests
│   ├── integration/                 # Integration tests
│   └── load/                        # Load testing
│
└── 📋 Project Files
    ├── docker-compose.yml           # Local development
    ├── package.json                 # Workspace configuration
    ├── nx.json                      # Nx monorepo config
    └── .env.example                 # Environment template
```

### Backend Technology Stack
```json
{
  "dependencies": {
    "@nestjs/core": "^10.2.0",
    "@nestjs/common": "^10.2.0",
    "@nestjs/platform-express": "^10.2.0",
    "@nestjs/jwt": "^10.1.0",
    "@nestjs/passport": "^10.0.0",
    "@nestjs/swagger": "^7.1.0",
    "prisma": "^5.5.0",
    "@prisma/client": "^5.5.0",
    "mongoose": "^7.6.0",
    "redis": "^4.6.0",
    "stripe": "^13.11.0",
    "twilio": "^4.17.0",
    "@sendgrid/mail": "^7.7.0",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "@types/node": "^20.8.0",
    "@nestjs/testing": "^10.2.0",
    "jest": "^29.7.0",
    "supertest": "^6.3.0"
  }
}
```

---

## 🔄 Development Workflow

### 1. Branch Strategy

#### Frontend Repository (`property-management-os`)
```
main (production)
├── develop (staging)
│   ├── feature/auth-improvements
│   ├── feature/property-dashboard
│   └── feature/vendor-marketplace-ui
└── hotfix/payment-bug-fix
```

#### Backend Repository (`property-management-api`)
```
main (production)
├── develop (staging)
│   ├── feature/vendor-service-enhancement
│   ├── feature/payment-integration
│   └── feature/ai-classification
└── hotfix/security-patch
```

### 2. API Contract Management

#### OpenAPI Specification Sharing
```javascript
// Shared API contract (maintained in backend repo)
// Generated client code for frontend consumption

// Backend: Generate OpenAPI spec
npm run generate:api-spec

// Frontend: Generate TypeScript client
npm run generate:api-client
```

#### Type Synchronization
```typescript
// Shared types package (published from backend)
// Frontend imports API types from shared package

// backend/shared/types/api.ts
export interface PropertyResponse {
  id: string;
  name: string;
  address: Address;
  units: Unit[];
  createdAt: string;
  updatedAt: string;
}

// frontend/lib/api-client.ts
import { PropertyResponse } from '@propertyos/api-types';
```

### 3. Environment Management

#### Frontend Environment Variables
```bash
# .env.local (frontend)
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_APP_ENV=development
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

#### Backend Environment Variables
```bash
# .env (backend)
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://user:pass@localhost:5432/propertyos
MONGODB_URL=mongodb://localhost:27017/propertyos
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=sk_test_...
```

### 4. Development Startup

#### Local Development Setup
```bash
# Terminal 1: Start backend services
cd property-management-api
docker-compose up -d postgres mongodb redis
npm run dev:services

# Terminal 2: Start frontend
cd property-management-os
npm run dev
```

#### Full Stack Development Script
```json
{
  "scripts": {
    "dev:full": "concurrently \"npm run dev:api\" \"npm run dev:web\"",
    "dev:api": "cd ../property-management-api && npm run dev",
    "dev:web": "npm run dev"
  }
}
```

---

## 🔄 Deployment & CI/CD Coordination

### 1. Deployment Pipeline

#### Frontend CI/CD (GitHub Actions)
```yaml
# .github/workflows/frontend-cd.yml
name: Frontend CD
on:
  push:
    branches: [main, develop]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build application
        run: npm run build
        env:
          NEXT_PUBLIC_API_BASE_URL: ${{ secrets.API_BASE_URL }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

#### Backend CI/CD (GitHub Actions)
```yaml
# .github/workflows/backend-cd.yml
name: Backend CD
on:
  push:
    branches: [main, develop]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Build Docker images
        run: docker build -t propertyos-api:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          docker tag propertyos-api:${{ github.sha }} $REGISTRY/propertyos-api:${{ github.sha }}
          docker push $REGISTRY/propertyos-api:${{ github.sha }}
      
      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/api-deployment api=$REGISTRY/propertyos-api:${{ github.sha }}
```

### 2. Environment Coordination

#### Staging Environment
```bash
# Frontend staging
https://staging.propertyos.com
→ Points to staging API: https://api-staging.propertyos.com

# Backend staging
https://api-staging.propertyos.com
→ Connected to staging database instances
```

#### Production Environment
```bash
# Frontend production
https://app.propertyos.com
→ Points to production API: https://api.propertyos.com

# Backend production
https://api.propertyos.com
→ Connected to production database cluster
```

---

## 📊 Monitoring & Observability

### Cross-Repository Monitoring

#### Error Tracking
```javascript
// Shared Sentry configuration
const sentryConfig = {
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  release: process.env.GIT_SHA,
  beforeSend: (event) => {
    // Filter sensitive data
    return event;
  }
};

// Frontend tracking
Sentry.init(sentryConfig);

// Backend tracking
Sentry.init(sentryConfig);
```

#### Performance Monitoring
```javascript
// Frontend: Web Vitals tracking
export function reportWebVitals(metric) {
  analytics.track('Web Vital', {
    name: metric.name,
    value: metric.value,
    id: metric.id
  });
}

// Backend: API performance tracking
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('API Request', {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration
    });
  });
  next();
});
```

---

## 🔧 Development Tools & Standards

### Code Quality Standards

#### Frontend Linting & Formatting
```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

#### Backend Linting & Formatting
```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

### Testing Coordination

#### API Contract Testing
```javascript
// Frontend: Mock API responses based on OpenAPI spec
import { createMockServer } from 'msw';
import apiSpec from '../api-spec.json';

// Backend: Contract testing with Pact
import { Verifier } from '@pact-foundation/pact';
```

---

This repository structure and workflow ensures that frontend and backend teams can work independently while maintaining strong coordination through API contracts, shared types, and integrated deployment pipelines.