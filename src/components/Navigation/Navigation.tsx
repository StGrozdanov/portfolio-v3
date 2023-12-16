'use client'

import { useBurgerContext } from '../../hooks/useBurgerContext';
import styles from './Navigation.module.scss';
import ReactScrollNavElements from './modules/ReactScrollNavElements/ReactScrollNavElements';
import ReactRouterNavElements from './modules/ReactRouterNavElements copy/ReactRouterNavElements';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const { isExpanded, update } = useBurgerContext();
    const pathname = usePathname();
    return (
        <nav className={styles.navbar}>
            <Link href={'/'} className={styles.logo}>
                <Image
                    src='/images/logo.png'
                    alt=''
                    width={500}
                    height={500}
                    priority={true}
                />
            </Link>
            <ul
                data-testid="nav-menu"
                className={
                    `${styles['nav-menu']} 
                    ${isExpanded
                        ? `, ${styles['active-menu']}`
                        : ''
                    }`
                }
            >
                {
                    pathname && pathname.includes('jobs') || pathname && pathname.includes('projects')
                        ? <ReactRouterNavElements update={update} />
                        : <ReactScrollNavElements update={update} />
                }
            </ul>
            <div
                data-testid="burger-icon"
                className={`${styles.hamburger} ${isExpanded ? `, ${styles['active-burger']}` : ''}`}
                onClick={update}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    );
}