**Project**: Fusion Starter (Vibe-Garden)

This document explains how to run the project locally, build for production, and configure optional environment variables (Supabase).

**Quick Start**
- **Prerequisites:** Node 18+ and `pnpm` (Corepack recommended).
- **Install dependencies:** Run the install command at the repository root.

```bash
# (enable Corepack + install pnpm if you don't have it)
corepack enable
corepack prepare pnpm@latest --activate

# install dependencies
pnpm install
```

- **Start development server:** Runs the integrated Vite + Express dev server with hot reload.

```bash
pnpm dev
```

- **Build production:** Produces client and server production bundles.

```bash
pnpm build
```

- **Start production server:** Serve the built server (run after `pnpm build`).

```bash
pnpm start
```

**Environment variables**
- **Supabase (optional):** If you want to use real Supabase authentication and APIs, create a `.env` file in the project root and add the following Vite-prefixed variables:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
```

- **Behavior when not set:** When these variables are not present `client/lib/supabaseClient.ts` returns `null` and the app falls back to a mock auth behavior.

**Available Scripts**
- **`pnpm dev`**: Start dev server (Vite + Express integration).
- **`pnpm build`**: Build client and server (`build:client` and `build:server`).
- **`pnpm start`**: Run the production server from `dist/server/node-build.mjs`.
- **`pnpm typecheck`**: Run TypeScript checks (`tsc`).
- **`pnpm test`**: Run Vitest tests.

**Ports and URLs**
- Vite prints the exact local and network URLs when the dev server starts (commonly `http://localhost:8080` or `http://localhost:5173`). Check your terminal output after `pnpm dev` to confirm.

**Troubleshooting**
- **`pnpm` not found:** Use Corepack to enable `pnpm` as shown above or `npm install -g pnpm`.
- **Build scripts ignored warning:** You may see a message about ignored build scripts (e.g., `@swc/core`). Run `pnpm approve-builds` to allow packages to run install/build scripts if you trust them.
- **`pnpm start` fails after build:** Ensure `dist/server/node-build.mjs` exists and you're running a compatible Node version (Node 18+ recommended).
- **Auth errors:** Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct and available to the Vite process.

**Optional**
- Add a `.env.example` with placeholder values to the repo for onboarding. Example values are shown above.

If you want, I can add a `.env.example` file now or commit this `README.md` for you. Let me know which you'd like next.
