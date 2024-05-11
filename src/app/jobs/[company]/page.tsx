import DescriptionArticle from "@/components/Jobs/DescriptionArticle/DescriptionArticle";
import HeadingImageArticle from "@/components/Jobs/HeadingImageArticle/HeadingImageArticle";
import ImageArticle from "@/components/Jobs/ImageArticle/ImageArticle";
import NextJobArticle from "@/components/Jobs/NextJobArticle/NextJobArticle";
import ThreeSectionDescriptionArticle from "@/components/Jobs/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";
import { getJobsAndProjectsData } from "@/database/queries";

type Props = {
    params: {
        company: string
    }
}

export default async function JobsDetails({ params: { company } }: Props) {
    const jobsAndProjectsData = await getJobsAndProjectsData();
    const companyName = decodeURI(company);

    if (jobsAndProjectsData?.jobs) {
        const job = jobsAndProjectsData.jobs.find(job => companyName === job.company);

        return (
            <section>
                <HeadingImageArticle image={job?.images[0]} />
                <ThreeSectionDescriptionArticle {...job} />
                <ImageArticle image={job?.images[1]} />
                <DescriptionArticle achievements={job?.achievements} />
                <NextJobArticle jobs={jobsAndProjectsData.jobs} currentJob={job?.company} />
            </section>
        )
    }

    return null;
}

export async function generateStaticParams() {
    const jobsAndProjectsData = await getJobsAndProjectsData();
    return jobsAndProjectsData?.jobs ? jobsAndProjectsData.jobs.map(job => job.company) : [];
}
