/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'replicate.delivery', // If using Replicate
      'firebasestorage.googleapis.com' // If using Firebase Storage
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, { "utf-8-validate": "commonjs utf-8-validate" }];  // Required for some WebSocket implementations
    return config;
  }
};

module.exports = nextConfig; 