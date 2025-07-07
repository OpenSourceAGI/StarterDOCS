import type { APIDocsConfig } from "../docusaurus.config";
export default {
  name: "svelte-starter-docs",
  domain: "https://starterdocs.js.org",
  typedocFolders: [
    {
      id: "functions",
      entryPoints: [
        "../src/**/*"
      ],
      tsconfig: "../tsconfig.json",
    },
  ],
  gitRepoDocsPath: "https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/",
  sourceLinkTemplate: "https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/{path}#L{line}",
  openAPISpecPath: false,
  openAPIDocsOutput: "./src/api",
  openAPIShowSchemas: false,
  showEditsOnGitHub: true,
  GOOGLE_ANALYTICS_ID: false,
  readme: "../README.md",
  sanitizeComments: false,
  logoURL: "/",
  baseFolder: "./",
  logo: "/apple-touch-icon.png",
  favicon: "/favicon.ico",
  enableFasterBuildV4: 1,
  enableReadmeAsHome: true,
  usePathSlashDocs: false,
  topbar: [
    {
      to: "/functions",
      label: "👋 Intro",
      position: "left",
    },
    {
      to: "/research/Top%20Dev%20Tools",
      label: "🛠️ Top Dev Tools",
      position: "left",
    },
    {
      to: "/research/best_svelte_tools",
      label: "⚡ Svelte Libraries",
      position: "left",
    },
    {
      to: "/functions/modules",
      label: "📁 Code Files",
      position: "left",
    }
    

  ],
  // @ts-ignore
} satisfies APIDocsConfig;