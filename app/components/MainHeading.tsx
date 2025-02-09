import React from 'react';
import styles from '@/app/Style/MainHeading.module.css';
const MainHeading = () => {
  return (
    <h1 className={styles.heading}>
      <span className={styles.text}>Cognative</span>
      AI-
      <span className={styles.text}>Automation</span>
    </h1>
  );
};

export default MainHeading;