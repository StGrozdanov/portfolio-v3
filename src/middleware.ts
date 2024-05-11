import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
        const { device } = userAgent(request);
        const visitationDevice = device.type;

        if (visitationDevice) {
            const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(visitationDevice);
            const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(visitationDevice);

            const device = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Laptop / Desktop';

            fetch(`${process.env.NEXT_PUBLIC_TRACKING_API}/analytics/track`, {
                method: 'POST',
                body: JSON.stringify({
                    deviceType: device,
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            }).catch(err => console.error(err));
        }
    }

    return NextResponse.next();
}
