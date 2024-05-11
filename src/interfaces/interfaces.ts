import { CarouselImage, CarouselImageData } from "@/components/Introduction/modules/hooks/useCarouselData";

export interface CarouselProps {
    images: CarouselImage[],
    carouselChangeHandler: (label: CarouselImageData) => void,
    currentCarouselLabel: CarouselImageData,
    slideProgress: number,
}

export interface AboutMeResponse {
    techstack: string[],
    softskills: string[],
    hobbies: string[],
}
export interface Partner {
    imgURL: string,
    width: number,
    height: number,
}
export interface BasicInfoResponse {
    email: string,
    cvlink: string,
    aboutme: string,
    partners: Partner[],
    carousel: CarouselImage[],
}

export interface SocialMedia {
    facebook: string,
    linkedin: string,
    github: string,
    email: string,
}

export interface JobDetails {
    company: string,
    images: Images[],
    title: string,
    started_at: Date,
    ended_at: Date | null,
    concept: string,
    achievements: string[],
    techStack: string[],
}

export interface Images {
    imgURL: string,
    width: number,
    height: number,
}

export interface ProjectsDetails {
    title: string,
    images: Images[],
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