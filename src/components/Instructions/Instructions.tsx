import React from 'react';
import styles from './Instructions.module.sass';

const Instructions: React.FC = () => {
  return (
    <div className={styles.instruction_container}>
      <div className={styles.instruction_step}>
        <img src="invite.svg" alt="Invite" style={{ width: '128px', height : '140.44px' }} />
        <div className={styles.instruction_text}>
        <h2 className={styles.blue_text}>STEP 1</h2>
        <h3>INVITE FRIENDS</h3>
        <p>Refer friends with your unique referral link.</p>
        </div>
      </div>
      <div className={styles.instruction_step}>
        <div className={styles.instruction_text}>
        <h2 className={styles.blue_text}>STEP 2</h2>
        <h3>COLLECT COINS</h3>
        <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
        </div>
        <img src="collect-coins.svg" alt="Collect coins" style={{ width: '144px', height : '144px' }} />
      </div>
      <div className={styles.instruction_step}>
        <img src="voucher.svg" alt="Voucher" style={{ width: '144px', height : '144px' }} />
        <div className={styles.instruction_text}>
        <h2 className={styles.blue_text}>STEP 3</h2>
        <h3>GET VOUCHER</h3>
        <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;