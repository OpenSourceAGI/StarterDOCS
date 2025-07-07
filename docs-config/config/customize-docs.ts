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
  enableFasterBuildV4: false,
  enableReadmeAsHome: true,
  topbar: [
    {
      to: "/functions",
      label: "👋 Intro",
      position: "left",
    }
  ],
  // @ts-ignore
} satisfies APIDocsConfig;