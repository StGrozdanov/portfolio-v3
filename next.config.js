/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'personal-portfolio-web.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        }
    }
}
