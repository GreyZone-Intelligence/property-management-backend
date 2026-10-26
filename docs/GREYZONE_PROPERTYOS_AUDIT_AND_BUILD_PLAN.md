# PropertyOS — Build Plan

**Date:** 2026-10-26
**Repos:** `GreyZone-Intelligence/property-management-backend` (one commit), `GreyZone-Intelligence/property-management-os` (empty)

---

## 1. Where things actually stand

The documentation is far ahead of the code. That is not a criticism — the docs are a genuinely useful feature inventory and positioning thesis. But they should not be read as a plan, because several of their numbers and phases contradict each other, and `IMPLEMENTATION_STATUS.md` overstates what is built.

**What exists and works:**

- A Prisma schema with 11 models (Organization, User, Property, Unit, Tenant, Lease, Vendor, MaintenanceRequest, Payment, Message, ActivityLog) and a seed script.
- A NestJS gateway with JWT issuance, a roles guard, Swagger setup, helmet/compression/CORS, and a health endpoint.
- One microservice: `property-service` — properties CRUD, units, and an analytics endpoint computing occupancy and monthly revenue.

**What is claimed but is not true today:**

| Claim | Reality |
|---|---|
| "Complete authentication system" | Four demo users hardcoded in an in-memory array in `gateway/src/auth/auth.service.ts`. `register()` persists nothing. The gateway never touches Prisma. |
| "Docker containerization ✅" | `docker-compose.yml` builds `./gateway/Dockerfile` and `./services/property-service/Dockerfile`. Neither file exists. Only the three database containers will start. |
| 8 microservices | 1 exists. `npm run dev` references seven directories that aren't there, so it fails immediately. |
| `auth-service` on port 3001 | Doesn't exist; auth lives inside the gateway. README and IMPLEMENTATION_STATUS disagree about which is the architecture. |
| Row-level-security multi-tenancy | A plain `organizationId` column. In `properties.service.ts` it's an *optional* query filter — omit it and you get every organization's properties. |
| Versioned migrations | No `migrations/` directory. Quick-start uses `db:push`. |

**Other defects found:**

- Proxy routes are all `@All('properties/*')`-style, so `/api/properties` (no trailing segment) never matches — collection endpoints are unreachable through the gateway.
- The generated Prisma client is committed, including `libquery_engine-darwin-arm64.dylib.node`. That's a macOS binary and most of the repo's 20 MB. A Linux or CI checkout needs `prisma generate` before anything runs.
- `docker-compose.yml` hardcodes `JWT_SECRET` and the Postgres password in plaintext.
- No tests, no CI, no `.github/`.
- Stray `README copy.md` at the repo root.
- Schema gaps vs. the documented product: nothing for documents/files, applications or screening results, inspections, expenses, listings, notifications, vendor bids, escrow, review sub-scores, IoT, or equipment/warranty. `MaintenanceRequest.tenantId` and `Payment.tenantId` point at `User` rather than `Tenant`. `Message.receiverId` has no relation behind it.

**Naming drift:** the docs call the backend repo `property-management-api`; it's actually `property-management-backend`. The docs also place the shared `docs/` folder inside the frontend repo, but it physically lives in the backend.

---

## 2. Decisions to make before writing more code

These are genuine forks the docs leave open. My recommendation is given for each, but each is yours to make.

### 2.1 Collapse the microservices into a modular monolith — *recommended*

This is the highest-leverage decision available. Eight services, a gateway, three databases, Kubernetes, Istio, Kafka, Elasticsearch, and a service mesh is an architecture for a company with several engineering teams. It is a tax on a product with one commit, and the tax is paid every day: eight deploy pipelines, eight dependency trees, distributed transactions across service boundaries for things that are one database write, and no ability to use a foreign key.

Concretely: keep NestJS, keep the gateway as the HTTP entry point, and make each "service" a NestJS *module* inside one application that shares the Prisma client. Module boundaries give you the separation the docs want. If a module ever genuinely needs independent scaling, extracting it later is mechanical — far easier than operating eight services from the start.

The one thing I'd keep separate is ML/AI work, because it's Python and has a different deploy cadence.

### 2.2 Pick one identity story

The docs specify three overlapping systems: a home-rolled `auth-service` (API_DESIGN), Auth0 for authn/MFA/SSO (INTEGRATIONS), and NextAuth on the frontend (`NEXTAUTH_SECRET` in the env block). Pick one.

Recommendation: finish what's started — JWT issued by the gateway, backed by the `User` table. Move to RS256 with a rotating key pair rather than the current shared secret. Defer Auth0 until an enterprise customer actually asks for SAML SSO; migrating later is a contained job.

