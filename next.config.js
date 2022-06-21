/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
