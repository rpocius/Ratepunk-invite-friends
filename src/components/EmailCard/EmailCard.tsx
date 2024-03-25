import { useState } from 'react';
import styles from './EmailCard.module.sass';
import Image from 'next/image';

const EmailCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [goodEmail, setGoodEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const updateEmailInBin = async (newEmail: string) => {
    const binId = process.env.NEXT_PUBLIC_JSONBIN_BIN_ID;
    const apiKey = process.env.NEXT_PUBLIC_JSONBIN_API_KEY || "";
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          "X-Master-Key": apiKey,
        }),
        body: JSON.stringify({ email: newEmail })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
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
      <p>Refer your friends to us and earn hotel booking vouchers. We&apos;ll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>

      {goodEmail ? (
        <>
          <span className={styles.success_message}>
            <Image src="/success.svg" alt="success" width={24} height={24} />
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
