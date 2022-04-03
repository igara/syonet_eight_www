/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HTTP_OGP_HOST: process.env.NEXT_PUBLIC_HTTP_OGP_HOST,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_PUBLIC_ALGOLIA_APPLICATION_ID: process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
    NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY:
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY,
    NEXT_PUBLIC_ALGOLIA_WWW_PAGE_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_WWW_PAGE_INDEX,
  },
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
