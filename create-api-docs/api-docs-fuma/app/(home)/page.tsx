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
              width="300" 
              src="https://i.imgur.com/qrQWkeb.png" 
              alt="Grab API Logo"
              className="mx-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Install Command */}
          <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-base mb-4 inline-block shadow-lg">
            npm i grab-url
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">Project Status</h2>
          <div className="flex flex-wrap justify-center gap-2">
              <a href="https://discord.gg/SJdBqBz3tV" className="hover:scale-105 transition-transform">
              <img src="https://img.shields.io/discord/1110227955554209923.svg?label=Chat&logo=Discord&colorB=7289da&style=flat" alt="Join Discord" />
            </a>
            <a href="https://github.com/vtempest/GRAB-URL/discussions" className="hover:scale-105 transition-transform">
              <img alt="GitHub Stars" src="https://img.shields.io/github/stars/vtempest/GRAB-URL" />
            </a>
            <a href="https://npmjs.org/package/grab-url" className="hover:scale-105 transition-transform">
              <img alt="NPM Version" src="https://img.shields.io/npm/v/grab-url" />
            </a>
            <a href="https://bundlephobia.com/package/grab-url" className="hover:scale-105 transition-transform">
              <img src="https://img.shields.io/bundlephobia/minzip/grab-url" alt="Bundle Size" />
            </a>
            <a href="https://github.com/vtempest/GRAB-URL/discussions" className="hover:scale-105 transition-transform">
              <img alt="GitHub Discussions" src="https://img.shields.io/github/discussions/vtempest/GRAB-URL" />
            </a>
            <a href="https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/" className="hover:scale-105 transition-transform">
              <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"/>
            </a>
            <a href="https://codespaces.new/vtempest/GRAB-URL" className="hover:scale-105 transition-transform">
              <img src="https://github.com/codespaces/badge.svg" width="150" height="20" alt="Open in Codespaces"/>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/docs" 
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">📑</div>
                <h3 className="text-lg font-semibold mb-1">Documentation</h3>
                <p className="text-blue-100 text-sm">Complete API reference and guides</p>
              </div>
            </Link>
            
            <a 
              href="https://grab.js.org/docs/guide/Examples" 
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">🎯</div>
                <h3 className="text-lg font-semibold mb-1">Example Strategies</h3>
                <p className="text-green-100 text-sm">Real-world scraping examples</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
