export const BASE_API_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? '/api'
    : process.env.BASE_API_URL;

export const NEXT_BASE_API_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? '/api'
    : process.env.NEXT_PUBLIC_BASE_API_URL;