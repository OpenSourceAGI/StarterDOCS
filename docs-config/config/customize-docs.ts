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
  gitRepoDocsPath: "https://github.com/your-username/your-repo/tree/master/",
  sourceLinkTemplate: "https://github.com/your-username/your-repo/tree/master/{path}#L{line}",
  openAPISpecPath: false,
  openAPIDocsOutput: "./src/api",
  openAPIShowSchemas: false,
  showEditsOnGitHub: true,
  GOOGLE_ANALYTICS_ID: false,
  readme: "../README.md",
  sanitizeComments: false,
  logoURL: "/",
  baseFolder: "./",
  logo: "/icon.png",
  favicon: "/icon.png",
  enableFasterBuildV4: true,
  enableReadmeAsHome: false,
  topbar: [
    {
      to: "/functions",
      label: "👋 Intro",
      position: "left",
    }
  ],
  // @ts-ignore
} satisfies APIDocsConfig;