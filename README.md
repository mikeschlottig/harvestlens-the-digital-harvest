# HarvestLens — The Digital Harvest

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/mikeschlottig/harvestlens-the-digital-harvest)

HarvestLens is a production-ready, visually stunning React frontend application served via a Cloudflare Workers backend using Hono. It transforms a single-file infographic into an interactive web report on the state of open-source web crawlers. The app features a single responsive page with a hero section, detailed landscape analysis, business workflows, top 10 rankings with cards and charts, an extended list (ranks 11-50), and under-the-radar hidden gems. Data is fetched from lightweight REST endpoints and visualized using interactive charts, tables, and cards for an engaging user experience.

## Key Features

- **Stunning Visual Design**: Modern, responsive UI with shadcn/ui components, Tailwind CSS, and micro-interactions via Framer Motion.
- **Interactive Visualizations**: Recharts-powered doughnut, bubble, and horizontal bar charts for language dominance, complexity vs. value, and rankings.
- **Data-Driven Content**: Browsable top 10 cards, scrollable table for ranks 11-50, and gem cards with GitHub links.
- **Full-Stack Architecture**: Frontend fetches mock data from Hono endpoints; extensible for Durable Objects persistence.
- **Responsive & Accessible**: Mobile-first design with proper touch targets, ARIA support, and flawless cross-device rendering.
- **Performance Optimized**: React Query caching, skeleton loaders, and efficient rendering for fast interactions.

## Technology Stack

- **Frontend**: React 18, React Router, TypeScript, Tailwind CSS, shadcn/ui, Recharts, Framer Motion, Lucide React, @tanstack/react-query, Zustand, Sonner.
- **Backend**: Hono 4, Cloudflare Workers, Durable Objects (via custom entity library).
- **Build Tools**: Vite, Bun (package manager), Wrangler (Cloudflare CLI).
- **Utilities**: Zod (validation), clsx & tailwind-merge (styling), Immer (immutable updates).
- **Deployment**: Cloudflare Workers for edge deployment with global CDN.

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (v1.0+ recommended for fast installs and dev server)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (for Cloudflare deployment)
- Node.js (optional, but Bun is preferred)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd harvestlens
   ```

2. Install dependencies using Bun:
   ```
   bun install
   ```

3. (Optional) Generate TypeScript types for Workers:
   ```
   bun run cf-typegen
   ```

### Local Development

1. Start the development server:
   ```
   bun dev
   ```
   The app will be available at `http://localhost:3000` (or the port specified in your environment).

2. In a separate terminal, start the Cloudflare Worker (for API endpoints):
   ```
   bun wrangler dev
   ```
   This runs the Hono backend at `http://localhost:8787` (default Wrangler port).

3. Open `http://localhost:3000` in your browser to view the app. The frontend will proxy API calls to the Worker.

### Usage Examples

- **View the Report**: Navigate to the homepage (`/`) to see the full infographic with interactive charts and rankings.
- **Interact with Charts**: Hover over Recharts elements for tooltips; data is fetched on load via React Query.
- **Browse Rankings**: Scroll the extended table or click Top 10 cards to open GitHub links in new tabs.
- **API Testing**: Use tools like curl to test endpoints:
  ```
  curl http://localhost:8787/api/infographic/top10
  ```
  Returns JSON with top 10 crawler data.

The app is fully functional out-of-the-box with mock data seeded in `shared/mock-data.ts`. Charts render client-side, and all interactions (e.g., table scrolling, chart hovers) are smooth and responsive.

## Development Instructions

### Project Structure

- **Frontend (`src/`)**: React components, pages, hooks, and utilities. Key files:
  - `src/pages/HomePage.tsx`: Main report page.
  - `src/lib/api-client.ts`: API fetch wrapper.
  - `src/components/ui/*`: shadcn/ui primitives.

- **Backend (`worker/`)**: Hono routes and entities.
  - `worker/user-routes.ts`: Add custom API endpoints here (e.g., `/api/infographic/*`).
  - `worker/entities.ts`: Extend for new data models using the IndexedEntity pattern.
  - Do not modify `worker/core-utils.ts` or `worker/index.ts`.

- **Shared (`shared/`)**: TypeScript types and mock data.
  - `shared/types.ts`: API response and data interfaces.
  - `shared/mock-data.ts`: Seeded data for charts and lists.

### Adding Features

1. **New API Endpoint** (e.g., in `worker/user-routes.ts`):
   ```ts
   import { ok } from './core-utils';
   import { InfographicEntity } from './entities'; // If using entities

   app.get('/api/infographic/charts', async (c) => {
     const charts = await InfographicEntity.getCharts(c.env);
     return ok(c, charts);
   });
   ```

2. **Frontend Data Fetching** (using React Query in components):
   ```tsx
   import { useQuery } from '@tanstack/react-query';
   import { api } from '@/lib/api-client';

   const { data, isLoading } = useQuery({
     queryKey: ['charts'],
     queryFn: () => api('/api/infographic/charts'),
   });

   if (isLoading) return <Skeleton />; // shadcn Skeleton
   ```

3. **Custom Components**: Use shadcn/ui imports (e.g., `import { Card } from '@/components/ui/card';`). Extend Tailwind in `tailwind.config.js` for custom colors.

4. **Linting & Formatting**:
   ```
   bun run lint
   ```
   Fix issues with your editor's ESLint integration.

5. **Testing**: Add unit tests with Vitest (pre-configured via Vite). Run with `bun test`.

### Environment Variables

- Set `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` for Wrangler.
- No additional vars needed for local dev; API uses relative paths.

## Deployment

Deploy to Cloudflare Workers for global edge performance. The app bundles frontend assets and serves them via the Worker.

1. **Build the Project**:
   ```
   bun run build
   ```
   This generates static assets in `dist/` and Worker code.

2. **Deploy with Wrangler**:
   ```
   bun wrangler deploy
   ```
   - Requires authentication: `bun wrangler login`.
   - Publishes to your default Workers subdomain (e.g., `harvestlens.your-subdomain.workers.dev`).
   - Custom domain: Update `wrangler.jsonc` with `route` under `assets`.

3. **One-Click Deploy**:
   [![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/mikeschlottig/harvestlens-the-digital-harvest)

4. **Post-Deployment**:
   - API endpoints are available at `/api/infographic/*`.
   - Monitor logs: `bun wrangler tail`.
   - Update: Re-run `bun run build && bun wrangler deploy`.

For production, enable Cloudflare's observability in `wrangler.jsonc`. The app auto-handles SPA routing via `assets.not_found_handling`.

## Contributing

1. Fork the repo and create a feature branch.
2. Install dependencies and run `bun dev`.
3. Make changes, lint with `bun run lint`, and test locally.
4. Commit with conventional messages (e.g., `feat: add new chart`).
5. Push and open a PR.

Follow the code style: TypeScript strict, Tailwind utilities, shadcn/ui primitives. No new dependencies without review.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- Issues: Open a GitHub issue for bugs or features.
- Discussions: Use GitHub Discussions for questions.
- Cloudflare Docs: [Workers](https://developers.cloudflare.com/workers/), [Durable Objects](https://developers.cloudflare.com/durable-objects/).

Built with ❤️ by Cloudflare Workers.