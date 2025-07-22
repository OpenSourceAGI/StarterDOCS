import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const config = {
  output: 'export',
  distDir: '../docs',

  reactStrictMode: false,
  images: {
    domains: ['i.imgur.com'],
    unoptimized: true,
  },
};
export default withMDX(config);
