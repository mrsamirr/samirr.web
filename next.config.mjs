/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'creatorspace.imgix.net',
        },
        {
          protocol: 'https',
          hostname: 'skillicons.dev',
        },
      ],
    },
  };
export default nextConfig;
