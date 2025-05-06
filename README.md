# Real Madrid Fanpage – Fullstack Football Portal 🏟️⚽

> ⚠️ This project is intended **for portfolio and educational purposes only**. It is not designed or maintained for public usage.

---

## 📌 About

**Real Madrid Fanpage** is a fullstack football web application built with Next.js App Router and TailwindCSS, designed to deliver up-to-date football content, Real Madrid stats, and match info.

The app combines external football and news APIs with internal content management, and even includes basic user account support for login and registration.

---

## 🧠 Key Features

- **Homepage**
  - Admin-created headlines
  - News fetched from external APIs
  - Upcoming Real Madrid matches

- **News Section**
  - General football news from external APIs (GNews, NewsData)
  - Filter by country/media sources

- **Season Overview**
  - Real Madrid match results across various competitions
  - League standings

- **Team Page**
  - Full squad display
  - Player statistics per competition

- **Club Info**
  - Club history, stadium, and general info

- **User Authentication**
  - Sign up / log in using `NextAuth.js`
  - Users stored and managed with Supabase

---

## 🧰 Tech Stack

| Layer               | Technologies                                                |
|---------------------|-------------------------------------------------------------|
| **Frontend**        | Next.js (App Router), React, Tailwind CSS, TypeScript       |
| **Backend**         | API Routes (Next.js), Supabase, Prisma                      |
| **Authentication**  | NextAuth.js with Supabase Adapter                           |
| **APIs**            | API-Football, GNews API, NewsData API                       |
| **Database**        | PostgreSQL (hosted via Supabase)                            |

---
## 🧪 Local Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure environment variables**

    Create a `.env` file in the root of the project and copy values from `.env.example`.

4. **Run development server**

    ```bash
    npm run dev
    ```

    The app will be available at: [http://localhost:3000](http://localhost:3000)
---

## 🔐 Environment Variables

Example `.env.example`:

```env
# External API keys
API_FOOTBALL_KEY=your_api_football_key
GNEWS_API_KEY=your_gnews_api_key
NEWSDATA_API_KEY=your_newsdata_api_key

# Supabase (DB + Auth)
DATABASE_URL=your_supabase_postgres_url
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Site base URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
Replace all placeholders (your_...) with real credentials from your services.

🚧 Roadmap / Limitations

No admin panel – content for the headlines must be added manually
API rate limits may affect news and stats loading

✍️ Author
Mateusz Doktor
