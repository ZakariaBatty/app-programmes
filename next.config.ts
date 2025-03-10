import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   output: 'export',
   basePath: '/programmes',
   assetPrefix: '/programmes/',
   images: {
      unoptimized: true,
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            port: '',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
