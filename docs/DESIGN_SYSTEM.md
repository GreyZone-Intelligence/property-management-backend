# GreyZone PropertyOS - Design System

## 🎨 Design Philosophy

PropertyOS follows an **Apple-inspired, enterprise-grade design language** that emphasizes simplicity, elegance, and professional aesthetics. The system prioritizes **user experience** over visual complexity, creating interfaces that feel both powerful and approachable.

### Core Principles

1. **Clarity**: Every element serves a purpose
2. **Consistency**: Unified experience across all touchpoints  
3. **Elegance**: Refined, premium aesthetic
4. **Accessibility**: Inclusive design for all users
5. **Performance**: Lightweight, fast-loading interfaces

---

## 🎯 Visual Identity

### Brand Essence
- **Professional**: Enterprise-ready, trustworthy
- **Modern**: Contemporary, forward-thinking
- **Sophisticated**: Premium, refined aesthetics
- **Accessible**: User-friendly, inclusive

### Mood & Tone
- **Clean & Minimal**: Generous white space, uncluttered layouts
- **Warm Professional**: Approachable yet authoritative
- **Confident**: Bold typography, clear hierarchy
- **Premium**: High-quality imagery, attention to detail

---

## 🎨 Color System

### Primary Palette

#### Brand Colors
```css
:root {
  /* Primary Brand */
  --brand-primary: #2563eb;        /* Blue 600 */
  --brand-primary-dark: #1d4ed8;   /* Blue 700 */  
  --brand-primary-light: #3b82f6;  /* Blue 500 */
  
  /* Secondary Brand */
  --brand-secondary: #059669;      /* Emerald 600 */
  --brand-accent: #dc2626;         /* Red 600 */
}
```

#### Neutral Palette
```css
:root {
  /* Neutral Grays */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Pure Values */
  --white: #ffffff;
  --black: #000000;
}
```

#### Semantic Colors
```css
:root {
  /* Status Colors */
  --success: #059669;      /* Green 600 */
  --warning: #d97706;      /* Amber 600 */
  --error: #dc2626;        /* Red 600 */
  --info: #2563eb;         /* Blue 600 */
  
  /* Background Colors */
  --background-primary: #ffffff;
  --background-secondary: #f9fafb;
  --background-tertiary: #f3f4f6;
  
  /* Surface Colors */
  --surface-primary: #ffffff;
  --surface-secondary: #f9fafb;
  --surface-elevated: #ffffff;
  
  /* Border Colors */
  --border-light: #f3f4f6;
  --border-medium: #e5e7eb;
  --border-strong: #d1d5db;
}
```

### Dark Mode Support
```css
[data-theme="dark"] {
  --background-primary: #0f1419;
  --background-secondary: #1a1f25;
  --surface-primary: #1f2937;
  --surface-secondary: #374151;
  --border-light: #374151;
  --border-medium: #4b5563;
}
```

### Color Usage Guidelines

#### Primary Blue
- **Usage**: Call-to-action buttons, links, primary navigation, progress indicators
- **Accessibility**: Meets WCAG AA contrast requirements on white backgrounds
- **Psychology**: Trust, reliability, professionalism

#### Success Green
- **Usage**: Success states, positive feedback, completed tasks, active status
- **Context**: Payment confirmations, successful submissions, online indicators

#### Warning Amber
- **Usage**: Caution states, pending actions, attention required
- **Context**: Payment due, review required, incomplete profiles

#### Error Red
- **Usage**: Error states, negative feedback, critical alerts, failed actions
- **Context**: Failed payments, validation errors, system failures

---

## ✍️ Typography

### Font Stack
```css
/* Primary Font Family */
.font-sans {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
               'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Mono Font Family */
.font-mono {
  font-family: 'JetBrains Mono', 'SF Mono', Monaco, 'Roboto Mono', 
               'Courier New', monospace;
}
```

### Type Scale

#### Headings
```css
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* 60px */
.text-5xl { font-size: 3rem; line-height: 1; }        /* 48px */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* 36px */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }     /* 24px */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }  /* 20px */
```

#### Body Text
```css
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* 18px */
.text-base { font-size: 1rem; line-height: 1.5rem; }    /* 16px */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* 14px */
.text-xs { font-size: 0.75rem; line-height: 1rem; }     /* 12px */
```

#### Font Weights
```css
.font-thin { font-weight: 100; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
```

### Typography Usage

#### Page Titles
```css
.page-title {
  font-size: 2.25rem;      /* text-4xl */
  font-weight: 700;        /* font-bold */
  line-height: 2.5rem;
  color: var(--gray-900);
  margin-bottom: 1.5rem;
}
```

#### Section Headers
```css
.section-header {
  font-size: 1.5rem;       /* text-2xl */
  font-weight: 600;        /* font-semibold */
  color: var(--gray-800);
  margin-bottom: 1rem;
}
```

#### Body Text
```css
.body-text {
  font-size: 1rem;         /* text-base */
  font-weight: 400;        /* font-normal */
  line-height: 1.625;
  color: var(--gray-600);
}
```

#### Labels & Captions
```css
.label-text {
  font-size: 0.875rem;     /* text-sm */
  font-weight: 500;        /* font-medium */
  color: var(--gray-700);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}
```

---

## 📏 Spacing & Layout

