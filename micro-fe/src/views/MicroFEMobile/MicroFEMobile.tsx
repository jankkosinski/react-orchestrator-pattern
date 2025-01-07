import React from 'react';
import { LangButton, WelcomeBox } from '../../components';
import styles from './microfemobile.module.scss';

export const MicroFEMobile = () => {
  return (
    <div className={styles.wrapper}>
      <WelcomeBox />
      <LangButton />
    </div>
  );
};
