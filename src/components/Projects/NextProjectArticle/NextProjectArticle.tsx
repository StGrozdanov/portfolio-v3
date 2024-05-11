'use client'

import { useCallback } from 'react';
import styles from './NextProjectArticle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { ProjectsDetails } from '@/interfaces/interfaces';

interface NextProjectArticleProps {
    projects: ProjectsDetails[],
    currentProject: string | undefined
}

export default function NextProjectArticle({ projects, currentProject }: NextProjectArticleProps) {
    const findTheNextArticle = useCallback((projects: ProjectsDetails[]) => {
        return projects
            ?.map((project, currentProjectIndex) => {
                if (project.title === currentProject && currentProjectIndex + 1 < projects.length) {
                    return projects[currentProjectIndex + 1];
                } else if (project.title === currentProject && currentProjectIndex + 1 >= projects.length) {
                    return projects[0];
                }
            })
            .filter(project => project != undefined);
    }, [currentProject]);

    return (
        <article style={{ position: 'relative' }}>
            <section className={styles['next-project-redirect-section']}>
                <Link style={{ color: 'inherit' }} href={`/projects/${findTheNextArticle(projects)[0]?.title}`}>
                    <span>
                        Next Project
                        <FontAwesomeIcon icon={faArrowRightLong} beatFade style={{ marginLeft: 20 }} />
                    </span>
                </Link>
                <h2 className={styles['img-article-heading']}>{findTheNextArticle(projects)[0]?.title}</h2>
            </section>
            <div
                className={styles['img-article-container']}
                style={{ backgroundImage: `url(${findTheNextArticle(projects)[0]?.images[0].imgURL})` }}
            />
        </article>
    );
}