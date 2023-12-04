'use client'

import DescriptionArticle from "@/components/Jobs/DescriptionArticle/DescriptionArticle";
import HeadingImageArticle from "@/components/Jobs/HeadingImageArticle/HeadingImageArticle";
import ImageArticle from "@/components/Jobs/ImageArticle/ImageArticle";
import NextJobArticle from "@/components/Jobs/NextJobArticle/NextJobArticle";
import ThreeSectionDescriptionArticle from "@/components/Jobs/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";
import { useJobsAndProjectsContext } from "@/hooks/useJobsAndProjectsContext";
import { useParams } from "next/navigation";

export default function JobsDetails() {
    const { jobs, getJobByCompanyName } = useJobsAndProjectsContext();
    const params = useParams();
    const decodedParams = decodeURI(params.company as string);
    const job = getJobByCompanyName(decodedParams);

    return (
        <section>
            <HeadingImageArticle jobImgURL={job?.imgUrl[0]} />
            <ThreeSectionDescriptionArticle {...job} />
            <ImageArticle imgURL={job?.imgUrl[1]} />
            <DescriptionArticle achievements={job?.achievements} />
            <NextJobArticle jobs={jobs} currentJob={job?.company} />
        </section>
    )
}