import HeadingImageArticle from "@/components/Jobs/HeadingImageArticle/HeadingImageArticle";
import ImageArticle from "@/components/Jobs/ImageArticle/ImageArticle";
import DescriptionArticle from "@/components/Projects/DescriptionArticle/DescriptionArticle";
import NextProjectArticle from "@/components/Projects/NextProjectArticle/NextProjectArticle";
import ThreeSectionDescriptionArticle from "@/components/Projects/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";
import { getJobsAndProjectsData } from "@/database/queries";

type Props = {
    params: {
        title: string
    }
}

export default async function ProjectsDetails({ params: { title } }: Props) {
    const jobsAndProjects = await getJobsAndProjectsData();
    const projectTitle = decodeURI(title);

    if (jobsAndProjects?.projects) {
        const project = jobsAndProjects.projects.find(project => projectTitle === project.title); 
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

    return null
}

export async function generateStaticParams() {
    const jobsAndProjectsData = await getJobsAndProjectsData();
    return jobsAndProjectsData?.projects ? jobsAndProjectsData.projects?.map(project => project.title) : [];
}
