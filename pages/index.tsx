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
    <>
      <Head>
        <title>ZenMedia.ai | Digital Zen for Creators</title>
        <meta name="description" content="AI tools, free starter kit, and step-by-step guidance for creators & super-parents to earn, grow, and thrive." />
        <meta property="og:image" content="/logo.png" />
        {/* Facebook Pixel Example */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);
            t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `,
          }}
        />
      </Head>

      {/* Top Bar */}
      <div className="bg-yellow-400 text-black text-center py-2 text-sm font-semibold">
        🚨 Get the Free Zen Starter Kit PDF Today — Limited Time Download!
      </div>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white px-6 text-center"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full py-24">
          <Image src={logo} alt="ZenMedia.ai Logo" width={80} height={80} className="mb-4 animate-pulse" priority />
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Find Your Digital Zen
          </motion.h1>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            Empowering creators & super-parents with AI tools for income, peace, and purpose.
          </p>
          <a
            href="#free-guide"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition mb-6"
          >
            🎁 Get the Free Guide
          </a>
          {/* Modern Mailchimp Signup */}
          <form
            action="https://zenmedia.us6.list-manage.com/subscribe/post?u=e52cf29046d53765ada9d79d1&amp;id=3bc5cb55bf"
            method="post"
            target="_blank"
            className="bg-white/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-xl w-full max-w-md mx-auto flex flex-col gap-3"
          >
            <div className="flex gap-2">
              <input
                type="email"
                name="EMAIL"
                required
                placeholder="Email address*"
                className="w-full px-4 py-2 rounded-md border border-gray-400 bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="FNAME"
                placeholder="First Name"
                className="w-full px-4 py-2 rounded-md border border-gray-400 bg-white dark:bg-gray-800 dark:text-white"
              />
              <input
                type="text"
                name="LNAME"
                placeholder="Last Name"
                className="w-full px-4 py-2 rounded-md border border-gray-400 bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full mt-2">
              Subscribe
            </button>
          </form>
        </div>
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="absolute top-6 right-6 z-20 bg-white/80 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full p-2 shadow-md"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </section>

      {/* Affiliate Links Section */}
      <section className="bg-white dark:bg-gray-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">🚀 Launch Your Digital Business Today</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <a
            href="https://learnlaunchleadchallenge.com/get-started/enroll?aid=71455"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl shadow-md block font-semibold text-xl"
          >
            Learn Launch Lead Challenge →
          </a>
          <a
            href="https://legendaryconfidencechallenge.com/get-started/enroll?aid=71455"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-xl shadow-md block font-semibold text-xl"
          >
            Legendary Confidence Challenge →
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-blue-50 dark:bg-blue-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">🎬 Featured On</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/logos/youtube.png" alt="YouTube" className="h-12" />
          <img src="/logos/facebook.png" alt="Facebook" className="h-12" />
          <img src="/logos/tiktok.png" alt="TikTok" className="h-12" />
          <img src="/logos/medium.png" alt="Medium" className="h-12" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">💬 What Others Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <p className="italic text-sm">
              “This starter kit helped me finally launch my business in under a week!”
            </p>
            <p className="mt-4 font-semibold">— Emily R., Mom & Creator</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <p className="italic text-sm">
              “The AI tools and roadmap gave me the clarity I was missing for years.”
            </p>
            <p className="mt-4 font-semibold">— Jason T., Side Hustler</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <p className="italic text-sm">
              “This changed how I think about time, money, and freedom.”
            </p>
            <p className="mt-4 font-semibold">— Arielle M., Creative Coach</p>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">👋 Meet the Founder</h2>
        <div className="max-w-3xl mx-auto text-md text-gray-700 dark:text-gray-300">
          <p>
            I'm Matthew Ellis, a tech exec and dad on a mission to help creators and parents reclaim control of their time,
            build purposeful online income, and find digital peace. This site is built from years of trial, tools, and transformation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 dark:bg-gray-950 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">❓ Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <div>
            <h4 className="font-semibold">Do I need any experience?</h4>
            <p className="text-sm">Nope. We give you the roadmap whether you're just starting or scaling.</p>
          </div>
          <div>
            <h4 className="font-semibold">How much does it cost?</h4>
            <p className="text-sm">
              The starter kit is 100% free. Some tools are affiliate links for paid platforms we recommend.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Can I use this while working full time?</h4>
            <p className="text-sm">Yes! Everything is designed for busy parents and creators.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-10 px-6 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.youtube.com/@zenmediaai" target="_blank" rel="noopener noreferrer" className="hover:underline">
            YouTube
          </a>
          <a href="https://www.facebook.com/zenmediaai" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Products
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
        <p>© 2025 ZenMedia.ai — Built for creators &amp; parents chasing clarity.</p>
      </footer>
    </>
  );
}
