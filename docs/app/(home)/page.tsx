import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-6">
          
          {/* Main Logo */}
          <div className="mb-4">
            <img 
              width="350" 
              src="https://i.imgur.com/PE4kQWy.png" 
              alt="Starter DOCS Logo"
              className="mx-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Install Command */}
          <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-base mb-4 inline-block shadow-lg">
            bun create starter-app
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">Project Status</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="https://github.com/vtempest/Svelte-Starter-DOCS/discussions" className="hover:scale-105 transition-transform">
              <img alt="GitHub Discussions" src="https://img.shields.io/github/discussions/vtempest/Svelte-Starter-DOCS" />
            </a>
            <a href="http://makeapullrequest.com" className="hover:scale-105 transition-transform">
              <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
            </a>
            <a href="https://codespaces.new/vtempest/Svelte-Starter-DOCS" className="hover:scale-105 transition-transform">
              <img src="https://github.com/codespaces/badge.svg" width="150" height="20" alt="Open in Codespaces" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="https://starterdocs.vtempest.workers.dev" 
              className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">🎮</div>
                <h3 className="text-lg font-semibold mb-1">Demo</h3>
                <p className="text-purple-100 text-sm">Live interactive demo</p>
              </div>
            </a>
            
            <a 
              href="https://starterdocs.js.org/docs" 
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">📑</div>
                <h3 className="text-lg font-semibold mb-1">Documentation</h3>
                <p className="text-blue-100 text-sm">Complete docs at starterdocs.js.org</p>
              </div>
            </a>

            <a 
              href="https://starterdocs.js.org/docs/guides/starter-docs#%EF%B8%8F-installation" 
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">⬇️</div>
                <h3 className="text-lg font-semibold mb-1">Installation</h3>
                <p className="text-green-100 text-sm">Get started guide</p>
              </div>
            </a>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">⚒️ Starter DOCS: Drizzle OAuth Cloudflare Svelte</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-2">Docs-Driven Development</h3>
              <p className="text-blue-700">Generate easy-to-understand docs from your JS functions and APIs, to maximize reusable value and make the options clear to everyone.</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h3 className="font-semibold text-indigo-800 mb-2">Functionally Brilliant, Elegantly Simple Toolkit</h3>
              <p className="text-indigo-700">StarterDOCS is to SvelteKit what Next.js is to React: full stack with smart defaults for common needs. It is easy to switch in alternatives: Such as running on AWS/GCE instead of Cloudflare, or using Next/Supabase instead of Svelte/Cloudflare.</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Backend Features */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🛠️ Backend Features</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-lg">📚</span>
                <div>
                  <strong>Drizzle ORM</strong>
                  <p className="text-gray-600 text-sm">Lightweight ORM compatible with Cloudflare D1 and drizzle-kit to manage schema migrations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">👤</span>
                <div>
                  <strong>Better Auth</strong>
                  <p className="text-gray-600 text-sm">Google oAuth sign-in and/or email signup via Resend mailer api, Stripe built-in, API docs, One Tap, with 4 email templates: reset password, change email, verify email, welcome. Settings and admin panel for users.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">☁️</span>
                <div>
                  <strong>Cloudflare for Svelte</strong>
                  <p className="text-gray-600 text-sm">Serverless autoscaling API and D1 database, great hosting platform with free tier</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">🖼️</span>
                <div>
                  <strong>SvelteKit</strong>
                  <p className="text-gray-600 text-sm">Full stack interface and API routes framework. Many developers prefer Svelte over React.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interface Components */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🧩 Interface Components</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-lg">🎨</span>
                <div>
                  <strong>Tailwind CSS + Bits UI + shadcn-svelte</strong>
                  <p className="text-gray-600 text-sm">Popular UI components, with lucide icons</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">📝</span>
                <div>
                  <strong>formsnap + sveltekit-superforms</strong>
                  <p className="text-gray-600 text-sm">With zod validation and rate-limiting in server memory</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">✅</span>
                <div>
                  <strong>Vitest</strong>
                  <p className="text-gray-600 text-sm">Unit testing UI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">🖼️ Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <img 
                width="350" 
                src="https://i.imgur.com/jIaL6yP.png" 
                alt="Screenshot 1"
                className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-center">
              <img 
                width="350" 
                src="https://i.imgur.com/NlkjlWI.png" 
                alt="Screenshot 2"
                className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-center">
              <img 
                width="350" 
                src="https://i.imgur.com/jehI6lv.png" 
                alt="Screenshot 3"
                className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}