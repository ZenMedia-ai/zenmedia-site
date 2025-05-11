'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

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
      </Head>

      {/* HERO SECTION */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center h-screen text-white">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <Image src="/logo.png" alt="ZenMedia.ai Logo" width={80} height={80} className="mb-4" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Find Your Digital Zen</h1>
          <p className="text-lg md:text-xl max-w-xl mb-6">Empowering creators & super-parents with AI tools for income, peace, and purpose.</p>
          <a href="#free-guide" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition">🎁 Get the Free Guide</a>
        </div>
      </section>

      {/* NAVBAR */}
      <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ZenMedia.ai Logo" width={40} height={40} />
            <h1 className="text-xl font-bold">ZenMedia.ai</h1>
          </div>
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#videos" className="hover:text-blue-600">Videos</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#free-guide" className="hover:text-blue-600">Free Guide</a>
          </nav>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-lg">{darkMode ? '☀️' : '🌙'}</button>
        </div>
      </motion.header>

      {/* TESTIMONIAL */}
      <motion.section className="py-20 text-center bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">💬 What Our Community Says</h2>
        <div className="max-w-4xl mx-auto text-lg italic text-gray-700 dark:text-gray-300">
          “ZenMedia has been a game changer. I launched my first income stream in under 30 days and sleep better than ever.” — Jenna T.
        </div>
      </motion.section>

      {/* VIDEO SECTION */}
      <motion.section id="videos" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Videos</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/vYXSXiV_B34" title="YouTube video" allowFullScreen></iframe>
          <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/jVroOOnDF_4" title="YouTube video" allowFullScreen></iframe>
        </div>
      </motion.section>

      {/* PRODUCT CARDS */}
      <motion.section id="products" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">🧰 Affiliate Tools We Love</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-700 hover:shadow-xl transition">
              <h4 className="font-semibold text-xl mb-2">🔥 Legendary Confidence Challenge</h4>
              <p className="mb-3">Boost your mindset in 5 days with this transformational challenge.</p>
              <a href="https://legendaryconfidencechallenge.com/get-started/enroll?aid=71455" className="text-blue-600 font-medium underline" target="_blank">Join the Challenge</a>
            </div>
            <div className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-700 hover:shadow-xl transition">
              <h4 className="font-semibold text-xl mb-2">🚀 Learn Launch Lead Challenge</h4>
              <p className="mb-3">Grow your brand and income with our digital blueprint.</p>
              <a href="https://learnlaunchleadchallenge.com/get-started/enroll?aid=71455" className="text-blue-600 font-medium underline" target="_blank">Start Now</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FREE GUIDE CTA */}
      <motion.section id="free-guide" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-blue-600 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">🎁 Free PDF Guide</h3>
        <p className="mb-6">Top 10 ways working parents can reclaim calm and clarity daily.</p>
        <a href="/Zen_Starter_Kit.pdf" download className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
          Download the Zen Starter Kit
        </a>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo.png" alt="ZenMedia Logo" width={48} height={48} className="mb-4" />
            <p>Empowering super-parents, creators, and entrepreneurs through AI-driven tools and mindful strategies.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#videos" className="hover:underline">Videos</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#free-guide" className="hover:underline">Free Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/ZenMedia.ai" target="_blank" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.facebook.com/ZenMedia.ai" target="_blank" className="hover:underline">Facebook</a></li>
              <li><a href="https://www.youtube.com/@Zen_Media_ai" target="_blank" className="hover:underline">YouTube</a></li>
              <li><a href="https://www.tiktok.com/@zenmedia.ai" target="_blank" className="hover:underline">TikTok</a></li>
              <li><a href="mailto:info@zenmedia.ai" className="hover:underline">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-gray-500">© 2025 ZenMedia.ai — All rights reserved.</div>
      </footer>

      {/* Floating CTA */}
      <a href="#free-guide" className="fixed bottom-5 right-5 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700">🎁 Get Free Guide</a>
    </main>
  );
}
