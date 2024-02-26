import React, { useState } from 'react';
import styles from './EmailCard.module.sass';

const EmailCard: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;

    const validateEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (emailRegex.test(email)) {
            setError("Your email is confirmed!")
        } else if (email == "") {
            setError("Enter your email address");
        } else if (!emailRegex.test(email)) {
            setError("This email is not valid");
        }
    };

    return (
        <div className={styles.email_card}>
            <h1>REFER FRIENDS AND GET REWARDS</h1>
            <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
            <div className={styles.error_state}>{error && <div>{error}</div>}</div>
            <form onSubmit={validateEmail}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button type="submit">Get Referral Link</button>
            </form>
            <p className={styles.small_text}>Limits on max rewards apply.</p>
        </div>
    );
};

export default EmailCard;