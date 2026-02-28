'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./Header.module.css";
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollYRef = useRef(0);

    const isActive = (path: string) => {
        return pathname === path;
    };

    const handleCall = () => {
        window.location.href = 'tel:+79214060896';
    };
    const handleEmail = () => {
        window.location.href = 'mailto:tara@tara-business.ru';
    };

    return (
        <div className="header-wrapper">
            <header className={styles.header}>
                <div className={styles.container}>

                    <Image src="/logo.svg" alt="Logo" width={220} height={68} className={styles.logo}/>

                    <nav className={styles.desktopNav}>
                        <Link
                            href="/"
                            className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
                        >
                            О компании
                        </Link>
                        <Link
                            href="/catalog"
                            className={`${styles.link} ${isActive('/catalog/') ? styles.active : ''}`}
                        >
                            Наши поддоны
                        </Link>
                    </nav>

                    <div className={styles.contacts}>
                        <Image src="/phone.svg" alt="Logo" width={39} height={43} onClick={handleCall} className={styles.phone}/>
                        <Image src="/email.svg" alt="Logo" width={55} height={33} onClick={handleEmail} className={styles.email}/>
                    </div>
                </div>
            </header>
        </div >
    );
};

export default Header;