### 2.3 Drop MongoDB, Elasticsearch, Kafka, and GraphQL for now

All four are in the stack doc; none is used. Postgres 15 handles chat threads (JSONB), full-text search (`tsvector` + `pg_trgm`), and a job queue (via Redis + BullMQ, which you already have). Add specialized infrastructure when a measured problem demands it. Every one of these is a service to secure, back up, monitor, and pay for.

GraphQL is listed as "optional/hybrid" with no schema and no tooling in any dependency list. Cut it.

### 2.4 Do not build escrow or hold security deposits yet — *blocking*

The marketplace doc describes per-work-order escrow in "FDIC-insured partner bank accounts," holding 100% of estimated cost for jobs under $500, and condition-based release of security deposits.

Holding other people's money implicates state money-transmitter licensing, and security deposits specifically are governed by state-by-state trust-account rules. Stripe Connect does not resolve this on its own — Connect's own terms constrain how long funds may be held and for what purpose. Neither doc mentions either issue.

I'm not a lawyer and this needs real counsel before any of it is built. In the meantime the marketplace works fine with direct vendor payouts on completion approval, which is what the MVP phase actually calls for anyway.

### 2.5 Fair housing review is missing entirely — *blocking for screening*

Across all seven docs, fair housing is never mentioned. The product does tenant screening, AI late-payment risk scoring, and ML-based matching. Automated tenant-selection scoring carries disparate-impact exposure under the Fair Housing Act, and HUD has issued specific guidance on algorithmic screening. There is also live regulatory attention on tenant-screening algorithms generally.

Practical consequence for the build: screening should return the underlying report to a human who makes the decision, and the system should log the reason for every denial. Do not ship a model that outputs an accept/reject. This needs counsel too.

A related issue: "sell aggregated anonymized data to REITs/brokers/lenders" as a revenue stream sits badly beside the GDPR/CCPA consent posture claimed elsewhere, and there's no consent plumbing anywhere in the spec.

### 2.6 Rebuild the revenue model before using any of its numbers

The business doc's figures don't reconcile. The bottoms-up model gives $4.40 per unit per month. Year 1 is 100 properties at $600K ARR, or ~$500 per property per month. Year 5 is 25,000 properties at $50M. The same page says 100,000 units yields $5.2M/yr while the table says 25,000 properties yields $50M+. The likely root cause is that the denominator silently switches between "units" and "properties."

Separately: at the stated list prices (Starter $49 for ≤10 units = $4.90/unit; Growth $199 for ≤100 = $1.99/unit), PropertyOS is at or *above* AppFolio's quoted $1.25–3/unit, while the competitor table claims a pricing advantage. And the marketplace commission is given as 5–15%, 10%, and 8.5% in three different places.

None of this blocks engineering, but none of it should be quoted to an investor or used for a pricing page as written.

### 2.7 Choose where webhooks land

The frontend tree includes `app/api/webhooks/` while the backend owns `/webhooks/stripe`. A Vercel-hosted frontend receiving Stripe webhooks is a different trust boundary than the backend. Recommendation: all webhooks terminate at the backend, with signature verification and an idempotency table.

---

## 3. Phased build plan

Each phase ends in something demonstrable. Phases 0–2 are the critical path; nothing else should start until the foundation is real.

### Phase 0 — Make the repo run (days, not weeks)

The goal is that a fresh `git clone` on Linux gets to a working API.

1. Remove the generated Prisma client from version control; add `shared/database/generated/` to `.gitignore`; add a `postinstall` running `prisma generate`.
2. Write the two missing Dockerfiles (multi-stage, non-root user).
3. Fix the root `package.json` `dev` script so it only references directories that exist.
4. Create an initial migration (`prisma migrate dev`) so there's a deployable history instead of `db:push`.
5. Pull secrets out of `docker-compose.yml` into a gitignored `.env`.
6. Fix the gateway proxy route patterns so collection endpoints resolve.
7. Delete `README copy.md`; reconcile README and IMPLEMENTATION_STATUS so they describe the same architecture.
8. Add GitHub Actions: install, lint, typecheck, build, test. Even with one test, the pipeline should exist from here on.

**Done when:** `docker compose up` brings up the stack and `GET /api/properties` returns seeded data through the gateway.

### Phase 1 — Real auth and real tenant isolation

This is a security phase, and it should land before any feature work.

1. Replace the in-memory user array with Prisma queries against `User`.
2. Implement the documented auth surface properly: register, login, refresh, logout, forgot/reset password, verify email, `GET /auth/me`. Move to RS256.
3. **Enforce organization scoping in a single place** — a Prisma middleware or client extension that injects `organizationId` from the authenticated principal into every query, rather than trusting each service to filter. The current optional-filter pattern is a cross-tenant data leak and will be replicated into every new module if it isn't fixed structurally now.
4. Add the role hierarchy the docs specify (super_admin, org_admin, landlord/manager, tenant, vendor, accountant) with property- and unit-level scoping for tenants and vendors.
5. Write the first real tests: auth flows and tenant-isolation tests that assert org A cannot read org B's data.

