# GreyZone PropertyOS - API Design Specification

## 🏗️ API Architecture Overview

The PropertyOS backend consists of 8 microservices, each responsible for a specific domain. All services expose RESTful APIs with optional GraphQL endpoints for complex data requirements.

**Base URL Structure**: `https://api.propertyos.com/v1/{service}`

**Authentication**: JWT Bearer tokens with service-to-service authentication via API keys.

---

## 🔐 Authentication Service (`auth-service`)

### Endpoints

#### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "landlord|manager|tenant|vendor",
  "organizationId": "org_123" // Optional for joining existing org
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "landlord",
      "organizationId": "org_456",
      "emailVerified": false
    },
    "tokens": {
      "accessToken": "jwt_token_here",
      "refreshToken": "refresh_token_here",
      "expiresIn": 3600
    }
  }
}
```

#### POST /auth/login
Authenticate user and return JWT tokens.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### POST /auth/refresh
Refresh expired access token using refresh token.

#### POST /auth/logout
Invalidate user session and tokens.

#### GET /auth/me
Get current user profile and permissions.

#### POST /auth/forgot-password
Initiate password reset flow.

#### POST /auth/reset-password
Complete password reset with token.

#### POST /auth/verify-email
Verify email address with verification token.

### Role-Based Access Control (RBAC)

**User Roles:**
- `super_admin`: Platform administration
- `org_admin`: Organization-wide management
- `landlord`: Property owner access
- `manager`: Property management operations
- `tenant`: Tenant portal access
- `vendor`: Maintenance contractor access
- `accountant`: Financial reporting access

**Permission System:**
- Each role has specific permissions (read, write, delete) per resource
- Organization-level isolation for multi-tenant access
- Property-level and unit-level access controls

---

## 🏢 Property Service (`property-service`)

### Endpoints

#### GET /properties
List properties with filtering and pagination.

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)
- `search`: Search term for property name/address
- `type`: Property type filter (residential, commercial, mixed)
- `status`: Status filter (active, inactive, pending)
- `organizationId`: Organization filter (admin only)

**Response:**
```json
{
  "success": true,
  "data": {
    "properties": [
      {
        "id": "prop_123",
        "name": "Sunset Apartments",
        "address": {
          "street": "123 Main St",
          "city": "Austin",
          "state": "TX",
          "zipCode": "78701",
          "country": "US"
        },
        "type": "residential",
        "subtype": "apartment",
        "totalUnits": 24,
        "occupiedUnits": 22,
        "vacancy": 8.33,
        "monthlyIncome": 48000,
        "images": ["https://s3.../image1.jpg"],
        "createdAt": "2024-01-15T10:00:00Z",
        "updatedAt": "2024-01-20T15:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 156,
      "totalPages": 8
    }
  }
}
```

#### POST /properties
Create a new property.

**Request Body:**
```json
{
  "name": "Sunset Apartments",
  "description": "Modern apartment complex in downtown Austin",
  "address": {
    "street": "123 Main St",
    "city": "Austin", 
    "state": "TX",
    "zipCode": "78701",
    "country": "US"
  },
  "type": "residential",
  "subtype": "apartment",
  "yearBuilt": 2018,
  "totalUnits": 24,
  "amenities": ["pool", "gym", "parking", "laundry"],
  "images": ["https://s3.../image1.jpg"]
}
```

#### GET /properties/:id
Get property details by ID.

#### PUT /properties/:id
Update property information.

#### DELETE /properties/:id
Delete property (soft delete with audit trail).

#### GET /properties/:id/units
List units within a property.

#### POST /properties/:id/units
Add a new unit to property.

#### GET /properties/:id/financial-summary
Get financial summary (income, expenses, NOI).

---

## 👥 Tenant Service (`tenant-service`)

### Endpoints

#### GET /tenants
List tenants with filtering and search.

**Query Parameters:**
- `propertyId`: Filter by property
- `unitId`: Filter by specific unit
- `status`: Tenant status (active, inactive, pending, evicted)
- `leaseStatus`: Lease status (active, expired, pending)

#### POST /tenants
Create new tenant profile.

**Request Body:**
```json
{
  "personalInfo": {
    "firstName": "Jane",
    "lastName": "Smith", 
    "email": "jane@example.com",
    "phone": "+1-555-0123",
    "dateOfBirth": "1990-05-15",
    "ssn": "encrypted_ssn_hash"
  },
  "address": {
    "current": {
      "street": "456 Oak Ave",
      "city": "Austin",
      "state": "TX", 
      "zipCode": "78702"
    }
  },
  "employment": {
    "employer": "Tech Corp",
    "position": "Software Engineer",
    "monthlyIncome": 8000,
    "employmentType": "full-time"
  },
  "emergencyContact": {
    "name": "John Smith",
    "relationship": "Brother",
    "phone": "+1-555-0124"
  }
}
```

#### GET /tenants/:id
Get tenant profile and details.

#### PUT /tenants/:id
Update tenant information.

#### GET /tenants/:id/leases
Get tenant's lease history.

#### POST /tenants/:id/screening
Initiate tenant screening process.

#### GET /tenants/:id/screening/:screeningId
Get screening results.

#### POST /tenants/:id/lease
Create new lease agreement.

#### GET /tenants/:id/payments
Get tenant's payment history.

#### POST /tenants/:id/documents
Upload tenant documents.

---

## 💳 Payment Service (`payment-service`)

### Endpoints

#### GET /payments
List payments with filtering.

**Query Parameters:**
- `tenantId`: Filter by tenant
- `propertyId`: Filter by property
- `status`: Payment status (pending, completed, failed, refunded)
- `type`: Payment type (rent, deposit, fee, refund)
- `dateFrom`: Start date filter
- `dateTo`: End date filter

#### POST /payments
Process a new payment.

**Request Body:**
```json
{
  "tenantId": "tenant_123",
  "unitId": "unit_456", 
  "amount": 1500.00,
  "currency": "USD",
  "type": "rent",
  "description": "Monthly rent - March 2024",
  "dueDate": "2024-03-01",
  "paymentMethod": {
    "type": "card|ach|bank_transfer",
    "token": "stripe_payment_method_token"
  },
  "metadata": {
    "leaseId": "lease_789",
    "period": "2024-03"
  }
}
```

#### GET /payments/:id
Get payment details.

#### POST /payments/:id/refund
Process payment refund.

#### GET /payment-methods
List saved payment methods for user.

#### POST /payment-methods
Add new payment method.

#### DELETE /payment-methods/:id
Remove payment method.

#### POST /payment-intents
Create Stripe payment intent for frontend.

#### POST /webhooks/stripe
Handle Stripe webhook events.

#### GET /escrow/:id
Get escrow account details (for security deposits).

#### POST /escrow/:id/release
Release funds from escrow.

---

## 🔧 Maintenance Service (`maintenance-service`)

### Endpoints

#### GET /work-orders
List work orders with filtering.

**Query Parameters:**
- `propertyId`: Filter by property
- `unitId`: Filter by unit
- `status`: Order status (open, in_progress, completed, cancelled)
- `priority`: Priority level (low, medium, high, urgent)
- `assignedTo`: Filter by assigned vendor
- `category`: Maintenance category (plumbing, electrical, hvac, etc.)

#### POST /work-orders
Create new maintenance request.

**Request Body:**
```json
{
  "title": "Leaky faucet in kitchen",
  "description": "Kitchen faucet has been dripping for 3 days. Water pressure also seems low.",
  "category": "plumbing",
  "priority": "medium",
  "propertyId": "prop_123",
  "unitId": "unit_456",
  "tenantId": "tenant_789",
  "requestedBy": "tenant",
  "images": [
    "https://s3.../leak-photo1.jpg",
    "https://s3.../leak-photo2.jpg"
  ],
  "preferredTimeSlots": [
    {
      "start": "2024-03-15T09:00:00Z",
      "end": "2024-03-15T12:00:00Z"
    }
  ]
}
```

#### GET /work-orders/:id
Get work order details.

#### PUT /work-orders/:id
Update work order status and details.

#### POST /work-orders/:id/assign
Assign work order to vendor.

#### POST /work-orders/:id/comments
Add comment to work order.

#### POST /work-orders/:id/complete
Mark work order as completed.

#### GET /work-orders/:id/timeline
Get work order activity timeline.

#### POST /work-orders/bulk-assign
Assign multiple work orders to vendors.

---

## 👷 Vendor Service (`vendor-service`)

### Endpoints

#### GET /vendors
List registered vendors.

**Query Parameters:**
- `specialty`: Filter by specialty (plumbing, electrical, hvac, etc.)
- `location`: Filter by service area
- `rating`: Minimum rating filter
- `availability`: Filter by availability status

#### POST /vendors
Register new vendor.

**Request Body:**
```json
{
  "businessInfo": {
    "name": "ABC Plumbing Services",
    "description": "Professional plumbing services with 15+ years experience",
    "licenseNumber": "PL-2024-0123",
    "insurancePolicy": "INS-789456",
    "ein": "12-3456789"
  },
  "contactInfo": {
    "email": "contact@abcplumbing.com",
    "phone": "+1-555-PLUMB1",
    "website": "https://abcplumbing.com"
  },
  "serviceAreas": [
    {
      "city": "Austin",
      "state": "TX",
      "radius": 25
    }
  ],
  "specialties": ["plumbing", "pipe_repair", "drain_cleaning"],
  "pricing": {
    "hourlyRate": 85.00,
    "emergencyRate": 125.00,
    "minimumCharge": 100.00
  },
  "availability": {
    "monday": {"start": "08:00", "end": "18:00"},
    "tuesday": {"start": "08:00", "end": "18:00"},
    "emergency24h": true
  }
}
```

#### GET /vendors/:id
Get vendor profile and details.

#### PUT /vendors/:id
Update vendor information.

#### GET /vendors/:id/reviews
Get vendor reviews and ratings.

#### POST /vendors/:id/reviews
Submit vendor review.

#### GET /vendors/:id/work-orders
Get work orders assigned to vendor.

#### POST /vendors/:id/availability
Update vendor availability.

#### GET /job-board
Get available jobs for vendors.

#### POST /job-board/:workOrderId/bid
Submit bid for work order.

---

## 💬 Communication Service (`communication-service`)

### Endpoints

#### GET /conversations
List user's conversations.

#### POST /conversations
Start new conversation.

**Request Body:**
```json
{
  "participants": [
    {
      "userId": "tenant_123",
      "role": "tenant"
    },
    {
      "userId": "manager_456", 
      "role": "manager"
    }
  ],
  "subject": "Maintenance Request Follow-up",
  "relatedId": "work_order_789",
  "relatedType": "work_order"
}
```

#### GET /conversations/:id
Get conversation details and messages.

#### POST /conversations/:id/messages
Send message in conversation.

#### PUT /conversations/:id/read
Mark conversation as read.

#### POST /notifications
Send notification to user(s).

**Request Body:**
```json
{
  "recipients": ["user_123", "user_456"],
  "type": "payment_reminder|maintenance_update|lease_renewal",
  "title": "Rent Payment Due Tomorrow",
  "message": "Your rent payment of $1,500 is due tomorrow, March 1st.",
  "channels": ["email", "sms", "push"],
  "data": {
    "paymentId": "payment_789",
    "amount": 1500.00,
    "dueDate": "2024-03-01"
  },
  "scheduledFor": "2024-02-29T10:00:00Z"
}
```

#### GET /notifications/:userId
Get user's notifications.

#### PUT /notifications/:id/read
Mark notification as read.

#### POST /broadcast
Send broadcast message to multiple users.

---

## 📊 Reporting Service (`reporting-service`)

### Endpoints

#### GET /reports/financial-summary
Get financial summary report.

**Query Parameters:**
- `propertyIds`: Comma-separated property IDs
- `period`: Reporting period (month, quarter, year)
- `startDate`: Report start date
- `endDate`: Report end date

**Response:**
```json
{
  "success": true,
  "data": {
    "period": {
      "startDate": "2024-01-01",
      "endDate": "2024-03-31"
    },
    "income": {
      "rentIncome": 145000.00,
      "otherIncome": 5000.00,
      "totalIncome": 150000.00
    },
    "expenses": {
      "maintenance": 12000.00,
      "utilities": 8000.00,
      "insurance": 4500.00,
      "taxes": 6000.00,
      "management": 9000.00,
      "totalExpenses": 39500.00
    },
    "netOperatingIncome": 110500.00,
    "occupancyRate": 92.5,
    "properties": [
      {
        "propertyId": "prop_123",
        "name": "Sunset Apartments",
        "income": 75000.00,
        "expenses": 20000.00,
        "noi": 55000.00
      }
    ]
  }
}
```

#### GET /reports/rent-roll
Get current rent roll report.

#### GET /reports/occupancy
Get occupancy analytics.

#### GET /reports/maintenance-summary
Get maintenance activities summary.

#### GET /reports/tenant-aging
Get tenant payment aging report.

#### POST /reports/export
Generate and export report to PDF/Excel.

#### GET /analytics/kpis
Get key performance indicators.

#### GET /analytics/trends
Get trend analysis data for charts.

---

## 🔄 Inter-Service Communication

### Service-to-Service APIs

#### Internal Authentication
- Services authenticate using API keys
- JWT tokens validated against auth-service
- Rate limiting applied per service

#### Event Publishing
```json
{
  "eventType": "tenant.lease.signed",
  "timestamp": "2024-03-01T10:00:00Z",
  "organizationId": "org_123",
  "data": {
    "tenantId": "tenant_456",
    "leaseId": "lease_789",
    "unitId": "unit_012",
    "propertyId": "prop_345"
  }
}
```

### Webhook System

#### Outbound Webhooks
External systems can subscribe to events:

- `payment.completed`
- `lease.signed`
- `maintenance.completed`
- `tenant.screened`

#### Webhook Payload Example
```json
{
  "id": "webhook_123",
  "event": "payment.completed",
  "timestamp": "2024-03-01T10:00:00Z",
  "data": {
    "paymentId": "payment_456",
    "tenantId": "tenant_789",
    "amount": 1500.00,
    "status": "completed"
  }
}
```

---

## 🚨 Error Handling

### Standard Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data provided",
    "details": [
      {
        "field": "email",
        "message": "Email format is invalid"
      }
    ],
    "requestId": "req_123456789",
    "timestamp": "2024-03-01T10:00:00Z"
  }
}
```

### Common Error Codes
- `VALIDATION_ERROR`: Input validation failed
- `AUTHENTICATION_ERROR`: Invalid or missing authentication
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `RESOURCE_NOT_FOUND`: Requested resource doesn't exist
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error occurred

---

## 🔒 Security Considerations

### API Security
- All endpoints require HTTPS
- JWT tokens expire in 1 hour
- Refresh tokens valid for 30 days
- Rate limiting: 1000 requests/hour per user
- CORS properly configured for frontend domains

### Data Validation
- All inputs validated using JSON schemas
- SQL injection prevention via parameterized queries
- XSS prevention through input sanitization
- File upload restrictions (type, size, scanning)

### Audit Logging
- All API calls logged with request ID
- Sensitive operations logged in audit trail
- User actions tracked for compliance
- Data changes include before/after snapshots

This API design provides a comprehensive foundation for the PropertyOS backend, enabling the frontend team to build rich user interfaces while maintaining scalability, security, and maintainability.