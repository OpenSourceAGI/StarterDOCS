mkdir -p ../.github/workflows

echo '# Github Action to deploy docs subfolder content to GitHub Pages
name: Docs
on:
  push:
    branches: ["master"]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Github Pages
        uses: actions/configure-pages@v5

      - name: Build docs subfolder with bun
        run: cd docs && npm i -g bun && bun i -D --force && bun run build

      - name: Upload docs output
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./docs/dist"
      - name: Deploy Docs to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
' > ../.github/workflows/docs.yml

echo "Workflow file created at .github/workflows/docs.yml"
