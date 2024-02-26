import React from 'react';
import EmailCard from '../EmailCard/EmailCard';
import Instructions from '../Instructions/Instructions';
import styles from './EmailSection.module.sass';

const EmailSection: React.FC = () => {
  return (
    <div className={styles.container}>
        <EmailCard />
        <Instructions />
    </div>
  );
};

export default EmailSection;