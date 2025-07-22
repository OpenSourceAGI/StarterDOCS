// source.config.ts
import { defineDocs } from "fumadocs-mdx/config";
var { docs, meta } = defineDocs({
  dir: "./content/docs"
});
export {
  docs,
  meta
};
