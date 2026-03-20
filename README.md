# PawMate Waitlist Landing Page 🐾

A premium, stunning waitlist landing page for PawMate — the future of pet matchmaking.

## Tech Stack
- **Next.js 14/15/16 (App Router)**
- **Tailwind CSS 4.0** (Modern, High Performance)
- **Neon DB** (Serverless PostgreSQL)
- **Drizzle ORM** (TypeScript First)
- **Framer Motion** (Rich Animations)
- **Resend** (Email Delivery)
- **Shadcn UI** (Component Library)

## Setup Guide

### 1. Database (Neon.tech)
1. Create a free account at [neon.tech](https://neon.tech).
2. Create a new project and instance.
3. Copy the **Connection String** (DATABASE_URL).

### 2. Email (Resend.com)
1. Create an account at [resend.com](https://resend.com).
2. Create an API Key.
3. Add the key to your `.env.local`.

### 3. Environment Variables
Create a `.env.local` file in the root:
```bash
DATABASE_URL=your_neon_db_url
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_LAUNCH_DATE=2026-04-20T00:00:00Z
```

### 4. Database Migration
Run the following command to push the schema to Neon:
```bash
npx drizzle-kit push
```

### 5. Running Locally
```bash
npm install
npm run dev
```

## Features
- **Live Counters**: All stats are pulled directly from Neon DB.
- **Referral System**: Move up the waitlist by sharing your unique link.
- **Rich SVG Theme**: 100% custom SVGs for every animal and icon.
- **Mobile First**: Fully responsive and optimized for mobile devices.
- **Micro-animations**: Smooth transitions and effects using Framer Motion.

---
© 2026 PawMate · Every pet deserves a friend 🐾
