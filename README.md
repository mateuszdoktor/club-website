# Madridista – Fullstack Football Portal ⚽

> This project is intended **for portfolio and educational purposes only**. It is not designed or maintained for public usage.

---

## Live Demo

You can see the live version of the app here: [Madridista on Vercel](https://madridista-puce.vercel.app).

##  About

Madridista is a fullstack web application dedicated to Real Madrid supporters. It offers live match updates, detailed player and team statistics, and the latest football news.

The platform integrates real-time data from external football and news APIs, while also supporting internal content management. Users can create accounts, log in, and share their thoughts in comment.
---

##  Key Features

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

- **Club Info**
  - Club history, stadium, and general info

- **User Authentication**
  - Sign up / log in
    
---

##  Tech Stack

| Layer               | Technologies                                                |
|---------------------|-------------------------------------------------------------|
| **Frontend**        | Next.js (App Router), React, Tailwind CSS, TypeScript       |
| **Backend**         | API Routes (Next.js), Supabase, Prisma                      |
| **Authentication**  | NextAuth.js                            |
| **APIs**            | football-data, GNews API, NewsData API                       |
| **Database**        | PostgreSQL (hosted via Supabase)                            |

---
##  Local Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/mateuszdokor/madridista.git
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

##  Environment Variables

Example `.env.example`:

```env
# External API keys
FOOTBALL_DATA_API_KEY=your_football_data_key
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
```
Replace all placeholders (your_...) with real credentials from your services.

##  Roadmap / Limitations

- No admin panel – content for the headlines must be added manually
- User profile customization
- Comment upvoting and downvoting
- API rate limits may affect news and stats loading

##  Author
Mateusz Doktor
