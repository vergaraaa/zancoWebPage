import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();

    useEffect(() => {
        if (router.pathname == '/contact' || router.pathname == '/packaging') {
            document.querySelector('nav').style.backgroundColor = 'black';
        }
        else {
            window.addEventListener('scroll', () => {
                document.getElementById('#nav').classList.toggle(styles.navbarBg, window.scrollY > 0);
                document.querySelector('nav').classList.toggle(styles.windowscroll, window.scrollY > 0);
            });
        }
    })

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${router.pathname == '/contact' || router.pathname == '/packaging' ? '' : 'bg-transparent '} fixed-top`} style={{ height: '6rem', color: 'white!important' }}>
            <div id='#nav' className={`container-fluid`}>
                <Link href="/">
                    <a className={`${styles.abs} navbar-brand`}>
                        <Image src="/img/logo_zanco.png" height='70px' width='70px' />
                    </a>
                </Link>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`container-lg ${styles.navbarBg}`}>
                    <div className={`navbar-collapse collapse `} id="collapseNavbar">
                        <ul className={`navbar-nav ${styles.navbarAlignment}`}>
                            <li className="nav-item ">
                                <Link href="/"  >
                                    <a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/" ? styles.activeLink : ""}`}>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/#about'><a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/#about" ? styles.activeLink : ""}`}>About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/#testimonials'><a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/#testimonials" ? styles.activeLink : ""}`}>Testimonials</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/#faqs'><a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/#faqs" ? styles.activeLink : ""}`}>FAQs</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/contact" ? styles.activeLink : ""}`}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={`navbar-nav ms-auto`}>
                            <li className="nav-item">
                                <Link href="/packaging">
                                    <a className={`nav-link ${styles.navlinkright} ${router.pathname == "/packaging" ? styles.activeLink : ""}`}>Packaging</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#catalogue">
                                    <a className={`nav-link ${styles.navlinkright} ${router.asPath == "/#catalogue" ? styles.activeLink : ""}`}>Download Catalog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/home">
                                    <a className={`nav-link px-5 ${styles.navlinkright} ${styles.navLogin}`}>Login</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}