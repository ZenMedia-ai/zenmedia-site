import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>ZenMedia.ai – Find Your Digital Zen</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-200 flex flex-col items-center justify-start">
        {/* Top Banner */}
        <div className="w-full bg-blue-100 text-blue-900 py-2 flex justify-center items-center text-sm font-medium">
          <span role="img" aria-label="gift">🎁</span>
          <span className="ml-2">Get the Free Zen Starter Kit PDF Today — Limited Time Download!</span>
        </div>
        
        {/* Logo */}
        <div className="mt-8">
          <Image src={logo} alt="Zen Media Logo" width={110} height={110} className="rounded-xl shadow-md" />
        </div>

        {/* Main Title */}
        <h1 className="mt-8 text-4xl font-bold text-gray-900 text-center">Find Your Digital Zen</h1>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
          Empowering creators & super-parents with AI tools for income, peace, and purpose.
        </p>

        {/* Free Guide Button */}
        <a
          href="#"
          className="mt-4 inline-flex items-center text-lg font-semibold text-white bg-blue-500 px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
        >
          <span role="img" aria-label="gift">🎁</span>
          <span className="ml-2">Get the Free Guide</span>
        </a>

        {/* Email Signup */}
        <form className="w-full max-w-xl mt-10 bg-white/80 rounded-xl shadow-md p-6 flex flex-col gap-4">
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Email address*"
            required
          />
          <div className="flex gap-3">
            <input
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="First Name"
            />
            <input
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <button
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
