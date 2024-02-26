import React from 'react';
import styles from './Instructions.module.sass';

const Instructions: React.FC = () => {
  return (
    <div className={styles.instructionContainer}>
      <div className={styles.instructionStep}>
        <img src="invite.svg" alt="Invite" />
        <p className={styles.blueText}>STEP 1</p>
        <h2>INVITE FRIENDS</h2>
        <p>Refer friends with your unique referral link.</p>
      </div>
      <div className={styles.instructionStep}>
        <img src="collect-coins.svg" alt="Collect coins" />
        <p className={styles.blueText}>STEP 1</p>
        <h2>COLLECT COINS</h2>
        <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
      </div>
      <div className={styles.instructionStep}>
        <img src="voucher.svg" alt="Voucher" />
        <p className={styles.blueText}>STEP 1</p>
        <h2>GET VOUCHER</h2>
        <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
      </div>
    </div>
  );
};

export default Instructions;