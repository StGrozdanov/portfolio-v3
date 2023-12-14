'use client'

import { createContext, useEffect, useState } from "react";
import { ContainerProps } from "./types";
import { JobDetails, JobsAndProjects, ProjectsDetails } from "@/app/api/jobs-and-projects/route";

export interface JobsAndProjectsContextType {
    getJobByCompanyName: (companyName: string) => JobDetails | undefined,
    getProjectByTitle: (title: string) => ProjectsDetails | undefined,
    jobs: JobDetails[],
    projects: ProjectsDetails[],
}

export const JobsAndProjectsContext = createContext<JobsAndProjectsContextType | null>(null);

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : process.env.NEXT_PUBLIC_BASE_API_URL;

export const JobsAndProjectsProvider = ({ children }: ContainerProps) => {
    const [jobs, setJobs] = useState<JobDetails[]>([]);
    const [projects, setProjects] = useState<ProjectsDetails[]>([]);

    useEffect(() => {
        fetch(`${BASE_URL}/jobs-and-projects`)
            .then(response => response.json())
            .then(result => {
                const jobsAndProjects = result as unknown as JobsAndProjects;
                setJobs(jobsAndProjects.jobs);
                setProjects(jobsAndProjects.projects);
            })
    }, []);

    const getJobByCompanyName = (companyName: string) => jobs?.find(job => companyName === job.company);

    const getProjectByTitle = (title: string) => projects?.find(project => title === project.title);

    return (
        <JobsAndProjectsContext.Provider value={{
            getJobByCompanyName,
            jobs,
            getProjectByTitle,
            projects,
        }}>
            {children}
        </JobsAndProjectsContext.Provider>
    );
}