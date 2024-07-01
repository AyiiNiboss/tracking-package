/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'default', // Default bahasa
    locales: ['default', 'en', 'id'], // Tambahkan bahasa yang Anda dukung
    localeDetection: false,
  },
};

export default nextConfig;
