import { withKumaUI } from '@kuma-ui/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
    typedRoutes: true,
    isrMemoryCacheSize: 0,
  },
};

export default withKumaUI(nextConfig);
