import React from 'react';
import styles from './Footer.module.sass';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_left}>
                    <img src="logo.svg" alt="Ratepunk logo" className={styles.logo} />
                    <p className={styles.p1}>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
                    <p className={styles.p2}>© 2021 Ratepunk. All Rights Reserved.</p>
                </div>
                <nav className={styles.footer_nav}>
                    <div className={styles.footer_nav_left}>
                        <h2>QUICK LINKS</h2>
                        <div className={styles.footer_nav_left_links}>
                            <a href="#" target="_blank" rel="noopener noreferrer">Price Comparison</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Chrome Extension</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">How It Works</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Ratepunk Blog</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        </div>
                    </div>
                    <div className={styles.footer_nav_right}>
                        <div className={styles.contact}>
                            <h2>CONTACT</h2>
                            <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
                        </div>
                        <div className={styles.social}>
                            <h2>SOCIAL</h2>
                            <div className={styles.social_links}>
                                <a href="https://www.instagram.com/ratepunk/" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="Instagram logo" /></a>
                                <a href="https://www.facebook.com/r8punk/" target="_blank" rel="noopener noreferrer"><img src="facebook.svg" alt="Facebook logo" /></a>
                                <a href="https://www.linkedin.com/company/ratepunk/" target="_blank" rel="noopener noreferrer"><img src="linkedin.svg" alt="LinkedIn logo" /></a>
                                <a href="https://twitter.com/rate_punk" target="_blank" rel="noopener noreferrer"><img src="twitter.svg" alt="Twitter logo" /></a>
                                <a href="https://www.tiktok.com/@ryanthetravelguy?lang=en" target="_blank" rel="noopener noreferrer"><img src="tiktok.svg" alt="TikTok logo" /></a>
                            </div>
                        </div>
                    </div>
                </nav>
                <p className={styles.p3}>© 2021 Ratepunk. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;