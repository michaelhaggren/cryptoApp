module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'assets.coingecko.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
1;
