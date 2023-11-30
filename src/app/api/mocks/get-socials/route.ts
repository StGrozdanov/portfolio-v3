import { NextResponse } from "next/server";
import * as data from '../../../../tests/mocks/data.mock';

/**
 * retrieves social media links for the user such as facebook, linkedin, github 
 * @returns SocialMedia interface or an empty object
 */
export async function GET() {
    return NextResponse.json(data.mockSocialsResponse, { status: 200 })
}