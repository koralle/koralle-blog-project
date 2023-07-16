// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withVanillaExtract(nextConfig);
