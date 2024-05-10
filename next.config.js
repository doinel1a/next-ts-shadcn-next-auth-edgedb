/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * Useful for Docker builds.
 */
await import('./src/env.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;

