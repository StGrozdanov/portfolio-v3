import styles from './JobsAndProjectsCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

interface JobsAndProjectsCardProps {
    imgUrl: string,
    title: string,
    type: 'projects' | 'jobs',
}

export default function JobsAndProjectsCard({ type, imgUrl, title }: JobsAndProjectsCardProps) {
    return (
        <article className={styles.container}>
            <Link href={`/${type}/${title}`}>
                <div className={styles['hover-layer']} />
                <FontAwesomeIcon className={styles['hover-link-icon']} icon={faCircleInfo} bounce />
                <Image className={styles.image} src={imgUrl} alt='' width={1000} height={1000} />
                <span className={styles.title}>{title}</span>
            </Link>
        </article>
    );
}