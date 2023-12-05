export const BASE_API_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : process.env.BASE_API_URL;