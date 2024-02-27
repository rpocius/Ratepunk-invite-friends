import React from 'react';
import styles from './StoreLinks.module.sass';

const StoreLinks: React.FC = () => {
    return (
        <div className={styles.store_container}>
            <div className={styles.store_links}>
                <a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk" 
                target="_blank" 
                className={styles.store}
                rel="noopener noreferrer" >
                    <img src="chrome.svg" alt="Chrome" />
                    <div className={styles.store_text}>
                        <p className={styles.p1} >available in the</p>
                        <p className={styles.p2} >chrome web store</p>
                    </div>
                </a>
                <a href="https://apps.apple.com/app/ratepunk/id1607823726" 
                target="_blank" 
                className={styles.store}
                rel="noopener noreferrer" >
                    <img src="apple.svg" />
                    <div className={styles.store_text}>
                        <p className={styles.p1} >available in the</p>
                        <p className={styles.p2} >apple app store</p>
                    </div>
                </a>
                <div className={styles.reviews}>
                    <div className={styles.stars}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                    </div>
                    <a 
                        href="https://chromewebstore.google.com/detail/ratepunk-hotel-booking-an/gdaioanblcnghddimngklkhgcbomfdck/reviews?utm_source=ratepunk"
                        target="_blank" 
                        rel="noopener noreferrer">
                        Chrome Store reviews
                    </a>
                </div>
            </div>
        </div >
    );
};

export default StoreLinks;