/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'example.com',
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;
