/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'dd.b.pvp.net',
          },
          {
            protocol: 'https',
            hostname: 'dd.b.pvp.net',
          },
        ],
      },
};

export default nextConfig;
