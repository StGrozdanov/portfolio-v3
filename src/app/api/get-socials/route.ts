import { NextResponse } from "next/server";
import db from '../../../database/database';
import log from '../../../utils/logger';

interface QueryResponse {
    socialMedia: SocialMedia
}

export interface SocialMedia {
    facebook: string,
    linkedIn: string,
    github: string,
    email: string,
}

/**
 * retrieves social media links for the user such as facebook, linkedin, github 
 * @returns SocialMedia interface or an empty object
 */
export async function GET() {
    try {
        const socialMedias: QueryResponse[] = await db.query(
            `SELECT social_media AS socialMedia FROM users WHERE users.id = 1`
        );
        return NextResponse.json(socialMedias.length > 0 ? socialMedias[0].socialMedia : {}, { status: 200 })
    } catch (err) {
        log.error(err)
        return NextResponse.json(undefined, { status: 500 });
    }
}