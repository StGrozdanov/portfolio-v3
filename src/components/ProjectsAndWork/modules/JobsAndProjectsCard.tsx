import styles from './JobsAndProjectsCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Images } from '@/app/api/jobs-and-projects/route';

interface JobsAndProjectsCardProps {
    image: Images,
    title: string,
    type: 'projects' | 'jobs',
}

export default function JobsAndProjectsCard({ type, image, title }: JobsAndProjectsCardProps) {
    return (
        <article className={styles.container}>
            <Link href={`/${type}/${title}`}>
                <div className={styles['hover-layer']} />
                <FontAwesomeIcon className={styles['hover-link-icon']} icon={faCircleInfo} bounce />
                <Image
                    className={styles.image}
                    src={image.imgURL}
                    alt=''
                    width={image.width}
                    height={image.height}
                />
                <span className={styles.title}>{title}</span>
            </Link>
        </article>
    );
}