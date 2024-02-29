import React, { useState } from 'react';
import styles from './EmailCard.module.sass';

const EmailCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [goodEmail, setGoodEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const updateEmailInBin = async (newEmail: string) => {
    const binId = "65df911e266cfc3fde90b9ec";
    const apiKey = "$2a$10$Dt5NEJ2Q/bkhtkdtb0Ujs.HMDon76LfKr6maxs8I7voB2DDKaSs5G";
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": apiKey
        },
        body: JSON.stringify({ email: newEmail })
      });
      const data = await response.json();
    } catch (error) {
      console.error("Error updating email in bin:", error);
    }
  };

  const validateEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "") {
      setError("Enter your email address");
    } else if (emailRegex.test(email)) {
      setError("");
      setGoodEmail(true);
      updateEmailInBin(email);
    } else {
      setError("This email is not valid");
    }
  };

  const referralLink = "https://ratepunk.com/referral"

  const copyLink = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className={styles.email_card}>
      <h1>REFER FRIENDS AND GET REWARDS</h1>
      <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>

      {goodEmail ? (
        <>
          <span className={styles.success_message}>
            <img src="/success.svg" alt="success" width={"24px"} height={"24px"} />
            Your email is confirmed!
          </span>
          <div className={styles.referral_div}>
            <input
              type="text"
              name="text"
              defaultValue={referralLink}
              readOnly
            />
            <button onClick={copyLink}>Copy</button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.error_state}>{error && <div>{error}</div>}</div>
          <form onSubmit={validateEmail}>
            <input
              type="email"
              name="email"
              placeholder={"Enter your email address"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Get Referral Link</button>
          </form>
        </>
      )}

      <p className={styles.small_text}>Limits on max rewards apply.</p>
    </div>
  );
};

export default EmailCard;
