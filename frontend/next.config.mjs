/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    IMPACT_ACCOUNT_SID: process.env.IMPACT_ACCOUNT_SID,
    IMPACT_AUTH_TOKEN: process.env.IMPACT_AUTH_TOKEN,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/impact",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.impact.com",
      },
      {
        protocol: "https",
        hostname: "**", // Added this line
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
