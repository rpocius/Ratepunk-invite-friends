import React from 'react';
import styles from './StoreLinks.module.sass';

const StoreLinks: React.FC = () => {
    return (
        <div className={styles.storeContainer}>
            <div className={styles.store}>
                <img src="chrome.svg" alt="Chrome" />
                <div className={styles.storeText}>
                    <p>available in the</p>
                    <p>chrome web store</p>
                </div>
            </div>
            <div className={styles.store}>
                <img src="apple.svg" />
                <div className={styles.storeText}>
                    <p>available in the</p>
                    <p>apple app store</p>
                </div>
            </div>
            <div className={styles.reviews}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="white" /></svg>
                <p>Chrome Store reviews</p>
            </div>
        </div>
    );
};

export default StoreLinks;