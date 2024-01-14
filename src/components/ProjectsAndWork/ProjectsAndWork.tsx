'use client'

import { useJobsAndProjectsContext } from "@/hooks/useJobsAndProjectsContext";
import JobsAndProjectsCard from "./modules/JobsAndProjectsCard";
import styles from './ProjectsAndWork.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ProjectsAndWork() {
    const { jobs, projects } = useJobsAndProjectsContext();
    return (
        <section id='work' className={styles.container}>
            {jobs.map(job =>
                <AnimationOnScroll key={job.company + job.title} animateIn='animate__zoomIn' animateOnce={true}>
                    <JobsAndProjectsCard
                        key={job.company + job.title}
                        image={job.images[0]}
                        title={job.company}
                        type="jobs"
                    />
                </AnimationOnScroll>
            )}
            {projects.map(project =>
                <AnimationOnScroll key={project.repository} animateIn='animate__zoomIn' animateOnce={true}>
                    <JobsAndProjectsCard
                        key={project.repository}
                        image={project.images[0]}
                        title={project.title}
                        type="projects"
                    />
                </AnimationOnScroll>
            )}
        </section>
    );
}