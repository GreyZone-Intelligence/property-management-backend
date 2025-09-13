# PropertyOS - Backend API

## 🏗️ Overview

This is the backend API for GreyZone PropertyOS - a microservices architecture built with NestJS, providing enterprise-grade property management services.

## 🚀 Technology Stack

- **Framework**: NestJS with Express
- **Language**: TypeScript 5.0+
- **Database**: PostgreSQL + MongoDB + Redis
- **ORM**: Prisma (PostgreSQL) + Mongoose (MongoDB)
- **Authentication**: JWT + Passport
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest + Supertest
- **Containerization**: Docker + Docker Compose

## 🏗️ Microservices Architecture

### Core Services

1. **auth-service** (Port: 3001)
   - JWT authentication & authorization
   - User management
   - Role-based access control

2. **property-service** (Port: 3002)
   - Property CRUD operations
   - Unit management
   - Lease management

3. **tenant-service** (Port: 3003)
   - Tenant profiles & onboarding
   - Tenant screening
   - Communication preferences

4. **payment-service** (Port: 3004)
   - Stripe integration
   - Payment processing
   - Escrow management

5. **maintenance-service** (Port: 3005)
   - Work order management
   - Maintenance requests
   - Job assignments

6. **vendor-service** (Port: 3006)
   - Vendor directory
   - Marketplace functionality
   - Rating & reviews

7. **communication-service** (Port: 3007)
   - Real-time messaging
   - Email/SMS notifications
   - Push notifications

8. **reporting-service** (Port: 3008)
   - Financial reports
   - Analytics & insights
   - Data export

### Supporting Services

- **gateway-service** (Port: 3000) - API Gateway
- **ml-service** (Port: 3009) - AI/ML predictions

## 📁 Project Structure

```
property-management-backend/
├── services/                    # Microservices
│   ├── auth-service/
│   ├── property-service/
│   ├── tenant-service/
│   ├── payment-service/
│   ├── maintenance-service/
│   ├── vendor-service/
│   ├── communication-service/
│   └── reporting-service/
├── shared/                      # Shared libraries
│   ├── database/
│   ├── auth/
│   └── utils/
├── gateway/                     # API Gateway
├── docker-compose.yml          # Development environment
└── package.json               # Workspace configuration
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ LTS
- Docker & Docker Compose
- PostgreSQL 15+
- MongoDB 6+
- Redis 7+

### Quick Start
```bash
# Start infrastructure
docker-compose up -d postgres mongodb redis

# Install dependencies
npm install

# Run database migrations
npm run db:migrate

# Start all services
npm run dev

# Or start individual service
npm run dev:auth
```

## 🗄️ Database Schema

### PostgreSQL (Primary Data)
- Users & Organizations
- Properties & Units
- Leases & Tenants
- Payments & Transactions
- Work Orders

### MongoDB (Documents & Logs)
- Chat messages
- Document storage metadata
- Activity logs
- Notifications

### Redis (Cache & Sessions)
- User sessions
- API rate limiting
- Real-time data
- Message queues

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- API rate limiting
- Input validation & sanitization
- SQL injection prevention
- CORS configuration
- Helmet security headers

## 📡 API Documentation

Interactive API documentation available at:
- Development: `http://localhost:3000/docs`
- Production: `https://api.propertyos.com/docs`

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:cov

# Run e2e tests
npm run test:e2e

# Run specific service tests
npm run test:auth
```

## 🚀 Deployment

### Docker Production
```bash
# Build all services
docker-compose -f docker-compose.prod.yml build

# Deploy with orchestration
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes
```bash
# Apply configurations
kubectl apply -f k8s/

# Check service status
kubectl get pods -n propertyos
```

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:
```bash
# Database URLs
DATABASE_URL=postgresql://user:pass@localhost:5432/propertyos
MONGODB_URL=mongodb://localhost:27017/propertyos
REDIS_URL=redis://localhost:6379

# JWT Configuration
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=1h

# External APIs
STRIPE_SECRET_KEY=sk_test_...
TWILIO_ACCOUNT_SID=...
SENDGRID_API_KEY=...
```

## 📊 Monitoring

- Health checks: `/health`
- Metrics: Prometheus compatible
- Logging: Structured JSON logs
- Tracing: OpenTelemetry ready

## 📄 License

Proprietary software owned by Caulcrick Investments Group