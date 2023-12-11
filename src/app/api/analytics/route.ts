import { NextResponse } from "next/server";
import log from '../../../utils/logger';
import { dbQuery } from "@/database/database";
import * as validator from '../../../utils/validator';
import moment from "moment";

export const dynamic = 'force-dynamic'
export interface Visitation {
    ipAddress: string,
    originCountry: string,
    deviceType: string,
    date?: string, 
}

/**
 * validates visitation data and if valid, records the visitation into the database
 * @returns 201 if visitation is recorded
 */
export async function POST(request: Request) {
    try {        
        const visitationData: Visitation = await request.json();

        const validation = validator.analyticsParamsAreValid(visitationData);

        if (validation.isValid) {
            const currentDateTime = moment().utc(true).format('YYYY-MM-DD HH:mm:ss');
            visitationData.date = currentDateTime;

            await dbQuery(
                `INSERT INTO analytics (date_time, device_type, origin_country, ip_address)
                VALUES (:date, :deviceType, :originCountry, :ipAddress);`,
                { ...visitationData }
            );
 
            return NextResponse.json({ status: 201 })
        }
        return NextResponse.json(validation, { status: 400 })
    } catch (err) {
        log.error(err)
        return NextResponse.json({ status: 500 });
    }
}