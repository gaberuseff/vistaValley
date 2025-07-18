/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ulubznmnvepevknyjlee.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/cabin-images/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/ACg8ocJSwRWhpT5jFZXF03AdUY_QUmumUm9pAlpKYbCXr4elh0SResM=s96-c/**',
                search: '',
            },
        ],
    },
    // output: 'export',
};

export default nextConfig