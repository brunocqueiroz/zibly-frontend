# Repository Guidelines
## Project Structure & Module Organization
- `app/`: Next.js App Router (pages, layouts, metadata). API routes in `app/api/*/route.ts`. Server actions in `app/actions/*.ts`.
- `components/`: Shared UI. Feature components live in kebab-case files; exported React components are PascalCase. `components/ui/*` contains shadcn/ui primitives.
- `lib/`: Utilities and config (e.g., `auth.ts`, `aws-config.ts`, `pricing-config.ts`, `session.ts`, `utils.ts`).
- `hooks/`: Custom hooks (e.g., `use-mobile.tsx`, `use-toast.ts`).
- `public/`: Static assets (images, icons). Config at `tailwind.config.ts`, `postcss.config.mjs`, `next.config.mjs`, `tsconfig.json`. Middleware in `middleware.ts`.
## Build, Test, and Development Commands
- Install: `pnpm install` (pnpm is preferred; lockfile is `pnpm-lock.yaml`).
- Develop: `pnpm dev` — run locally at `http://localhost:3000`.
- Build: `pnpm build` — compile production build.
- Start: `pnpm start` — serve the production build.
- Lint: `pnpm lint` — Next.js/ESLint checks.
## Coding Style & Naming Conventions
- Language: TypeScript, React 19, Next.js App Router, Tailwind CSS.
- Indentation: 2 spaces; keep imports sorted logically (framework → libs → local).
- Filenames: kebab-case (`dashboard-nav.tsx`). Components: PascalCase; hooks: `useX`; variables/functions: camelCase; types/interfaces: PascalCase.
- Styling: Tailwind utility-first; compose classes with `cn()` from `lib/utils.ts`.
## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer Vitest + React Testing Library. Name as `*.test.ts(x)` colocated with source or under `__tests__/`. Aim to cover utilities in `lib/` and server actions in `app/actions/`.
## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`, `test:`. Optional scope, e.g., `feat(app): ...`.
- Reference tickets (e.g., `ZB-11`) in the commit or PR description.
- PRs: include a clear summary, linked issue, screenshots for UI changes, notes on env/config changes, and testing steps.
## Security & Configuration Tips
- Secrets in `.env.local` (client-exposed as `NEXT_PUBLIC_*`). Do not commit env files.
- AWS credentials are loaded via SDK providers; see `lib/aws-config.ts`.
- Review `cors-policy.json` when changing API routes. Vercel settings are in `vercel.json`.
