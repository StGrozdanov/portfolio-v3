'use client'

import HeadingImageArticle from "@/components/Jobs/HeadingImageArticle/HeadingImageArticle";
import ImageArticle from "@/components/Jobs/ImageArticle/ImageArticle";
import DescriptionArticle from "@/components/Projects/DescriptionArticle/DescriptionArticle";
import NextProjectArticle from "@/components/Projects/NextProjectArticle/NextProjectArticle";
import ThreeSectionDescriptionArticle from "@/components/Projects/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";
import { useJobsAndProjectsContext } from "@/hooks/useJobsAndProjectsContext";
import { useParams } from "next/navigation";

export default function ProjectsDetails() {
    const { projects, getProjectByTitle } = useJobsAndProjectsContext();
    const params = useParams();
    const decodedParams = decodeURI(params.title as string);
    const project = getProjectByTitle(decodedParams);

    return (
        <section>
            <HeadingImageArticle jobImgURL={project?.imgUrl[0]} />
            <ThreeSectionDescriptionArticle {...project} />
            <ImageArticle imgURL={project?.imgUrl[1]} />
            <DescriptionArticle description={project?.description} />
            <NextProjectArticle currentProject={project?.title} projects={projects} />
        </section>
    )
}