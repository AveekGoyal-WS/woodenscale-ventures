# Wooden Scale Website Structure

## Core Pages

### 1. Landing Page
- Hero section with value proposition
- Growth Programs showcase
  - Launchpad Program (Get your first 100 customers)
  - FundRaise Program (Scale 2X faster)
- Featured Mentors section
- Featured Investors section
- Featured webinars and events
- Blog highlights
- Newsletter signup
- Program enrollment CTAs

### 2. Growth Programs

#### 2.1 Launchpad Program
- Program overview
- Value proposition: "Start from scratch and get your first 100 customers"
- Curriculum structure
- Learning outcomes
- Featured Mentors
  - Mentor profiles
  - Areas of expertise
  - Success stories
- Program benefits
- Pricing and packages
- FAQs
- Application process
- Enrollment CTA

#### 2.2 FundRaise Program
- Program overview
- Value proposition: "Raise funds and scale your business 2X faster"
- Program structure
- Expected outcomes
- Featured Investors
  - Investor profiles
  - Investment thesis
  - Portfolio companies
- Program benefits
- Pricing and packages
- FAQs
- Application process
- Enrollment CTA

### 3. Authentication Pages
- Sign Up
  - Email/password registration
  - Social login options (Google, LinkedIn)
  - Email verification
  - Profile creation
- Login
  - Email/password login
  - Social login
  - Password reset
  - Remember me option
- Account Settings
  - Profile management
  - Password change
  - Email preferences
  - Notification settings

### 4. Payment System
- Program Enrollment Payments
  - Launchpad Program payment
  - FundRaise Program payment
  - Payment information collection
  - Secure payment processing
  - Coupon application (if applicable)
- Payment Confirmation
  - Receipt generation
  - Welcome email with next steps
  - Program access activation
- Payment Records
  - Transaction history
  - Payment confirmation

### 5. Blog
- Featured articles
- Category filters
  - Founder Stories
  - Startup Metrics
  - Growth Strategies
  - Product Development
  - Team Building
  - Fundraising
- Search functionality
- Social sharing

### 6. Webinar Hub
- Upcoming webinars
- Topic descriptions
- Speaker profile
- Registration system
- Calendar integration


### 7. Contact
- Contact form
- Office location
- Support channels
- FAQ section
- Book a consultation

### 8. E-cell Partnership
- Partnership benefits
- Integration possibilities
  - Workshops and events
  - Mentorship programs
  - Resource sharing
- Application process
- Contact for collaboration

### Additional Pages
- About Us
- Team
- Partner Network
- E-cell Partnership
- Resources
- Privacy Policy
- Terms of Service
- Career Opportunities

## User Flows

### 1. Organic Traffic Flow
```
Landing Page → [Growth Programs/Blog/Webinars] → Registration/Contact
```

### 2. Paid Acquisition Flow
```
Ad Campaign → [Program-specific Page] → Registration → Landing Page → Program Info
```

### 3. Program Enrollment Flow
```
[Landing Page/Ad] → Program Info (Launchpad/FundRaise) → Sign Up → Application → Plan Selection → Payment → LMS Access
```

### 4. Authentication Flow
```
Sign Up → Email Verification → Profile Creation → Payment → Dashboard Access
```

### 5. Payment Flow
```
Plan Selection → Checkout → Payment Processing → Confirmation → Access Granted
```

### 6. Student Learning Flow
```
Login → LMS Dashboard → Course Modules → Mentoring Sessions → Community
```

### 7. Admin Flow
```
Login → Admin Dashboard → Content/User Management → Analytics → Support
```

## Technical Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- React Query for data fetching
- Framer Motion for animations

### Backend & Database
- Supabase
  - Authentication
  - Database (PostgreSQL)
  - Storage
  - Real-time subscriptions
- Edge Functions

### Analytics & SEO
- Google Analytics 4
- Google Tag Manager
- Next SEO
- Schema.org markup
- Sitemap generation

### Development Tools
- ESLint
- Prettier
- Husky for git hooks
- Jest for testing
- GitHub Actions for CI/CD

### Hosting & Deployment
- Vercel
- Supabase Cloud
- AWS S3 (media storage)
- Cloudflare (CDN)

## Technical Integration

### SEO Implementation
- Meta tags optimization
- Schema markup for:
  - Organization
  - Course
  - Event (webinars)
  - Article (blog posts)
  - FAQ
- XML sitemap
- Robots.txt

### Analytics Integration
- Google Analytics 4 setup
- Custom event tracking
- Conversion tracking
- User journey analysis
- Content performance metrics

### Authentication System
- Email/password authentication
- Google/LinkedIn SSO
- Role-based access control
- Password recovery
- Session management
- 2FA for admin accounts

### Performance Considerations
- CDN implementation
- Image optimization
- Caching strategy
- Mobile responsiveness
- Progressive web app features
- API rate limiting