### Spacing Scale
```css
/* Tailwind-based spacing scale */
:root {
  --spacing-0: 0px;        /* 0 */
  --spacing-1: 0.25rem;    /* 4px */
  --spacing-2: 0.5rem;     /* 8px */
  --spacing-3: 0.75rem;    /* 12px */
  --spacing-4: 1rem;       /* 16px */
  --spacing-5: 1.25rem;    /* 20px */
  --spacing-6: 1.5rem;     /* 24px */
  --spacing-8: 2rem;       /* 32px */
  --spacing-10: 2.5rem;    /* 40px */
  --spacing-12: 3rem;      /* 48px */
  --spacing-16: 4rem;      /* 64px */
  --spacing-20: 5rem;      /* 80px */
  --spacing-24: 6rem;      /* 96px */
}
```

### Layout Grid
```css
/* Container Sizes */
.container-sm { max-width: 640px; }   /* Small screens */
.container-md { max-width: 768px; }   /* Medium screens */
.container-lg { max-width: 1024px; }  /* Large screens */
.container-xl { max-width: 1280px; }  /* Extra large screens */
.container-2xl { max-width: 1536px; } /* 2X large screens */
```

### Component Spacing

#### Cards
```css
.card-padding {
  padding: 1.5rem;        /* 24px */
}

.card-padding-sm {
  padding: 1rem;          /* 16px */
}

.card-padding-lg {
  padding: 2rem;          /* 32px */
}
```

#### Form Elements
```css
.form-spacing {
  margin-bottom: 1rem;    /* 16px between form fields */
}

.form-group-spacing {
  margin-bottom: 1.5rem;  /* 24px between form groups */
}
```

---

## 🔘 Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--brand-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--brand-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: var(--brand-primary);
  border: 1px solid var(--border-medium);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

.btn-secondary:hover {
  background-color: var(--gray-50);
  border-color: var(--brand-primary);
}
```

#### Icon Button
```css
.btn-icon {
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: none;
  color: var(--gray-500);
  transition: all 0.2s ease-in-out;
}

.btn-icon:hover {
  background-color: var(--gray-100);
  color: var(--gray-700);
}
```

### Form Inputs

#### Text Input
```css
.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-medium);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
  background-color: var(--white);
}

.input-field:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input-field:placeholder {
  color: var(--gray-400);
}
```

#### Select Dropdown
```css
.select-field {
  appearance: none;
  background-image: url("data:image/svg+xml...");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
  padding-right: 2.5rem;
}
```

### Cards

#### Basic Card
```css
.card {
  background-color: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
```

#### Stats Card
```css
.stats-card {
  background: linear-gradient(135deg, var(--white) 0%, var(--gray-50) 100%);
  border: 1px solid var(--border-light);
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.stats-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-secondary));
}
```

### Navigation

#### Sidebar Navigation
```css
.sidebar {
  width: 256px;
  background-color: var(--surface-primary);
  border-right: 1px solid var(--border-light);
  padding: 1.5rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: var(--gray-600);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  margin: 0 0.75rem;
}

.nav-item:hover {
  background-color: var(--gray-100);
  color: var(--gray-900);
}

.nav-item.active {
  background-color: var(--brand-primary);
  color: white;
}
```

#### Top Navigation
```css
.top-nav {
  height: 64px;
  background-color: var(--surface-primary);
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}
```

---

## 🎭 Interactive States

### Hover Effects
```css
/* Subtle lift effect */
.hover-lift {
  transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Subtle scale effect */
.hover-scale {
  transition: transform 0.2s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

### Focus States
```css
.focus-ring {
  outline: none;
  transition: box-shadow 0.2s ease-in-out;
}

.focus-ring:focus {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### Loading States
```css
.loading-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Mobile-First Approach
```css
/* Mobile (default) */
.responsive-grid {
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

### Container Queries (Future)
```css
@container (min-width: 768px) {
  .card-content {
    display: flex;
    gap: 1rem;
  }
}
```

---

## ♿ Accessibility

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

### Focus Management
```css
/* Skip link for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--brand-primary);
  color: white;
  padding: 8px;
  text-decoration: none;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}
```

### ARIA Labels
```html
<!-- Button with ARIA label -->
<button aria-label="Close dialog" class="btn-icon">
  <svg>...</svg>
</button>

<!-- Form with proper labeling -->
<label for="email">Email Address</label>
<input 
  id="email" 
  type="email" 
  aria-describedby="email-help"
  aria-invalid="false"
>
<div id="email-help">We'll never share your email</div>
```

### Screen Reader Support
```css
/* Visually hidden but accessible to screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 🎬 Animation & Motion

### Easing Functions
```css
:root {
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Micro-Interactions
```css
/* Button press animation */
.btn-press {
  transition: transform 0.1s ease-in-out;
}

.btn-press:active {
  transform: scale(0.98);
}

/* Card hover animation */
.card-animate {
  transition: all 0.3s var(--ease-out);
}

.card-animate:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
```

### Page Transitions
```css
/* Fade in animation */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 🔧 Implementation Guidelines

### CSS-in-JS Pattern (Tailwind + Custom CSS)
```jsx
// Component example
const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {property.name}
        </h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {property.occupancy}% Occupied
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{property.units}</div>
          <div className="text-sm text-gray-500">Total Units</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">${property.income}</div>
          <div className="text-sm text-gray-500">Monthly Income</div>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
        View Details
      </button>
    </div>
  );
};
```

### Design Tokens (CSS Custom Properties)
```css
/* Design tokens file */
:root {
  /* Spacing */
  --space-component-padding: 1.5rem;
  --space-section-margin: 3rem;
  --space-element-gap: 1rem;
  
  /* Borders */
  --border-radius-sm: 0.375rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
  --border-radius-xl: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

---

This design system provides a comprehensive foundation for building a cohesive, professional, and accessible PropertyOS interface that rivals the best enterprise SaaS platforms while maintaining the Apple-inspired aesthetic and user experience excellence.