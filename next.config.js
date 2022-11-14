/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    optimizeFonts: true,
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};
