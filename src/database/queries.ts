import { dbQuery } from "./database";
import logger from "@/utils/logger";
import { AboutMeResponse, BasicInfoResponse, JobsAndProjects, SocialMedia } from "@/interfaces/interfaces";
import { unstable_cache as cache } from "next/cache";

const aboutMeQuery = async (): Promise<AboutMeResponse | undefined> => {
    try {
        const { response, isEmpty } = await dbQuery(
            `SELECT technology_stack ::JSONB -> 'techStack' AS techStack,
                    soft_skills ::JSONB -> 'softSkills'     AS softSkills,
                    hobbies ::JSONB -> 'hobbies'            AS hobbies
            FROM users;`
        );

        return isEmpty ? undefined : response[0];
    } catch (err) {
        logger.error(err);
        return undefined
    }
}

const basicInfoQuery = async (): Promise<BasicInfoResponse | undefined> => {
    try {
        const { response, isEmpty } = await dbQuery(
            `SELECT email,
                    cv_link  AS cvLink,
                    about_me AS aboutMe,
                    partners,
                    carousel
            FROM users;`
        );

        return isEmpty ? undefined : response[0];
    } catch (err) {
        logger.error(err);
        return undefined
    }
}

const getSocialsQuery = async (): Promise<SocialMedia | undefined> => {
    try {
        const { response, isEmpty } = await dbQuery(
            `SELECT social_media ::JSONB -> 'facebook'  AS facebook,
                    social_media ::JSONB -> 'email'     AS email,
                    social_media ::JSONB -> 'linkedIn'  AS linkedIn,
                    social_media ::JSONB -> 'github'    AS github
             FROM users 
             WHERE users.id = :user_id`,
            { user_id: 1 }
        );

        return isEmpty ? undefined : response[0];
    } catch (err) {
        logger.error(err);
        return undefined
    }
}

const getJobsAndProjectsQuery = async (): Promise<JobsAndProjects | undefined> => {
    try {
        const { response, isEmpty } = await dbQuery(`SELECT jobs, projects FROM users;`);

        return isEmpty ? undefined : response[0];
    } catch (err) {
        logger.error(err);
        return undefined
    }
}

/**
 * makes a DB request and retrives about me data with a cache key of about-me
 */
export const getAboutMeData = cache(aboutMeQuery, ['about-me'], {
    tags: ['about-me'],
});

/**
 * makes a DB request and retrives basic info data with a cache key of basic-info
 */
export const getBasicInfoData = cache(basicInfoQuery, ['basic-info'], {
    tags: ['basic-info'],
});

/**
 * makes a DB request and retrives socials links data with a cache key of socials
 */
export const getSocialsData = cache(getSocialsQuery, ['socials'], {
    tags: ['socials'],
});

/**
 * makes a DB request and retrives jobs and projects data with a cache key of jobs-projects
 */
export const getJobsAndProjectsData = cache(getJobsAndProjectsQuery, ['jobs-projects'], {
    tags: ['jobs-projects'],
});
