/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ Disable optimization for Netlify static export
  },
};

module.exports = nextConfig;
