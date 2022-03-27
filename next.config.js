/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ogp.syonet.work', 'localhost'],
  },
  webpack: (config, { dev, dir }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      include: [dir],
      use: [
        'swc-loader',
        {
          loader: '@svgr/webpack',
          options: { babel: false },
        },
      ],
    });

    return config;
  },
  experimental: {
    optimizeFonts: true,
  },
};
