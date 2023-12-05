'use client'

import styles from './ReactRouterNavElements.module.scss';
import { scroller } from 'react-scroll';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

type ReactRouterNavElementsProps = { update: () => void }

export default function ReactRouterNavElements({ update }: ReactRouterNavElementsProps) {
    const router = useRouter();

    const navigateHandler = useCallback((to: string) => {
        update();
        router.push(`/`);
        setTimeout(() => scroller.scrollTo(to, {
            smooth: true,
            duration: 1400,
            activeClass: styles.active,
            spy: true,
        }), 200);
    }, [update]);

    return (
        <>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('intro')}>Introduction</a>
            </li>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('about')}>About Me</a>
            </li>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('work')}>My Work</a>
            </li>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('contacts')}>Contact Me</a>
            </li>
        </>
    );
}