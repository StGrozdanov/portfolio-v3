import { JobsAndProjects, ProjectsDetails } from "@/app/api/jobs-and-projects/route";
import HeadingImageArticle from "@/components/Jobs/HeadingImageArticle/HeadingImageArticle";
import ImageArticle from "@/components/Jobs/ImageArticle/ImageArticle";
import DescriptionArticle from "@/components/Projects/DescriptionArticle/DescriptionArticle";
import NextProjectArticle from "@/components/Projects/NextProjectArticle/NextProjectArticle";
import ThreeSectionDescriptionArticle from "@/components/Projects/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";

type Props = {
    params: {
        title: string
    }
}

const getProjectByTitle = (projects: ProjectsDetails[], title: string) => projects?.find(project => title === project.title);

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : process.env.BASE_API_URL;

export default async function ProjectsDetails({ params: { title } }: Props) {
    const jobsAndProjectsData = await fetch(`${BASE_URL}/jobs-and-projects`);
    const jobsAndProjects = await jobsAndProjectsData.json() as unknown as JobsAndProjects;
    const decodedParams = decodeURI(title);
    const project = getProjectByTitle(jobsAndProjects.projects, decodedParams);

    return (
        <section>
            <HeadingImageArticle image={project?.images[0]} />
            <ThreeSectionDescriptionArticle {...project} />
            <ImageArticle image={project?.images[1]} />
            <DescriptionArticle description={project?.description} />
            <NextProjectArticle currentProject={project?.title} projects={jobsAndProjects.projects} />
        </section>
    )
}

export async function generateStaticParams() {
    const jobsAndProjectsResponse = await fetch(`${BASE_URL}/jobs-and-projects`);
    const jobsAndProjectsData = await jobsAndProjectsResponse.json() as unknown as JobsAndProjects;
    return jobsAndProjectsData.projects.map(project => project.title);
}