**Done when:** a tenant user authenticating against the real database can read exactly their own unit and nothing else, proven by a test.

### Phase 2 — Core domain modules

Build these as modules in the consolidated app, in this order. Each needs schema work, because the current schema covers maybe 30% of what's required.

1. **Tenants & leases** — tenant profiles, lease lifecycle, documents. Add `Document` and `Application` models. Resolve the `tenantId → User` vs `tenantId → Tenant` inconsistency.
2. **Maintenance / work orders** — the full lifecycle (open → assigned → in progress → complete), comments, photo attachments, timeline. Add `WorkOrderComment` and `WorkOrderEvent`.
3. **Payments** — Stripe integration, payment methods, rent charges, late-fee automation, webhook handling with idempotency. Add `Invoice`, `Charge`, and `WebhookEvent` models. This is the module most worth getting right; money bugs are expensive bugs.
4. **Communication** — conversations with polymorphic `relatedType`/`relatedId`, messages, notifications across email/SMS/push. Fix the missing `Message` receiver relation.
5. **Reporting** — rent roll, occupancy, financial summary, tenant aging. Read models over the above.

A note on pagination: the docs specify offset `page`/`limit` everywhere. For payment history, activity logs, and messages — which grow unbounded — use cursor pagination. Offset pagination degrades badly and skips rows when data is inserted mid-scan.

### Phase 3 — The frontend (`property-management-os`)

The repo is empty and the docs specify it precisely: Next.js 14 App Router, TypeScript strict, Tailwind, shadcn/ui, Zustand, TanStack Query, React Hook Form + Zod, Playwright.

1. Scaffold with the `(auth)` and `(dashboard)` route groups from REPOSITORY_STRUCTURE.
2. Translate the DESIGN_SYSTEM tokens into `tailwind.config.ts` and shadcn's CSS-variable theme. **Don't** implement the doc's hand-written `.btn-primary` / `.card` classes alongside shadcn — that produces two parallel styling systems. Also reconcile dark mode: the doc uses `[data-theme="dark"]` while shadcn/Tailwind use a `.dark` class, and the doc's dark palette only overrides about six tokens, with no text or brand overrides.
3. Generate a typed API client from the backend's OpenAPI output rather than hand-writing fetch calls.
4. Build in order: auth → dashboard → properties → tenants → maintenance → payments → reports.

### Phase 4 — Vendor marketplace MVP

This is the stated differentiator, and the marketplace doc's months 1–3 scope is the only internally coherent MVP definition in the whole doc set: vendor registration and verification, a job board with **manual** assignment, in-app messaging, basic payments.

Build exactly that. The `Vendor` model currently has a single `rating` column and captures roughly 5% of the specified vendor payload — licensing, insurance, service areas, specialties, pricing, and availability all need modeling first. Defer AI matching, bidding, escrow, and the badge system to a later phase; the weighted match score (specialty 40 / proximity 25 / rating 20 / availability 10 / price 5) is implementable as plain arithmetic long before it needs ML.

### Phase 5 — The agent layer

The project brief calls for agents, and this is where they belong — on top of a stable API, not before it. Each of these should be a tool-using agent over the Phase 2 modules:

- **Maintenance triage** — classify an incoming request from text and photos into category, urgency, and estimated hours; draft the work order; suggest vendors. Highest-value agent, because it's high-volume and currently manual.
- **Delinquency / collections** — identify at-risk and late tenants, draft the appropriate escalating notice, respect per-state notice requirements, and hand off rather than act on anything legal.
- **Owner reporting** — assemble a monthly branded statement per owner from the reporting module.
- **Lease abstraction** — extract key terms, dates, and obligations from an uploaded lease PDF into structured fields.
- **Vendor matching** — the weighted-score matcher, with the explanation surfaced to the manager.

Design constraint for all of them: agents draft and recommend; humans approve anything that moves money, denies an applicant, or sends a legal notice. That's good product design and it's also what keeps the screening and fair-housing exposure manageable.

---

## 4. Suggested immediate next step

Phase 0, item by item — it's a day or two of work and it converts the repo from "doesn't run" to "runs," which makes everything after it measurable. I can start on it now.

The alternative, if you'd rather see something visible first, is scaffolding `property-management-os` so there's a UI to develop against. That's also reasonable, but it will be building against an API that can't start from a clean checkout.
