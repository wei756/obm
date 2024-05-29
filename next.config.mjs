import withPWA from 'next-pwa';
const pwa = withPWA({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default pwa(nextConfig);
