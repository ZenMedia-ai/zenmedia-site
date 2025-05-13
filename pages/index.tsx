
// Next.js + Tailwind + Pro Upgrades: Mailchimp Style Fix + Affiliate Section Fix

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen font-sans text-slate-900 dark:text-gray-100">
      <Head>
        <title>ZenMedia.ai | Digital Zen for Creators</title>
        <meta name="description" content="Empowering super-parents and creators with AI-driven wealth and wellness strategies." />
        <meta property="og:title" content="ZenMedia.ai | Digital Zen for Creators" />
        <meta property="og:description" content="Motivation, self-help, and monetization for creators and super-parents." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" href="/logo.png" as="image" />
      </Head>

      <div className="bg-yellow-400 text-black text-center py-2 text-sm font-semibold">
        🚨 Get the Free Zen Starter Kit PDF Today — Limited Time Download!
      </div>

      <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <Image src={logo} alt="ZenMedia.ai Logo" width={80} height={80} className="mb-4 animate-pulse" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Find Your Digital Zen</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">Empowering creators & super-parents with AI tools for income, peace, and purpose.</p>
        <a href="#free-guide" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition mb-6">🎁 Get the Free Guide</a>

        {/* Modern Styled Mailchimp Signup */}
        <form action="https://zenmedia.us6.list-manage.com/subscribe/post?u=e52cf29046d53765ada9d79d1&amp;id=3bc5cb55bf" method="post" target="_blank" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md text-left">
          <input type="email" name="EMAIL" required placeholder="Email address*" className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 text-black" />
          <input type="text" name="FNAME" placeholder="First Name" className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 text-black" />
          <input type="text" name="LNAME" placeholder="Last Name" className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 text-black" />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">Subscribe</button>
        </form>
      </section>

      {/* Affiliate Tools Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6" id="tools">
        <h2 className="text-3xl font-bold text-center mb-10">🚀 Launch Your Digital Business Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <a href="https://app.syllaby.io" target="_blank" className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2">Syllaby.io</h3>
            <p className="mb-4 text-sm">AI-powered content creation & video script writing.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Try for Free</button>
          </a>
          <a href="https://canva.com" target="_blank" className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2">Canva</h3>
            <p className="mb-4 text-sm">Design stunning graphics, social posts & eBooks fast.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Explore Now</button>
          </a>
          <a href="https://gumroad.com" target="_blank" className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2">Gumroad</h3>
            <p className="mb-4 text-sm">Sell digital products like courses, guides, or PDFs easily.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Start Selling</button>
          </a>
        </div>
      </section>
    </main>
  );
}
