/** @type {import('next').NextConfig} */
const nextConfig =
{
    images:
    {
        domains: ['avatars.githubusercontent.com']
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
    	unoptimized: true
    }
};

module.exports = nextConfig;