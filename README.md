<p align="center">
    <img width="350px" src="https://i.imgur.com/6r83blS.png">
</p>
<p align="center">
    <a href="https://github.com/vtempest/Svelte-Starter-DOCS/discussions">
    <img alt="GitHub Discussions"
        src="https://img.shields.io/github/discussions/vtempest/Svelte-Starter-DOCS">
    </a>
    <a href="http://makeapullrequest.com">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
    <a href="https://codespaces.new/vtempest/Svelte-Starter-DOCS">
    <img src="https://github.com/codespaces/badge.svg" width="150" height="20">
    </a>
</p>
<h3 align="center">
  <a href="https://starterdocs.vtempest.workers.dev"> 🎮Live Demo </a>
</h3>
<h3 align="center">
  <a href="https://starterdocs.js.org"> 📑 Files & Functions Docs (starterdocs.js.org)</a>
</h3>

## 🌏  Open in the Cloud 
Click any of the buttons below to start a new development environment to demo or contribute to the codebase without having to install anything on your machine:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/vtempest/Serverless-DOCS-Stack)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/vtempest/Serverless-DOCS-Stack)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/vtempest/Serverless-DOCS-Stack)
[![Edit in Codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/vtempest/Serverless-DOCS-Stack)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vtempest/Serverless-DOCS-Stack)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/vtempest/Serverless-DOCS-Stack)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/vtempest/Serverless-DOCS-Stack)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/vtempest/Serverless-DOCS-Stack)


### ⚒️ Svelte Serverless Starter DOCS: Drizzle OAuth Cloudflare Svelte

📚 [Drizzle ORM](https://orm.drizzle.team/kit-docs/quick) - lightweight ORM compatible with Cloudflare D1 and drizzle-kit to manage schema migrations

👤 [OAuth Lucia](https://github.com/lucia-auth/lucia) - Google oAuth sign-in and/or email signup via Resend mailer api, with 4 email templates: reset password, change email, verify email, welcome. Settings and admin panel for users.

☁️ [Cloudflare for Svelte](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/) - serverless autoscaling API and D1 database, great hosting platform with free tier

🖼️ [SvelteKit](https://svelte.dev/docs/kit/introduction) \- full stack interface and API routes framework. Many developers prefer [Svelte over React](https://shakuro.com/blog/svelte-vs-react).

### 🧩 Interface Components

🎨 [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) + [Bits UI](https://github.com/huntabyte/bits-ui) + [shadcn-svelte](https://github.com/huntabyte/shadcn-svelte) - popular UI components, with  [lucide](https://github.com/lucide-icons/lucide) icons and demos like [Sidebar](https://next.shadcn-svelte.com/blocks) and [Magic UI Animations](https://animation-svelte.vercel.app/magic)

📝 [formsnap](https://github.com/svecosystem/formsnap) + [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) with [zod](https://github.com/colinhacks/zod) validation and [rate-limiting](https://github.com/ciscoheat/sveltekit-rate-limiter) in server memory

🌲 [pino](https://github.com/pinojs/pino) - error logs

✅ [Vitest](https://vitest.dev/guide/ui) - unit testing UI

⭐ _Extras & Alternatives_: [List of Svelte Libraries](https://github.com/TheComputerM/awesome-svelte#ui-libraries), [Material UI](https://sveltematerialui.com/INSTALL.md), [SkeletonUI](https://www.skeleton.dev/components/app-rail), [Flowbite](https://flowbite-svelte.com/docs/pages/introduction), [Icon sets](https://www.svgrepo.com/collections)

📦 Easy to switch in alternatives: Such as running on AWS, GCE, Azure instead of Cloudflare. 
Change Drizzle setup to connect to any db like Supabase, and add popular platform APIs with Lucia.


### 🖼️ Screenshots
<p align="center">
    <img width="350px" src="https://i.imgur.com/jIaL6yP.png"><img width="350px" src="https://i.imgur.com/NlkjlWI.png">
</p>


### ⬇️ Installation

1.  Install prerequisites Node.js or Bun `curl -fsSL https://bun.sh/install | bash`. Optional: Setup shell with dev tools like nvim, fish, system info with [Server-Shell-Setup](https://github.com/vtempest/Server-Shell-Setup)
2.  Clone to localhost or server `git clone https://github.com/vtempest/svelte-docs-starter`.  
    Optional: Press `.` when on the Github repo page to fork and run in Github Workspaces.
3.  CD to project directory `cd svelte-docs-starter`.
4.  Install dependencies `bun install`.
5.  `mv .env.example .env ; mv wrangler.example.toml wrangler.toml` and set the domain and API keys in `.env`.
6.  Auth providers, get id/secret from [Google](https://console.cloud.google.com/apis/credentials).
7.  Set OAuth origin `http://localhost` and `http://localhost:5173` on local or `https://domain.com` on server.
8.  Set redirect `http://localhost:5173/auth/oauth/google/callback` or `https://api.domain.com/auth/oauth/google/callback`.
9.  Optional: For email auth, get API from [Resend](https://resend.com/api-keys) mailer and verify domain.
10.  Log in with your Cloudflare account by running: `bunx wrangler login`.
11.  Create your D1 database via dashboard or with `bunx wrangler d1 create serverless-docs-db` or your custom db name.
12.  Copy the console output database\_name and database\_id.
13.  Go to `wrangler.toml` and change `database_name` and `database_id`.
14.  Go to `drizzle.config.ts` and change db name in `dbName`.
15.  Go to `package.json` and change db name in `db:push:*` and `db:backup:prod`.
16.  Generate and migrate the schema to dev or prod db: `bun run db:migrate; bun run db:push:dev; bun run db:push:prod`.
17.  Develop on local with `bun dev`.
18.  Deploy to prod with `bun serve`.
19.  Domain: [Cloudflare Dashboard](https://dash.cloudflare.com) -> Workers and Pages -> \[your worker name\] -> Settings
20.  Add-to-Home on Mobile Web: Design logo and generate icons for with [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator) or [Favicon.io](https://favicon.io)
21.  User Analytics: Get Google Analytics ID from [Google Analytics](https://support.google.com/analytics/answer/9539598?hl=en) or [SimpleAnalytics](https://www.simpleanalytics.com) and add to `app.html`.
22.  Email Forwarding: Setup [Cloudflare Email Routing](https://blog.cloudflare.com/introducing-email-routing/) and [GMail's Send From Verification](https://support.google.com/mail/answer/22370?hl=en)