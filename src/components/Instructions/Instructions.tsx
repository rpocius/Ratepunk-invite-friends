import styles from './Instructions.module.sass';
import Image from 'next/image';

const Instructions: React.FC = () => {
  return (
    <div className={styles.instruction_container}>
      <div className={styles.instruction_step}>
        <Image src="invite.svg" alt="Invite" width={128} height={140} />
        <div className={styles.instruction_text}>
        <h2 className={styles.blue_text}>STEP 1</h2>
        <h3>INVITE FRIENDS</h3>
        <p>Refer friends with your unique referral link.</p>
        </div>
      </div>
      <div className={styles.instruction_step}>
      <Image src="collect-coins.svg" alt="Collect coins" width={144} height={144} className={styles.img_mobile} />
        <div className={styles.instruction_text}>
        <h2 className={styles.blue_text}>STEP 2</h2>
        <h3>COLLECT COINS</h3>
        <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
        </div>
        <Image src="collect-coins.svg" alt="Collect coins" width={144} height={144} className={styles.img_desktop} />
      </div>
      <div className={styles.instruction_step}>
        <Image src="voucher.svg" alt="Voucher" width={144} height={144} />
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