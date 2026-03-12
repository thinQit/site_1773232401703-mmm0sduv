const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

nextConfig.typescript = Object.assign(nextConfig.typescript || {}, { ignoreBuildErrors: true });
nextConfig.eslint = Object.assign(nextConfig.eslint || {}, { ignoreDuringBuilds: true });
module.exports = nextConfig;
