import { JobDetails, JobsAndProjects } from "@/app/api/jobs-and-projects/route";
import DescriptionArticle from "@/components/Jobs/DescriptionArticle/DescriptionArticle";
import HeadingImageArticle from "@/components/Jobs/HeadingImageArticle/HeadingImageArticle";
import ImageArticle from "@/components/Jobs/ImageArticle/ImageArticle";
import NextJobArticle from "@/components/Jobs/NextJobArticle/NextJobArticle";
import ThreeSectionDescriptionArticle from "@/components/Jobs/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";

type Props = {
    params: {
        company: string
    }
}

const getJobByCompanyName = (jobs: JobDetails[], companyName: string) => jobs?.find(job => companyName === job.company);

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : process.env.BASE_API_URL;

export default async function JobsDetails({ params: { company } }: Props) {
    const jobsAndProjectsData = await fetch(`${BASE_URL}/jobs-and-projects`);
    const jobsAndProjects = await jobsAndProjectsData.json() as unknown as JobsAndProjects;
    const decodedParams = decodeURI(company);
    const job = getJobByCompanyName(jobsAndProjects.jobs, decodedParams);

    return (
        <section>
            <HeadingImageArticle jobImgURL={job?.imgUrl[0]} />
            <ThreeSectionDescriptionArticle {...job} />
            <ImageArticle imgURL={job?.imgUrl[1]} />
            <DescriptionArticle achievements={job?.achievements} />
            <NextJobArticle jobs={jobsAndProjects.jobs} currentJob={job?.company} />
        </section>
    )
}

export async function generateStaticParams() {
    const jobsAndProjectsResponse = await fetch(`${BASE_URL}/jobs-and-projects`);
    const jobsAndProjectsData = await jobsAndProjectsResponse.json() as unknown as JobsAndProjects;
    return jobsAndProjectsData.jobs.map(job => job.company);
}