/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export', // ✅ This is the key line Netlify now expects
};

module.exports = nextConfig;
