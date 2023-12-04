import { dbQuery } from "@/database/database";
import { NextResponse } from "next/server";
import log from '../../../utils/logger';

export interface AboutMeResponse {
    techstack: string[],
    softskills: string[],
    hobbies: string[],
}

/**
 * retrieves user info as defined in the BasicInfoResponse interface
 * @returns BasicInfoResponse interface or an empty object
 */
export async function GET() {
    try {
        const { response, isEmpty } = await dbQuery(
            `SELECT technology_stack ::JSONB -> 'techStack' AS techStack,
                    soft_skills ::JSONB -> 'softSkills'     AS softSkills,
                    hobbies ::JSONB -> 'hobbies'            AS hobbies
            FROM users;`
        );

        const result: [] | AboutMeResponse = isEmpty ? response : response[0];
        return NextResponse.json(result, { status: 200 })
    } catch (err) {
        log.error(err)
        return NextResponse.json({ status: 500 });
    }
}