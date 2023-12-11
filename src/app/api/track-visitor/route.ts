import { NextResponse } from "next/server";
import log from '../../../utils/logger';

export const dynamic = 'force-dynamic'
export interface TrackingInfoResponse {
    country_code: string,
    country_name: string,
    city: string,
    postal: string,
    IPv4: string,
    state: string
}

/**
 * retrieves visitor information from outer api  
 * @returns TrackingInfoResponse interface or an empty object
 */
export async function GET() {
    try {
        const response = await fetch('https://geolocation-db.com/json');
        const result: null | TrackingInfoResponse = await response.json();
        return NextResponse.json(result, { status: 200 })
    } catch (err) {
        log.error(err)
        return NextResponse.json({ status: 500 });
    }
}