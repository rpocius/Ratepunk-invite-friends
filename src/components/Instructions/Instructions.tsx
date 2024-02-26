import React from 'react';
import styles from './Instructions.module.sass';

const Instructions: React.FC = () => {
  return (
    <div className={styles.instruction_container}>
      <div className={styles.instruction_step}>
        <img src="invite.svg" alt="Invite" />
        <div className={styles.instruction_text}>
        <p className={styles.blue_text}>STEP 1</p>
        <h2>INVITE FRIENDS</h2>
        <p>Refer friends with your unique referral link.</p>
        </div>
      </div>
      <div className={styles.instruction_step}>
        <div className={styles.instruction_text}>
        <p className={styles.blue_text}>STEP 2</p>
        <h2>COLLECT COINS</h2>
        <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
        </div>
        <img src="collect-coins.svg" alt="Collect coins" />
      </div>
      <div className={styles.instruction_step}>
        <img src="voucher.svg" alt="Voucher" />
        <div className={styles.instruction_text}>
        <p className={styles.blue_text}>STEP 3</p>
        <h2>GET VOUCHER</h2>
        <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;