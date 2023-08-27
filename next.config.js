/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: process.env.NEXT_PUBLIC_DEFAULT_REDIRECT,
        permanent: true,
      },
    ]
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["naujadmfrtsfswtpbiyx.supabase.co"],
  },
}

module.exports = nextConfig
