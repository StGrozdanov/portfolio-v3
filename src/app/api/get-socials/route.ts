import { NextResponse } from "next/server";
import log from '../../../utils/logger';
import { dbQuery } from '../../../database/database';

export const revalidate = 900;

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
        const { response, isEmpty } = await dbQuery(
            `SELECT social_media AS socialMedia 
             FROM users 
             WHERE users.id = :user_id`,
            { user_id: 1 }
        );

        const result: [] | SocialMedia = isEmpty ? response : response[0].socialmedia;

        return NextResponse.json(result, { status: 200 })
    } catch (err) {
        log.error(err)
        return NextResponse.json({ status: 500 });
    }
}