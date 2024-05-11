import JobsAndProjectsCard from "./modules/JobsAndProjectsCard";
import styles from './ProjectsAndWork.module.scss';
import { getJobsAndProjectsData } from "@/database/queries";
import Animate from "../Animate/Animate";

export default async function ProjectsAndWork() {
    const jobsAndProjects = await getJobsAndProjectsData();
    const jobs = jobsAndProjects?.jobs;
    const projects = jobsAndProjects?.projects;

    return (
        <section id='work' className={styles.container}>
            {jobs?.map(job =>
                <Animate key={job.company + job.title} animationName="zoomIn" >
                    <JobsAndProjectsCard
                        key={job.company + job.title}
                        image={job.images[0]}
                        title={job.company}
                        type="jobs"
                    />
                </Animate>
            )}
            {projects?.map(project =>
                 <Animate key={project.repository} animationName="zoomIn" >
                    <JobsAndProjectsCard
                        key={project.repository}
                        image={project.images[0]}
                        title={project.title}
                        type="projects"
                    />
                </Animate>
            )}
        </section>
    );
}