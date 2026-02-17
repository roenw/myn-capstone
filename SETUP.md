# My Yoga Network - Setup Instructions

## Overview
This application integrates Auth0 for authentication using the official `@auth0/nextjs-auth0` SDK and MongoDB for data storage. It supports three user types: Clients, Therapists, and Physicians.

## Environment Variables
The following environment variables are configured in `.env.local`:

```
AUTH0_DOMAIN=dev-kljxn3cr6v4gtpy5.us.auth0.com
AUTH0_CLIENT_ID=h86uAZcgNermlTfXZApw3RAA3p7cl6eq
AUTH0_CLIENT_SECRET=VtFZdN2ke6DmQPk3Bzv_3B0ZmPsQLwUSsPIDVyEeHz2oAnTyFdKvzDwDw-wdlfTG
AUTH0_SECRET=16bd0a7b029268ba977039ee88701e173570d051ce3579cf1c000660541b52ac
APP_BASE_URL=http://localhost:3000
```

And in `.env`:
```
MONGODB_URI=mongodb+srv://dev-db:e9XQtDAZK6QZfR4J@c1.qwup5gp.mongodb.net/?appName=C1
```

## Auth0 SDK Setup

The application uses the official Auth0 SDK for Next.js with:

1. **Auth0 Client** (`lib/auth0.ts`) - Initialized using `Auth0Client` from `@auth0/nextjs-auth0/server`
2. **Middleware** (`middleware.ts`) - Handles authentication at the network boundary
3. **Built-in Routes** - Auth0 SDK automatically provides:
   - `/auth/login` - Login page
   - `/auth/login?screen_hint=signup` - Signup page
   - `/auth/logout` - Logout
   - `/auth/callback` - OAuth callback handler
   - `/auth/me` - Current user endpoint

## Database Models

### Client Model
- `auth0Id`: Unique Auth0 user ID
- `email`: User email
- `firstName`, `lastName`: User name
- `preferredName`, `dob`, `phone`, `location`: Optional profile fields
- `interests`: Array of yoga interests
- `yogaBefore`, `practiceFrequency`, `sessionType`: Yoga preferences
- `therapistId`: Reference to assigned therapist
- `physicianId`: Reference to referring physician

### Therapist Model
- `auth0Id`: Unique Auth0 user ID
- `email`: User email
- `firstName`, `lastName`: User name
- `phone`, `location`: Contact info
- `credentials`, `bio`, `specialties`: Professional details
- `yearsOfExperience`: Experience level
- `availableHours`: Schedule availability
- `profileImageURL`: Profile picture

### Physician Model
- `auth0Id`: Unique Auth0 user ID
- `email`: User email
- `firstName`, `lastName`: User name
- `phone`: Contact info
- `credentials`, `medicalLicenseNumber`, `specialty`: Professional details
- `hospitalAffiliation`: Hospital/clinic affiliation

## Authentication Flow

1. **Login**: Users click "Log In with Auth0" which redirects to `/auth/login`
2. **Auth0 Callback**: After authentication, Auth0 redirects to `/auth/callback`
3. **Route Determination**: The app checks `/auth/determine-route` to redirect users based on their role
4. **Dashboard**: Users are redirected to their respective dashboards:
   - Clients → `/client`
   - Therapists → `/therapistView`
   - Physicians → `/physician`

## Signup Flow

1. **Multi-step Form**: Users complete signup forms specific to their role
2. **Auth0 Registration**: Form data is saved to localStorage, then user is redirected to Auth0 signup
3. **Profile Creation**: After Auth0 registration, `/signup/complete` creates the MongoDB profile
4. **Dashboard Redirect**: User is redirected to their dashboard

## API Routes

### Authentication
- `/auth/*` - Built-in Auth0 SDK routes (login, logout, callback, me)
- `/auth/determine-route` - Route users based on their role
- `/api/user/profile` - Get current user's profile
- `/api/user/register/client` - Create client profile
- `/api/user/register/therapist` - Create therapist profile  
- `/api/user/register/physician` - Create physician profile

### Therapist View
- `/api/therapist-view/patients` - Get/create patients
- `/api/therapist-view/therapists` - Get all therapists

## Auth0 Dashboard Configuration

Make sure to configure the following in your Auth0 Dashboard:

1. **Allowed Callback URLs**: `http://localhost:3000/auth/callback`
2. **Allowed Logout URLs**: `http://localhost:3000`
3. **Application Type**: Regular Web Application

## Running the Application

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Navigate to `http://localhost:3000`

## Technical Implementation

- Uses `@auth0/nextjs-auth0` SDK v4.x
- Authentication middleware intercepts all requests at the network boundary
- `auth0.getSession()` is used in API routes to check authentication
- All protected routes automatically validate Auth0 session
- MongoDB stores user profiles and relates them to Auth0 IDs
