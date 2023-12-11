import { CarouselImage } from "@/components/Introduction/modules/hooks/useCarouselData";
import { dbQuery } from "@/database/database";
import { NextResponse } from "next/server";
import log from '../../../utils/logger';

export const revalidate = 900;
export interface BasicInfoResponse {
    email: string,
    cvlink: string,
    aboutme: string,
    partners: string[],
    carousel: CarouselImage[],
}

/**
 * retrieves user info as defined in the BasicInfoResponse interface
 * @returns BasicInfoResponse interface or an empty object
 */
export async function GET() {
    try {
        const { response, isEmpty } = await dbQuery(
            `SELECT email,
                    cv_link  AS cvLink,
                    about_me AS aboutMe,
                    partners,
                    carousel
            FROM users;`
        );

        const result: [] | BasicInfoResponse = isEmpty ? response : response[0];
        return NextResponse.json(result, { status: 200 })
    } catch (err) {
        log.error(err)
        return NextResponse.json({ status: 500 });
    }
}