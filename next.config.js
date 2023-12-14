/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost","tiny-druid-926a04.netlify.app","*",""],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
