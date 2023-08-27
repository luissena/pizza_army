/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["naujadmfrtsfswtpbiyx.supabase.co"],
  },
}

module.exports = nextConfig
