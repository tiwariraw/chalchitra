# Tech Stack

# Front End

## Next.js and core dependencies
- Next JS (App Router + Server Actions) - For SSR, ISR and API routes
- React - for building UI components
- ReactDOM - react rendering for the dom

## UI and Styling
- ShadCn - Style UI Components
- Tailwind CSS - For rapid styling and responsive design
- Postcss - required for tailwind processing
- Autoprefixer - ensures css compatibility

## State management
- Redux toolkit - state management for global user/auth state
- React Redux - connection between react and rtk
- Zustand - lightweight state management for UI like video controls

## API data fetching and backend communication
- React Query - For efficient API data fetching and caching
- Next-Auth - Authentication handling (google, credentials, jwt, etc.)
- MongoDB - MongoDB driver  for database connection
- @prisma/client - ORM for MongoDB

## Animations and UI enhancements
- Framer Motion - For animations, pager transitions, hover effects

## Video playback and streaming
- Plyr - For video playback
- React player - lightweight video playback for multiple video formats like mp4, etc.

# Back End

- Node Js with Express js - For building API
- Database -> Mongo DB - For flexible video meta data storage

# Authentication and Security

- NextAuth.Js - For Authentication
- JWT - For session management
- RBAC - Role Based Access Control

# Deployment and performance optimizations

- Vercel - Deployment platform for next.js
- .env - managing environment variables

# Streaming and Video Optimization

- Vimeo APIs - For Video Processing and Delivery
- Live Streaming - https based livestreaming for optimizing the video playbacks

# Features

- User Profiles
- Video Streaming
- Watch History
- Subscription and Payments
- Recommendations - OpenAI based APIs
- Search and Filtering (tag based categorizations)

# Dependencies installed
- npx create-next-app@latest chalchitragpt --typescript
- npx shadcn@latest init
- npm i @tanstack/react-query
- npm i zustand
- npm i @reduxjs/toolkit
- npm i react-redux
- npm i framer-motion
- npm i plyr
- npm i react-icons
- npm i next-auth
- npm i mongodb
- npm i @prisma/client
- npm i dotenv
- npm i react-player
