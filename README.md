# Real Madrid Fanpage – Fullstack Football Portal 🏟️⚽

> ⚠️ This project is intended **for portfolio and educational purposes only**. It is not designed or maintained for public usage.

## 📌 About

**Real Madrid Fanpage** is a fullstack football web application built with Next.js App Router and TailwindCSS, designed to deliver up-to-date football content, Real Madrid stats, and match info.

The app combines external football and news APIs with internal content management, and even includes basic user account support for login and registration.

> 💬 Add 2-3 sentences here about your motivation, what this project helped you learn, or what was technically challenging/interesting.

---

## 🧠 Key Features

- **Homepage**  
  - Displays top headlines created by administrators  
  - Latest news from external APIs  
  - Upcoming matches of Real Madrid

- **News Section**  
  - General football news from APIs (e.g. GNews, NewsData)  
  - Filterable news by country/media source

- **Season Overview**  
  - Real Madrid match results across different competitions  
  - League standings (tables)

- **Team Section**  
  - Squad list with player info  
  - Individual player statistics across competitions

- **Club Info**  
  - General club history, stadium, and overview

- **User Accounts**  
  - Sign up / login using `NextAuth.js`  
  - User data securely stored and managed via Supabase

---

## 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Next.js (App Router), React, Tailwind CSS, TypeScript |
| **Backend** | API Routes (Next.js), Supabase (auth/db), Prisma |
| **Authentication** | NextAuth.js (with Supabase Adapter) |
| **APIs** | API-Football, GNews API, NewsData API |
| **Database** | PostgreSQL (hosted via Supabase) |

---

## 🧪 Local Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies
npm install
Configure environment variables
Create a .env file in the root of the project and copy values from .env.example (see below).

Run development server
npm run dev
The app should now be running at http://localhost:3000
🔐 Environment Variables

Here’s a sample .env.example file:

# External API keys
API_FOOTBALL_KEY=your_api_football_key
GNEWS_API_KEY=your_gnews_api_key
NEWSDATA_API_KEY=your_newsdata_api_key

# Supabase credentials (DB + Auth)
DATABASE_URL=your_supabase_postgres_url
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Site base URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

🚧 Roadmap / Limitations

Project is not actively maintained.
No admin panel – admin content is manually added.
API rate limits may affect news/statistics fetching.

✍️ Author
Mateusz Doktor 


