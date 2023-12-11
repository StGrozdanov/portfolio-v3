import { NextResponse } from "next/server";
import log from '../../../utils/logger';
import { dbQuery } from '../../../database/database';

export const dynamic = 'force-dynamic'
export interface JobDetails {
    company: string,
    imgUrl: string[],
    title: string,
    started_at: Date,
    ended_at: Date | null,
    concept: string,
    achievements: string[],
    techStack: string[],
}

export interface ProjectsDetails {
    title: string,
    imgUrl: string[],
    startedAt: Date,
    endedAt: Date | null,
    description: string,
    link: string,
    repository: string,
    summary: string,
    techStack: string[],
}

export interface JobsAndProjects {
    jobs: JobDetails[],
    projects: ProjectsDetails[],
}

/**
 * retrieves all jobs and projects from the database
 * @returns Jobs And Projects interface containing all the jobs and projects or an empty object
 */
export async function GET() {
    try {
        const { response, isEmpty } = await dbQuery(
            `SELECT jobs,
                    projects
             FROM users;`,
        );
        const result: [] | JobsAndProjects = isEmpty ? response : response[0];
        return NextResponse.json(result, { status: 200 })
    } catch (err) {
        log.error(err)
        return NextResponse.json({ status: 500 });
    }
}