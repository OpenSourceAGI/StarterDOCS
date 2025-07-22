const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__ad7fac21._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__f669b0bb._.js");
runtime.getOrInstantiateRuntimeModule(61520, CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule(61520, CHUNK_PUBLIC_PATH).exports;
