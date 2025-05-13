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

      {/* ANNOUNCEMENT */}
      <div className="bg-yellow-400 text-black text-center py-2 text-sm font-semibold">
        🚨 Get the Free Zen Starter Kit PDF Today — Limited Time Download!
      </div>

      {/* HERO */}
      <section className="relative bg-black bg-cover bg-center h-screen text-white">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <Image src={logo} alt="ZenMedia.ai Logo" width={80} height={80} className="mb-4" priority />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Find Your Digital Zen</h1>
          <p className="text-lg md:text-xl max-w-xl mb-6">Empowering creators & super-parents with AI tools for income, peace, and purpose.</p>
          <a href="#free-guide" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition">🎁 Get the Free Guide</a>

          {/* MAILCHIMP FORM */}
          <div id="mc_embed_shell" className="mt-6">
            <style jsx>{`
              #mc_embed_signup {
                background: #fff;
                font: 14px Helvetica, Arial, sans-serif;
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
              }
              input[type='email'], input[type='text'] {
                width: 100%;
                padding: 0.5rem;
                margin-bottom: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 5px;
              }
              input.button {
                background-color: #10b981;
                color: white;
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
            `}</style>
            <div id="mc_embed_signup">
              <form action="https://zenmedia.us6.list-manage.com/subscribe/post?u=e52cf29046d53765ada9d79d1&amp;id=3bc5cb55bf&amp;f_id=00350ee2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required placeholder="Email address*" />
                  </div>
                  <div className="mc-field-group">
                    <input type="text" name="FNAME" className=" text" id="mce-FNAME" placeholder="First Name" />
                  </div>
                  <div className="mc-field-group">
                    <input type="text" name="LNAME" className=" text" id="mce-LNAME" placeholder="Last Name" />
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_e52cf29046d53765ada9d79d1_3bc5cb55bf" tabIndex={-1} defaultValue="" />
                  </div>
                  <div className="clear">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">What Our Users Say</h3>
        <div className="max-w-4xl mx-auto overflow-hidden relative">
          <div className="flex animate-marquee space-x-10">
            <blockquote className="w-80 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              "This guide gave me clarity and a real plan to start earning. Love the simplicity!"
              <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">— Alex M., Creator</footer>
            </blockquote>
            <blockquote className="w-80 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              "It feels like this site was built just for me — tools, motivation, and strategy."
              <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">— Jamie R., Parentpreneur</footer>
            </blockquote>
            <blockquote className="w-80 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              "The weekly Zen tips are my new Sunday reset ritual. 10/10."
              <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">— Casey L., Remote Worker</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SOCIAL SIDEBAR */}
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://zenmedia.ai" target="_blank" className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700" aria-label="Share on Facebook">Fb</a>
        <a href="https://twitter.com/intent/tweet?url=https://zenmedia.ai" target="_blank" className="bg-blue-400 text-white p-2 rounded-full shadow hover:bg-blue-500" aria-label="Share on Twitter">X</a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://zenmedia.ai" target="_blank" className="bg-blue-800 text-white p-2 rounded-full shadow hover:bg-blue-900" aria-label="Share on LinkedIn">In</a>
      </div>

      {/* EXIT POPUP */}
      <div id="exit-popup" className="hidden fixed inset-0 bg-black bg-opacity-60 z-50 items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Wait! Don't leave yet 🚨</h3>
          <p className="mb-4">Grab your free Zen Starter Kit PDF before you go.</p>
          <a href="/Zen_Starter_Kit.pdf" download className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">Download Now</a>
        </div>
      </div>
    </main>
  );
}
