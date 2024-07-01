/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'id', // Default bahasa
    locales: ['en', 'id'], // Tambahkan bahasa yang Anda dukung
    localeDetection: false,
  },
};

export default nextConfig;
