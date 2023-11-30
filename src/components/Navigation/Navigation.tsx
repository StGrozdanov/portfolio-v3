'use client'

import styles from './Navigation.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll/modules';
import Image from 'next/image';

export default function Navigation() {
    const [isActive, setIsActive] = useState(false);
    return (
        <nav className={styles.navbar}>
            <Link href={'/'} className={styles.logo}>
                <Image src='/images/logo.png' alt='' width={500} height={500} />
            </Link>
            <ul
                data-testid="nav-menu"
                className={
                    `${styles['nav-menu']} 
                    ${isActive
                        ? `, ${styles['active-menu']}`
                        : ''
                    }`
                }
            >
                <li className={styles['nav-item']}>
                    <ScrollLink
                        to='intro'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={() => setIsActive(!isActive)}
                    >
                        Introduction
                    </ScrollLink>
                </li>
                <li className={styles['nav-item']}>
                    <ScrollLink
                        to='about'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={() => setIsActive(!isActive)}
                    >
                        About Me
                    </ScrollLink>
                </li>
                <li className={styles['nav-item']}>
                    <ScrollLink
                        to='work'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={() => setIsActive(!isActive)}
                    >
                        My Work
                    </ScrollLink>
                </li>
                <li className={styles['nav-item']}>
                    <ScrollLink
                        to='contacts'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={() => setIsActive(!isActive)}
                    >
                        Contact Me
                    </ScrollLink>
                </li>
            </ul>
            <div
                data-testid="burger-icon"
                className={`${styles.hamburger} ${isActive ? `, ${styles['active-burger']}` : ''}`}
                onClick={() => setIsActive(!isActive)}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    );
}